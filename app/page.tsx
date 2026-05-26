export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5F2] flex">

      {/* SIDEBAR */}

      <aside className="w-[240px] border-r border-[#E8C495] bg-[#F8F5F2] p-8 flex flex-col justify-between">

        <div>

          <div className="mb-16">
            <h1 className="text-4xl font-black text-[#985326] tracking-tight">
              LAPINUS
            </h1>

            <p className="text-[#985326]/70 mt-2 text-sm">
              Rabbit Care Platform
            </p>
          </div>

          <nav className="space-y-3">

            {[
              "Início",
              "Comunidade",
              "Fórum",
              "Meus Coelhos",
              "Veterinários",
              "Marketplace",
            ].map((item) => (

              <div
                key={item}
                className="px-5 py-4 rounded-2xl hover:bg-[#E8C495]/30 transition-all duration-300 cursor-pointer text-[#985326] font-medium"
              >
                {item}
              </div>

            ))}

          </nav>

        </div>

        <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#E8C495]/30">

          <p className="text-sm text-[#985326]/60 mb-2">
            Perfil ativo
          </p>

          <h3 className="text-2xl font-bold text-[#985326]">
            Giorge
          </h3>

          <p className="text-[#985326]/60 mt-1">
            Tutor Premium
          </p>

        </div>

      </aside>

      {/* FEED CENTRAL */}

      <section className="flex-1 p-10 overflow-y-auto">

        {/* HEADER */}

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-6xl font-black text-[#985326] leading-tight">
              Comunidade Lapinus
            </h1>

            <p className="text-[#985326]/70 mt-3 text-xl">
              Compartilhe experiências e receba ajuda especializada
            </p>

          </div>

          <input
            type="text"
            placeholder="Buscar na comunidade..."
            className="bg-white px-6 py-5 rounded-3xl w-96 shadow-sm border border-[#E8C495]/30"
          />

        </div>

        {/* NOVO POST */}

        <div className="bg-white rounded-[35px] p-8 shadow-sm border border-[#E8C495]/30 mb-8">

          <h2 className="text-2xl font-bold text-[#985326] mb-5">
            Compartilhar experiência
          </h2>

          <textarea
            placeholder="Como está seu coelho hoje?"
            className="w-full bg-[#F8F5F2] rounded-3xl p-6 h-40 resize-none outline-none text-lg"
          />

          <div className="flex justify-end mt-5">

            <button className="bg-[#F59C29] hover:bg-[#e28716] transition-all duration-300 text-white px-8 py-4 rounded-2xl font-semibold shadow-sm">
              Publicar
            </button>

          </div>

        </div>

        {/* POSTS */}

        <div className="space-y-8">

          {/* POST 1 */}

          <div className="bg-white rounded-[35px] p-8 shadow-sm border border-[#E8C495]/30">

            <div className="flex items-center justify-between mb-6">

              <div>

                <h3 className="text-2xl font-bold text-[#985326]">
                  Ana Clara
                </h3>

                <p className="text-[#985326]/60">
                  Tutor de Luna
                </p>

              </div>

              <div className="text-[#985326]/50">
                há 2 horas
              </div>

            </div>

            <p className="text-lg leading-relaxed text-[#2B1E1A]">
              Meu coelho voltou a comer normalmente depois
              da troca de feno. Obrigada pelas recomendações.
            </p>

            <div className="flex gap-8 mt-8 text-[#985326]/70">

              <button>Curtir</button>
              <button>Comentar</button>
              <button>Salvar</button>

            </div>

          </div>

          {/* POST 2 */}

          <div className="bg-white rounded-[35px] p-8 shadow-sm border border-[#E8C495]/30">

            <div className="flex items-center justify-between mb-6">

              <div>

                <h3 className="text-2xl font-bold text-[#985326]">
                  Marcos Vinicius
                </h3>

                <p className="text-[#985326]/60">
                  Criador especializado
                </p>

              </div>

              <div className="text-[#985326]/50">
                há 5 horas
              </div>

            </div>

            <p className="text-lg leading-relaxed text-[#2B1E1A]">
              Alguém recomenda veterinário especializado
              em coelhos na região de Brasília?
            </p>

            <div className="flex gap-8 mt-8 text-[#985326]/70">

              <button>Curtir</button>
              <button>Comentar</button>
              <button>Salvar</button>

            </div>

          </div>

        </div>

      </section>

      {/* CHATBOT IA */}

      <aside className="w-[420px] border-l border-[#E8C495] bg-[#F8F5F2] p-8 flex flex-col">

        <div className="mb-8">

          <h2 className="text-4xl font-black text-[#985326]">
            Lapinus AI
          </h2>

          <p className="text-[#985326]/60 mt-2">
            Assistente especializado em coelhos
          </p>

        </div>

        {/* CHAT */}

        <div className="flex-1 bg-white rounded-[35px] p-6 shadow-sm border border-[#E8C495]/30 overflow-y-auto">

          <div className="bg-[#F8F5F2] rounded-3xl p-5 mb-5">

            <p className="text-[#2B1E1A] leading-relaxed">
              Olá, Giorge. Como posso ajudar você e seu coelho hoje?
            </p>

          </div>

          <div className="bg-[#F59C29] text-white rounded-3xl p-5 ml-10">

            <p>
              Meu coelho está sem apetite.
            </p>

          </div>

        </div>

        {/* INPUT */}

        <div className="flex gap-4 mt-6">

          <input
            type="text"
            placeholder="Digite sua pergunta..."
            className="flex-1 bg-white px-5 py-5 rounded-3xl border border-[#E8C495]/30"
          />

          <button className="bg-[#F59C29] text-white px-8 rounded-3xl font-semibold">
            Enviar
          </button>

        </div>

      </aside>

    </main>
  )
}