"use client"
import Table from "./table";
import { useState } from "react";

export default function Page() {
    
  const [pageNum, setPageNum] = useState(1)

  return (
    <>
    <div style={{display: 'flex'}} className="justify-normal flex-col p-10">
      <h1 className="text-7xl font-extrabold text-center mb-5">User Dashboard</h1>
      <Table currentPage={pageNum}></Table>
    </div>
    {pageNum >1 && <button onClick={() => setPageNum(pageNum-1)}>
      Previous Page
    </button>}

    {pageNum <5 && <button onClick={() => setPageNum(pageNum+1)}>
      Next Page
    </button>}
    </>
  )
  }