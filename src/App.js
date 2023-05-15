import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Features from "./Pages/Features/Features";
import Login from "./Pages/Auth/Login/Login";
import Register from "./Pages/Auth/Register/Register";
import Home from "./Pages/Features/Home/Home";
import Classroom from "./Pages/Features/Classroom/Classroom";
import Student from './Pages/Features/Student/Student';
import Teacher from "./Pages/Features/Teacher/Teacher";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Features></Features>,
    children: [
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "classroom",
        element: <Classroom></Classroom>,
      },
      {
        path: "student",
        element: <Student></Student>
      },
      {
        path: "teacher",
        element: <Teacher></Teacher>
      },
  
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <Register></Register>,
  },
]);

function App() {
  return (
    <>
      {" "}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
