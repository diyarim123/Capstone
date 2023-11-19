import logo from "../images/littlelemon_logo.png";

export default function Footer() {
  return (
    <div id="about" className="bg-slate-100 py-5 px-[13%]">
      <section className="flex justify-between">

        <div className="flex flex-col gap-8 w-[20rem]">
          <img className='w-full' src={logo} alt="logo" />
          <p className='w-full'>We are a family owned Mediterraneran restaurant, focused on traditional recipes servered with a modern twist</p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-semibold">Important Links</h4>
          <a className="text-green" href="#home">Home</a>
          <a className="text-green" href="#menu">Menu</a>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="mt-3">Address</p> <span>123 Town Street, Chicago</span>
          <p className="mt-3">Phone</p> <span>+00 123 456 789</span>
          <p className="mt-3">Email</p> <span>little@lemon.com</span>    
        </div>

        <div className="flex flex-col gap-5">
          <h4 className="font-semibold">Social Media Links</h4>
          <span>Facebook</span>
          <span>Instagram</span>
          <span>Twitter</span>
        </div>

      </section>
    </div>
  )
}
