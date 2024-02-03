import React from 'react'
import Navbar from './Navbar'
import User_output from "./User_output";

const Review = () => {
  return (
    <div>
      <Navbar/>
      <User_output/>
      <div className="flex items-center m-10">
        <h1 className=" text-5xl">Review</h1>
      </div>
    </div>
  )
}

export default Review
