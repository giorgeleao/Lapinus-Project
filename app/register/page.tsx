"use client"

import { useState } from "react"

export default function RegisterPage() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleRegister(e: any) {

    e.preventDefault()

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

    alert(data.message || data.error)
  }

  return (

    <div>

      <h1>Cadastro Lapinus</h1>

      <form onSubmit={handleRegister}>

        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">
          Criar conta
        </button>

      </form>

    </div>
  )
}