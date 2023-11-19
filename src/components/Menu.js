import recipes from "../recipes"

export default function Menu() {
  return (
    <div className='px-[13%]'>

      <div id="menu" className='flex justify-between'>
        <h2 className='text-3xl font-bold'>This weeks specials</h2>
        <button className='btn'>Online Menu</button>
      </div>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 relative my-5'>
        {recipes.map((recipe) => (
            <div className="h-[60%] my-10" key={recipe.id}>
                <img className="w-full h-[70%] object-cover" src={recipe.image} alt={recipe.title} />
                <div className="bg-green text-white h-[75%]">
                    <div className="flex justify-between py-4 px-4">
                        <h3>{recipe.title}</h3>
                        <p>{recipe.price}$</p>
                    </div>
                        <p className="my-2 px-4">{recipe.description}</p>

                        <button className="btn mx-4 bottom-7 absolute">Order Now</button>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}
