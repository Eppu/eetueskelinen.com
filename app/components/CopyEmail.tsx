"use client";

import { useState } from "react";

const CopyEmail = () => {
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("hello@eetueskelinen.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    // if copied, just show the Copied! text
    // if not, show the email

    <span
      className="email cursor-pointer hover:text-yellowgreenselection"
      onClick={handleCopy}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      hello@eetueskelinen<b>.obfuscation</b>.com
      {hovered && (
        <span className="text-sm ml-2 justify-center align-middle text-neutral-400">
          {copied ? "Copied!" : "📋 Click to copy"}
        </span>
      )}
    </span>

    // <span className="email cursor-pointer hover:underline" onClick={handleCopy}>
    //   hello@eetueskelinen<b>.obfuscation</b>.com
    //   {copied ? <span className="text-green-500 ml-2">Copied!</span> : null}
    // </span>
  );
};

export default CopyEmail;
