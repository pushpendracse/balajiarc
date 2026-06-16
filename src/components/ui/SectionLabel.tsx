interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export default function SectionLabel({
  children,
  className = "",
  light = false,
}: SectionLabelProps) {
  return (
    <span
      className={`inline-block text-xs font-bold tracking-[0.2em] uppercase ${
        light ? "text-primary" : "text-primary"
      } ${className}`}
    >
      {children}
    </span>
  );
}
