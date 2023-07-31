import { createBrowserRouter,
Route,
createRoutesFromElements,
RouterProvider
 } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import Faq from "./pages/Faq";
import Contact, { contactAction } from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CareersLayout from "./layouts/CareersLayout";
import Careers, { careersLoader } from "./pages/Careers";
import CareerDetails, { careerDetailsLoader } from "./pages/CareerDetails";
import CareersError from "./pages/CareersError";

 const router = createBrowserRouter (
  createRoutesFromElements (
    <Route path="/" element={<RootLayout />}>
      <Route index element= {<Home />} />
      <Route path = "about" element= {<About />} />
      <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} action={contactAction} />

     </Route>

     <Route path="careers" element={<CareersLayout />} errorElement={<CareersError />}>
        <Route 
          index
          element={<Careers />} 
          loader={careersLoader}
         
        />

        <Route
          path=":id"
          element={<CareerDetails/>}
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
