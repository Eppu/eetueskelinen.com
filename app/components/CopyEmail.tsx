"use client";

import { useState } from "react";

const EMAIL = "hello@eetueskelinen.com";

const CopyIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CopyEmail = () => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Don't trigger copy when the user is finishing a text-selection drag.
  const handleEmailClick = () => {
    const selection = typeof window !== "undefined" ? window.getSelection()?.toString() ?? "" : "";
    if (selection.length > 0) return;
    copy();
  };

  const handleEmailKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      copy();
    }
  };

  return (
    <span className="inline-flex items-baseline gap-2 align-baseline">
      <span
        role="button"
        tabIndex={0}
        onClick={handleEmailClick}
        onKeyDown={handleEmailKeyDown}
        aria-label={`Copy email address ${EMAIL}`}
        className="email cursor-pointer select-text text-neutral-300 hover:text-yellowgreenselection focus-visible:text-yellowgreenselection focus-visible:outline-none transition-colors duration-150 underline decoration-dotted decoration-neutral-700 underline-offset-4 hover:decoration-yellowgreenselection"
      >
        hello@eetueskelinen<b>.obfuscation</b>.com
      </span>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Email copied to clipboard" : "Copy email address"}
        className={`inline-flex items-center gap-1 text-sm transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:text-yellowgreenselection ${
          copied ? "text-yellowgreen" : "text-neutral-500 hover:text-neutral-200"
        }`}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
        <span>{copied ? "Copied" : "Copy"}</span>
      </button>
    </span>
  );
};

export default CopyEmail;
