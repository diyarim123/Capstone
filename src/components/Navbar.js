import { useState } from "react";
import logo from "../images/littlelemon_logo.png"

export default function Navbar() {
  
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <nav className='flex justify-between py-4 px-[13%] p-5 bg-slate-100 relative z-40'>

      <img className='w-40' src={logo} alt='logo' />

      <div className={`md:flex items-center gap-5 font-semibold  ${toggle ? `flex absolute z-50 top-[4.75rem] p-4 flex-col gap-5 items-center bg-blur w-40 h-screen right-0` : `hidden`}`}>
        <a className="text-green" href="#home">Home</a>
        <a className="text-green" href="#about">About</a>
        <a className="text-green" href="#menu">Menu</a>
      </div>

      <div className="flex md:hidden">
        {toggle ? 
        <i className="fa-solid fa-x my-auto text-xl cursor-pointer" onClick={handleToggle}></i>
         :
        <i className="fa-solid fa-bars my-auto text-xl cursor-pointer" onClick={handleToggle}></i>}
      </div>

    </nav>
  )
}
