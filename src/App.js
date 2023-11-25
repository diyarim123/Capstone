import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import Main from "./components/Main";
import BookingForm, { reserveAction } from "./components/BookingForm";


const router = createBrowserRouter((
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
      <Route index element={<Main />} />
      <Route path="reserve" element={<BookingForm />} action={reserveAction} />
    </Route>
  )
))

function App() {


  return (
    <RouterProvider router={router} />
  );
}

export default App;
