interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children, className }) => {
  return (
    <a
      className={`text-neutral-400 hover:text-yellowgreenselection transition-all duration-150 ease-in-out
        ${className}`}
      target="_blank"
      rel="noreferrer"
      href={href}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
