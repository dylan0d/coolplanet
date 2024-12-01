"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import Skeleton from './skeleton'

export default function Table({
    currentPage,
  }: {
    currentPage: number;
  }) {
    const [userData, setUserData] = useState([])
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        console.log("in table use effect")
        fetch('/api/users?page='+currentPage)
          .then((res) => res.json())
          .then((data) => {
            setUserData(data)
            setLoading(false)
          })
      }, [currentPage])
    let userComponents = userData.map((user: any) => (
      <div key={user.id}className="border-2 border-cyan-500 rounded-lg text-center">
        <Link href={`/users/${user.id}`}>
          <div>{user.first_name} {user.last_name}</div>
        </Link>
      </div>
    ))

    return (
    <>
      {isLoading && <Skeleton/>}
      {!isLoading && <div className="grid grid-cols-2 gap-4">
      {
        ...userComponents
      }
    </div>}
    </>)
  }