import { NextResponse } from "next/server";
import users from '../users.json'
// To handle a GET request to /api
export async function GET(request: Request,   { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id 
  const user = users.find((user) => (user.id === parseInt(id)))
  if (!user) {
    return NextResponse.json(null)
  }
  return NextResponse.json(users.find((user) => (user.id === parseInt(id))), { status: 200 });
}
