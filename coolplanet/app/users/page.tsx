"use client"
import Table from "./table";
import { useState } from "react";

export default function Page() {
    
  const [pageNum, setPageNum] = useState(1)

  return (
    <>
    <div className="flex justify-normal flex-col p-10">
      <h1 className="text-7xl font-extrabold text-center mb-5">User Dashboard</h1>
      <div className="text-center">Page {pageNum} </div>
      <Table currentPage={pageNum}></Table>
    </div>
    <div className="flex justify-around">
    <button className={`${pageNum > 1 ? 'visible' : 'invisible'}`} onClick={() => setPageNum(pageNum-1)}>
      Previous Page
    </button>

    <button className={`${pageNum < 5 ? 'visible' : 'invisible'}`} onClick={() => setPageNum(pageNum+1)}>
      Next Page
    </button>
    </div>
    </>
  )
  }