"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterPage() {

  const router = useRouter()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleRegister(
    e: React.FormEvent
  ) {

    e.preventDefault()

    setLoading(true)

    try {

      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      })

      const data = await response.json()

      if (!response.ok) {
        alert(data.error)
        setLoading(false)
        return
      }

      router.push("/complete-profile")

    } catch (error) {

      console.log(error)

      alert("Erro ao criar conta")

    } finally {

      setLoading(false)

    }
  }

  return (

    <main className="min-h-screen bg-[#F7F2E8] flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-md">

        <div className="text-center mb-8">

          <h1 className="text-5xl font-bold text-[#985326]">
            LAPINUS
          </h1>

          <p className="mt-3 text-gray-600">
            Crie sua conta e comece a cuidar melhor do seu coelho
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <h2 className="text-2xl font-semibold text-center text-[#985326] mb-2">
            Criar Conta
          </h2>

          <p className="text-center text-gray-500 mb-8">
            Leva menos de 1 minuto
          </p>

          <form
            onSubmit={handleRegister}
            className="space-y-5"
          >

            <div>

              <label className="block mb-2 text-sm font-medium text-gray-700">
                Nome completo
              </label>

              <input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="
                  w-full
                  rounded-2xl
                  border
                  border-gray-300
                  px-4
                  py-4
                  outline-none
                  focus:border-[#F59C29]
                "
              />

            </div>

            <div>

              <label className="block mb-2 text-sm font-medium text-gray-700">
                E-mail
              </label>

              <input
                type="email"
                placeholder="seuemail@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="
                  w-full
                  rounded-2xl
                  border
                  border-gray-300
                  px-4
                  py-4
                  outline-none
                  focus:border-[#F59C29]
                "
              />

            </div>

            <div>

              <label className="block mb-2 text-sm font-medium text-gray-700">
                Senha
              </label>

              <input
                type="password"
                placeholder="Crie uma senha segura"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="
                  w-full
                  rounded-2xl
                  border
                  border-gray-300
                  px-4
                  py-4
                  outline-none
                  focus:border-[#F59C29]
                "
              />

            </div>

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                rounded-2xl
                bg-[#985326]
                text-white
                py-4
                font-semibold
                transition
                hover:bg-[#7D431D]
                disabled:opacity-60
              "
            >

              {
                loading
                  ? "Criando conta..."
                  : "Continuar"
              }

            </button>

          </form>

          <div className="mt-8 text-center">

            <p className="text-gray-500">
              Já possui uma conta?
            </p>

            <button
              onClick={() => router.push("/login")}
              className="
                mt-3
                font-semibold
                text-[#985326]
              "
            >
              Fazer Login
            </button>

          </div>

        </div>

      </div>

    </main>
  )
}