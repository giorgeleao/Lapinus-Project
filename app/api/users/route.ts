import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {

    const body = await req.json()

    const { name, email, password } = body

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    })

    return NextResponse.json(user)

  } catch (error) {

    console.log(error)

    return NextResponse.json(
      { error: "Erro ao criar usuário" },
      { status: 500 }
    )
  }
}