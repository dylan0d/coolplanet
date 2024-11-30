export default async function Page({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const id = (await params).id
    const userResponse = await fetch(`http://localhost:3000/api/users/${id}`)
    const user = await userResponse.json();
    return <div>{user.first_name} {user.last_name}</div>
  }