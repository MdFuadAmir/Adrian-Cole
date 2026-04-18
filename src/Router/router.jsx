import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Projects from "../Pages/Projects/Projects";
import CaseStudy from "../Pages/CaseStudy/CaseStudy";
import Contact from "../Pages/Contact/Contact";
import ProjectDetails from "../Pages/Projects/ProjectDetails";
import CaseStudyDetails from "../Pages/CaseStudy/CaseStudyDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
        {
            index:true,
            element: <Home/>
        },
        {
            path:'about',
            element: <About/>
        },
        {
            path:'projects',
            element: <Projects/>
        },
        {
            path:'projects/:id',
            element: <ProjectDetails/>
        },
        {
            path:'case-study',
            element: <CaseStudy/>
        },
        {
            path:'case-study/:id',
            element: <CaseStudyDetails/>
        },
        {
            path:'contact',
            element: <Contact/>
        },
    ]
  },
]);
export default router;
