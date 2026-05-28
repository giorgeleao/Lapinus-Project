import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import bcrypt from "bcrypt"

export async function POST(req: Request) {
  try {

    const body = await req.json()

    const { name, email, password } = body

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Preencha todos os campos" },
        { status: 400 }
      )
    }

    // VERIFICA EMAIL ESPECÍFICO
    const userExists = await prisma.user.findUnique({
      where: {
        email: email
      }
    })

    if (userExists) {
      return NextResponse.json(
        { error: "Usuário já existe" },
        { status: 400 }
      )
    }

    // CRIPTOGRAFA SENHA
    const hashedPassword = await bcrypt.hash(password, 10)

    // CRIA USUÁRIO
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword
      }
    })

    return NextResponse.json({
      message: "Usuário criado com sucesso",
      user
    })

  } catch (error) {

    console.log(error)

    return NextResponse.json(
      { error: "Erro no servidor" },
      { status: 500 }
    )
  }
}