import bannerImg from "../images/restauranfood.jpg";

export default function Header() {
  return (
    <div id="home" className='py-20 px-[13%] bg-green text-white relative'>
      
      <div className='flex flex-col gap-4'>
        <h1 className='font-bold text-5xl text-yellow-400'>Little Lemon</h1>
        <span className='font-semibold text-xl'>Chicago</span>
        <p className='md:w-1/2'>We are a family owned Mediterraneran restaurant, focused on traditional recipes servered with a modern twist</p>
        <button className='btn'>Reserve Table</button>
      </div>


      <img src={bannerImg} className='hidden lg:inline-block absolute right-[13%] top-[10%] rounded-xl w-[400px] h-[60vh] z-10 object-cover' alt='mainpic' />
     
    </div>
  )
}
