import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import Main from "./components/Main";


const router = createBrowserRouter((
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
      <Route index element={<Main />} />
    </Route>
  )
))

function App() {


  return (
    <RouterProvider router={router} />
  );
}

export default App;
