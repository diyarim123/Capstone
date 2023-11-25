import firstImage from "../images/MarioandAdrianA.jpg";
import secondImage from "../images/MarioandAdrianb.jpg";

export default function About() {
  return (
    <div id="#about" className='flex lg:flex-row flex-col gap-[30%] px-[13%] py-[8%] relative'>

      <div className='flex flex-col gap-5'>
        <h2 className='text-4xl font-bold text-yellow-400'>Little Lemon</h2>
        <h4 className='text-2xl font-semibold text-green'>Chicago</h4>
        <p className='lg:w-96 text-lg'> Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States
            to pursue their shared dream of owning a restaurant.
            To craft the menu, Mario relies on family recipes and his experience as a chef in Italy.<br />
            Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond
            classic Italian to incorporate additional cuisines from the Mediterranean region.
        </p>
      </div>

      <div className="p-4">
        <img className="absolute z-10 w-[20rem] h-[25rem] object-cover top-2 right-[12rem] rounded-lg lg:block hidden" src={firstImage} alt="Marwan & Adrian" />
        <img className="w-[20rem] h-[25rem] object-cover rounded-lg" src={secondImage} alt="Marwan & Adrian" />
      </div>
    </div>
  )
}
