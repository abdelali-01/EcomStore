import React, { useState } from "react";

export default function Searchbar() {
  const [category , setCategory] = useState('All') ;
  const [searchInput , setSearchInput] = useState("")
  return (
    <div className="container-md  d-flex pt-4 pb-2 justify-content-between align-items-center">
      <div className="logo text-center">
        <i class="fa-solid fa-shop fs-4"></i>
        <span className="fw-bold fs-5 d-block">E-commerce</span>
      </div>
      <div className="search position-relative" style={{
        backgroundColor : "#fff",
        border : "1px solid var(--red)",
        height :"fit-content" ,
        padding : "10px 20px",
        minWidth :"300px" ,
        borderRadius :"30px" ,
        flexGrow : ".5"
      }}>
        <i class="fa-solid fa-magnifying-glass fs-5"></i>
        <input type="text" placeholder="Search ..." style={{
          backgroundColor : "transparent" ,
          border : "none" ,
          outline : "none", 
          margin : " 0 10px",
          width :"80%"
        }} value={searchInput} onChange={(e)=>{
          setSearchInput(e.target.value)
        }}/>
        <select name="" id="" style={{
          backgroundColor : "var(--clear)" ,
          outline : "none" ,
          border : "none" ,
          position : "absolute",
          height  :"100%",
          top : "0" ,
          right : "0",
          borderRadius :"0 30px 30px 0",
          padding : "10px 40px" ,
          borderLeft : "1px solid var(--red)",
          cursor : "pointer"
        }} value={category} onChange={(e)=>{
          setCategory(e.target.value)
        }}>
          <option value="All">All</option>
          <option value="cloth">Cloth</option>
          <option value="car">CAR</option>
          <option value="shoes">Shoes</option>
        </select>
      </div>
      <div className="ProfileIcons d-flex align-items-center gap-4">
        <i class="fa-solid fa-cart-shopping fs-4"></i>
        <i class="fa-regular fa-user fs-4"></i>
      </div>
    </div>
  );
}
