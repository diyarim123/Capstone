import Testimonial from "../TestimonialsData"
import starLogo from "../images/star.png";

export default function Testimonials() {

    const handleRatings = (size) => {
        const stars = [];
        const result = Math.floor(size);
        for(let i = 0; i < result; i++) {
            stars.push(<img className="w-4" src={starLogo} alt="star" />)
        }
        return stars;
    }

  return (
    <div className="flex flex-col justify-center items-center pb-[8%] px-[13%] ">
      <h2 className="text-2xl font-bold mb-24">Testimonials</h2>

      {/* Show Testimonials */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 g gap-10">
        {Testimonial.map(item => (
            <div key={item.id} className="flex flex-col gap-5 relative justify-center items-center rounded-md shadow-2xl overflow-hidden p-4">
                
                <div className="flex gap-2">{handleRatings(item.rating)}</div>
                <div className="flex flex-col items-center justify-center w-40 mb-5">
                    <img className="w-full h-full rounded-full object-cover" src={item.img} alt={item.name} />
                    <span className="mt-3 text-lg font-semibold">{item.name}</span>
                </div>
                <p className="text-center">{item.comment}</p>

            </div>
        ))}
      </div>
    </div>
  )
}
