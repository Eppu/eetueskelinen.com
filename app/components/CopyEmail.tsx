"use client";

import { useState } from "react";

const CopyEmail = () => {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const [hintVisible, setHintVisible] = useState(false);
  const statusId = "copy-email-status";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("hello@eetueskelinen.com");
      setStatus("copied");
    } catch {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 2000);
  };

  const shouldShowStatus = hintVisible || status !== "idle";

  return (
    <span className="inline-flex items-center">
      <button
        type="button"
        className="email cursor-pointer border-0 bg-transparent p-0 text-left text-mutedink transition-colors duration-150 hover:text-yellowgreenselection"
        onClick={handleCopy}
        onMouseEnter={() => setHintVisible(true)}
        onMouseLeave={() => setHintVisible(false)}
        onFocus={() => setHintVisible(true)}
        onBlur={() => setHintVisible(false)}
        aria-describedby={shouldShowStatus ? statusId : undefined}
      >
        hello@eetueskelinen<b>.obfuscation</b>.com
      </button>
      {shouldShowStatus && (
        <span id={statusId} role="status" aria-live="polite" className="ml-2 text-sm text-mutedink">
          {status === "copied" && "Copied"}
          {status === "error" && "Copy failed"}
          {status === "idle" && "Click to copy"}
        </span>
      )}
    </span>
  );
};

export default CopyEmail;
