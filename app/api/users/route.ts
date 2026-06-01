import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import bcrypt from "bcrypt"

export async function POST(req: Request) {
  try {

    const body = await req.json()

    const {
      name,
      email,
      password,
      birthDate
    } = body

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Preencha todos os campos obrigatórios" },
        { status: 400 }
      )
    }

    const userExists = await prisma.user.findUnique({
      where: {
        email
      }
    })

    if (userExists) {
      return NextResponse.json(
        { error: "Usuário já existe" },
        { status: 400 }
      )
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword
      }
    })

    return NextResponse.json({
      message: "Usuário criado com sucesso",
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    })

  } catch (error) {

    console.log(error)

    return NextResponse.json(
      { error: "Erro no servidor" },
      { status: 500 }
    )
  }
}