"use client"

import { useState } from "react"

export default function LoginPage() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleLogin() {

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

    alert("Login realizado com sucesso")
  }

  return (

    <div>

      <h1>Login Lapinus</h1>

      <input
        type="email"
        placeholder="Email"
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

      <button onClick={handleLogin}>
        Entrar
      </button>

    </div>
  )
}