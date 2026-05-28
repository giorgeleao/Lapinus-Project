import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import bcrypt from "bcrypt"

export async function POST(req: Request) {

  try {

    const body = await req.json()

    const { email, password } = body

    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })

    if (!user) {
      return NextResponse.json(
        { error: "Usuário não encontrado" },
        { status: 404 }
      )
    }

    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    )

    if (!passwordMatch) {
      return NextResponse.json(
        { error: "Senha inválida" },
        { status: 401 }
      )
    }

    return NextResponse.json({
      message: "Login realizado com sucesso",
      user
    })

  } catch (error) {

    console.log(error)

    return NextResponse.json(
      { error: "Erro no login" },
      { status: 500 }
    )
  }
}