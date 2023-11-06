import React from 'react'

export default function Netflix() {

  const[ isScrolled,setIsScrolled,] = userState(false);
  window.onscroll = ()=>{
    setIsScrolled(window.pageYOffset===0? false:true);
    return()=>( window.onscroll= null);
  };
  return (
    <div>
      <h1>hachgjk</h1>
      <button> gihgytfkuj</button>
      <Navbar isScrolled={isScrolled}/>
    </div>
  )
}
