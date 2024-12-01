"use client"
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import Skeleton from "./skeleton";
import { useEffect, useState } from "react";
export default function Page({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const [user, setUser] = useState<any>()
    const [isLoading, setLoading] = useState(true)
    let id = -1
    params.then(p => {id = parseInt(p.id)})    
    let skillsCells = []
    let companyDetails;
    useEffect(() => {
      if (id > 0) {
        fetch(`/api/users/${id}`)  
          .then((res) => res.json())
          .then((data) => {
            setUser(data)
            setLoading(false)
            if (data) {
            skillsCells = data.skills.map((skill) => (
              <div key={skill}>{skill}</div>
            ))
            companyDetails = <div className="flex flex-col">
            <div>Name: {data.company.name}</div>
            <div>Department: {data.company.department}</div>
          </div>

            }
          })
      }
    }, [id])
    
    
    return (
      <>
      <div className="flex  mb-5">
        <div>
          <Link href="/users">
            <IoIosArrowBack size={60} className="h-full"/>
          </Link>

        </div>
        <h1 className="text-7xl font-extrabold text-center">User Details</h1>
      </div>
      {isLoading && <Skeleton/>}
      {!isLoading && user && 
      <>
        <div className="flex flex-col justify-center">
          <div className = "flex justify-evenly">
            {user.avatar && <img src={user.avatar}/>}
            <div className="flex flex-col justify-between">
              <div>{user.first_name} {user.last_name}</div>
              <div>User ID: {user.id}</div>
              <div>{user.email} - {user.emailVerified ? 'Verified' : 'Not verified'}</div>
              <div>Date of Birth: {user.dob}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 p-10">
            <div>User Skills</div>
            <div>Company Details</div>
            <div>{...skillsCells}</div>
            {companyDetails}
          </div>
        </div>
        </>}
        {!isLoading && !user && <div>Sorry, could not find that user</div>}
        </>
    )
  }