import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";


//Pages
import Home from './Pages/Home'
import About from "./Pages/About";
import Faq from "./Pages/help/Faq";
import Contact, { contactAction } from "./Pages/help/Contact";
import NotFound from "./Pages/NotFound";
import Careers, { careersLoader } from './Pages/careers/Careers.js'
import CareerDetails, { careerDetailsLoader } from './Pages/careers/CareerDetails.js';
import CareersError from "./Pages/careers/CareersError";

//layout
import RootLayout from "./Layouts/RootLayout";
import HelpLayout from "./Layouts/HelpLayout";
import CareersLayout from "./Layouts/CareersLayout";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<CareersError />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact/>} action={contactAction}/>
      </Route>
      <Route path="careers" element={<CareersLayout />}>
        <Route 
        index 
        element={<Careers />}
        loader={careersLoader}
         />
         <Route
         path=":id"
         element={<CareerDetails />}
         loader={careerDetailsLoader}
         />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App

