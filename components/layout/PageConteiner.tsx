interface Props {
  children: React.ReactNode
}

export default function PageContainer({
  children,
}: Props) {
  return (
    <div
      className="
      min-h-screen
      bg-[var(--lapinus-bg)]
      px-4
      py-6
      md:px-8
      lg:px-10
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        "
      >
        {children}
      </div>
    </div>
  )
}