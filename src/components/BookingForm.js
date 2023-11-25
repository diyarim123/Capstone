import { redirect, Form, useActionData } from "react-router-dom";

export default function BookingForm() {
  
  const data = useActionData();


  return (
    <div className="flex flex-col p-5 my-[8%] mx-[13%] gap-5 bg-slate-100 rounded-md">
      <h1 className="text-yellow-400 font-bold text-3xl text-center">Table Reservation</h1>
      <span className="text-lg text-center">Please make sure to fill all the fields correctly</span>

      <Form method="post" action="/reserve" className="flex flex-col gap-5 relative">
        <label htmlFor="name">Name: </label>
        <input className="border-2 border-slate-300 rounded-md p-1" type="text" name="name" id="name" required/>
        <label htmlFor="Email">Email: </label>
        <input className="border-2 border-slate-300 rounded-md p-1" type="email" name="Email" id="Email" required/>
        <label htmlFor="phone">Phone Number: </label>
        <input className="border-2 border-slate-300 rounded-md p-1" type="number" name="phone" id="phone" required/>

        <label htmlFor="guest">Number of Guests: </label>
        <input className="border-2 border-slate-300 rounded-md p-1" type="number" name="guest" id="guest" required/>
        <label htmlFor="time">Time: </label>
        <input className="border-2 border-slate-300 rounded-md p-1" type="datetime-local" name="time" id="time" required/>

        <div className="text-end">
          <button className="bg-green text-white rounded-lg w-32 py-2 px-3 cursor-pointer" type="submit">Submit</button>
        </div>
      </Form>

      {data && 
        <p className="text-lg font-semibold">{data.successful}</p>
      }
    </div>
  )
}

// action function
export const reserveAction = async ( {request} ) => {

  const data = await request.formData();

  const formDatas = {
    name: data.get('name')
  }

  // send your post request
  if(formDatas.name.length > 0) {
    return {successful : `Congratulations ${formDatas.name} ! The Reservation has been made`}
  }



  // redirect the user
  return redirect("/")
}

