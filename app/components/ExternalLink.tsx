interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children, className }) => {
  return (
    <a
      className={`text-mutedink transition-colors duration-150 ease-in-out hover:text-yellowgreenselection ${className ?? ""}`}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
