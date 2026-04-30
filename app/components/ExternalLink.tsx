interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const ArrowIcon = () => (
  <svg
    width="0.7em"
    height="0.7em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="inline-block ml-0.5 -translate-y-px transition-transform duration-200 ease-out group-hover/external:translate-x-0.5 group-hover/external:-translate-y-1"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="9 7 17 7 17 15" />
  </svg>
);

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children, className }) => {
  return (
    <a
      className={`group/external text-neutral-300 hover:text-yellowgreenselection transition-colors duration-150 ease-in-out underline decoration-dotted decoration-neutral-700 underline-offset-4 hover:decoration-yellowgreenselection ${className ?? ""}`}
      target="_blank"
      rel="noreferrer"
      href={href}
    >
      {children}
      <ArrowIcon />
    </a>
  );
};

export default ExternalLink;
