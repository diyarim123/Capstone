import { Link } from "react-router-dom";
import logo from "../images/littlelemon_logo.png";

export default function Footer() {
  return (
    <div id="about" className="bg-slate-100 py-5 px-[13%]">
      <section className="flex flex-col gap-10 items-center justify-center">

        <div className="flex md:flex-row flex-col md:gap-32 gap-10 py-5 md:p-0">
          <div className="flex flex-col gap-8 w-[20rem]">
              <img className='w-full' src={logo} alt="logo" />
              <p className='w-full'>We are a family owned Mediterraneran restaurant, focused on traditional recipes servered with a modern twist</p>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-semibold">Important Links</h4>
              <Link className="text-green" to='/'>Home</Link>
              <a className="text-green" href="#menu">Menu</a>
              <a className="text-green" href="#about">About</a>
              <Link className="text-green" to="/reserve">Reserve</Link>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <p className="mt-3">Address</p> <span>123 Town Street, Chicago</span>
              <p className="mt-3">Phone</p> <span>+00 123 456 789</span>
              <p className="mt-3">Email</p> <span>little@lemon.com</span>    
            </div>

            <div className="flex flex-col gap-5">
              <h4 className="font-semibold">Developer Links</h4>
              <a href="https://github.com/diyarim123">Github</a>
              <a href="https://www.instagram.com/diyarimathers/">Instagram</a>
              <a href="https://www.linkedin.com/in/diyari-mohammed-3a2122228/">Linked In</a>
            </div>
        </div>

        <p className="text-md">&copy; Copyright 2023 <span className="font-semibold">Diyari Mohammed</span></p>
      </section>
    </div>
  )
}
