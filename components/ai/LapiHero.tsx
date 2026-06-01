import Card from "../ui/Card";
import LapiAvatar from "./LapiAvatar";

export default function LapiHero() {
  return (
    <Card className="p-8 lg:p-10">

      <div
        className="
        flex
        flex-col
        lg:flex-row
        items-center
        gap-8
        "
      >

        <LapiAvatar />

        <div className="flex-1">

          <h1
            className="
            text-4xl
            lg:text-5xl
            font-bold
            text-[var(--lapinus-text)]
            mb-4
            "
          >
            Lapi IA
          </h1>

          <p
            className="
            text-lg
            text-[var(--lapinus-muted)]
            mb-8
            "
          >
            Especialista em saúde,
            comportamento e bem-estar
            de coelhos.
          </p>

          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-4
            "
          >

            <div
              className="
              bg-[#FAF7F2]
              rounded-3xl
              p-4
              border
              border-[#EFE7DE]
              "
            >
              <h3 className="font-semibold">
                Baseado em evidências
              </h3>

              <p className="text-sm text-[var(--lapinus-muted)]">
                Informações confiáveis.
              </p>
            </div>

            <div
              className="
              bg-[#FAF7F2]
              rounded-3xl
              p-4
              border
              border-[#EFE7DE]
              "
            >
              <h3 className="font-semibold">
                Especialistas
              </h3>

              <p className="text-sm text-[var(--lapinus-muted)]">
                Conteúdo validado.
              </p>
            </div>

            <div
              className="
              bg-[#FAF7F2]
              rounded-3xl
              p-4
              border
              border-[#EFE7DE]
              "
            >
              <h3 className="font-semibold">
                Atualizado
              </h3>

              <p className="text-sm text-[var(--lapinus-muted)]">
                Dados sempre atuais.
              </p>
            </div>

          </div>

        </div>

      </div>

    </Card>
  );
}