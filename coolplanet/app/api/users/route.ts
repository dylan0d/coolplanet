import { NextResponse } from "next/server";
import { type NextRequest } from 'next/server'
import users from './users.json'

export async function GET(request: NextRequest,   { params }: { params: Promise<{ id: string }> }) {
    // Do whatever you want
    const searchParams = request.nextUrl.searchParams
    const pageNum = Math.min(parseInt(searchParams.get("page") ?? '1'), 5)
    const offset = (pageNum - 1) * 10
    return NextResponse.json(users.slice(offset, offset + 10), { status: 200 });
  }