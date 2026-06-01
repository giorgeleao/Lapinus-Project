"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {

  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleLogin(
    e: React.FormEvent
  ) {

    e.preventDefault()

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    const data = await response.json()

    if (!response.ok) {
      alert(data.error)
      return
    }

    router.push("/dashboard")
  }

  return (

    <main className="min-h-screen bg-[#F7F2E8] flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        <div className="text-center mb-10">

          <h1 className="text-5xl font-bold text-[#985326] tracking-tight">
            LAPINUS
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Plataforma inteligente para tutores de coelhos
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-2xl font-semibold text-center text-[#985326] mb-8">
            Entrar
          </h2>

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                w-full
                rounded-2xl
                border
                border-gray-200
                px-4
                py-4
                outline-none
                focus:border-[#F59C29]
              "
              required
            />

            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                w-full
                rounded-2xl
                border
                border-gray-200
                px-4
                py-4
                outline-none
                focus:border-[#F59C29]
              "
              required
            />

            <button
              type="submit"
              className="
                w-full
                rounded-2xl
                bg-[#985326]
                text-white
                py-4
                font-medium
                transition
                hover:bg-[#7D431D]
              "
            >
              Entrar
            </button>

          </form>

          <div className="mt-8 text-center">

            <p className="text-gray-500">
              Ainda não possui conta?
            </p>

            <button
              onClick={() => router.push("/register")}
              className="
                mt-3
                text-[#985326]
                font-semibold
              "
            >
              Criar Conta
            </button>

          </div>

        </div>

      </div>

    </main>
  )
}