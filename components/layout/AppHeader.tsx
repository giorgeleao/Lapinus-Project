import Image from "next/image"

export default function AppHeader() {
  return (
    <header
      className="
      flex
      items-center
      justify-between
      mb-8
      "
    >
      <div className="flex items-center gap-4">

        <Image
          src="/logo.png"
          alt="Lapinus"
          width={48}
          height={48}
        />

        <div>

          <h1
            className="
            text-xl
            font-bold
            "
          >
            Lapinus
          </h1>

          <p
            className="
            text-sm
            text-[var(--lapinus-muted)]
            "
          >
            Plataforma inteligente para coelhos
          </p>

        </div>

      </div>
    </header>
  )
}