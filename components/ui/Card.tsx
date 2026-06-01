interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        bg-white
        border
        border-[var(--lapinus-border)]
        rounded-[32px]
        shadow-[0_8px_32px_rgba(0,0,0,0.04)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}