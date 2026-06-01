"use client"

import { useState } from "react"

export default function CompleteProfilePage() {

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    birthDate: "",
    city: "",
    state: "",
    phone: "",

    rabbitName: "",
    rabbitBreed: "",
    rabbitGender: "",
    rabbitBirthDate: "",
    rabbitWeight: "",
    rabbitColor: "",
    rabbitNotes: ""
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault()

    console.log(formData)

    alert("Perfil salvo com sucesso")
  }

  return (

    <div className="min-h-screen bg-[#F7F2E8] flex items-center justify-center p-6">

      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-10">

        <div className="text-center mb-10">

          <h1 className="text-5xl font-bold text-[#985326]">
            LAPINUS
          </h1>

          <p className="text-gray-600 mt-3 text-lg">
            Complete seu perfil para começar
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-10"
        >

          <section>

            <h2 className="text-2xl font-semibold text-[#985326] mb-6">
              Dados do Tutor
            </h2>

            <div className="flex justify-center mb-6">

              <div className="w-28 h-28 rounded-full bg-[#E8C495] flex items-center justify-center text-[#985326] font-semibold">
                Foto
              </div>

            </div>

            <div className="space-y-4">

              <input
                name="fullName"
                placeholder="Nome completo"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#F59C29]"
              />

              <input
                name="username"
                placeholder="Nome de usuário"
                value={formData.username}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-4"
              />

              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-4"
              />

              <input
                name="phone"
                placeholder="Telefone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-4"
              />

              <input
                name="city"
                placeholder="Cidade"
                value={formData.city}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-4"
              />

              <input
                name="state"
                placeholder="Estado"
                value={formData.state}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-4"
              />

            </div>

          </section>

          <section>

            <h2 className="text-2xl font-semibold text-[#985326] mb-6">
              Meu Coelho
            </h2>

            <div className="flex justify-center mb-6">

              <div className="w-28 h-28 rounded-full bg-[#8EC86B] flex items-center justify-center text-white font-semibold">
                Foto
              </div>

            </div>

            <div className="space-y-4">

              <input
                name="rabbitName"
                placeholder="Nome do coelho"
                value={formData.rabbitName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-4"
              />

              <input
                name="rabbitBreed"
                placeholder="Raça"
                value={formData.rabbitBreed}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-4"
              />

              <input
                name="rabbitGender"
                placeholder="Sexo"
                value={formData.rabbitGender}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-4"
              />

              <input
                type="date"
                name="rabbitBirthDate"
                value={formData.rabbitBirthDate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-4"
              />

              <input
                name="rabbitWeight"
                placeholder="Peso (kg)"
                value={formData.rabbitWeight}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-4"
              />

              <input
                name="rabbitColor"
                placeholder="Cor"
                value={formData.rabbitColor}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-4"
              />

              <textarea
                name="rabbitNotes"
                placeholder="Observações"
                value={formData.rabbitNotes}
                onChange={handleChange}
                rows={4}
                className="w-full border border-gray-300 rounded-xl p-4"
              />

            </div>

          </section>

          <button
            type="submit"
            className="w-full bg-[#985326] text-white py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition"
          >
            Salvar Perfil
          </button>

        </form>

      </div>

    </div>
  )
}