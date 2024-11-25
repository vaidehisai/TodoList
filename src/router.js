import React from "react";
import CustomLayout from "./Layouts/CustomLayout";
import UserDashBoardLayout from "./Layouts/UserDashboardLayout"
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ToDoList from "./Pages/Dashboard";


export default function Routers(Redirectpath) {

  let route = [
    {
      path: "/",
      element: <CustomLayout Redirectpath={Redirectpath} />,
      children: [
        { index: true, element: <Login Redirectpath={Redirectpath} /> },
        {
          path: "/Login",
          element: <Login Redirectpath={Redirectpath} />,
          children: [],
        }, 
        {
            path: "/SignUp",
            element: <SignUp Redirectpath={Redirectpath} />,
            children: [],
          },

      
      ],
    },
    {
        path: "/dashboard",
        
        element: <UserDashBoardLayout Redirectpath={Redirectpath} />,
        children: [
          { index: true, element: <ToDoList Redirectpath={Redirectpath} /> },
          {
            path: "/dashboard/list",
            element: <ToDoList Redirectpath={Redirectpath} />,
            children: [],
          }, 
         
  
        
        ],
      },
 
  ];

  return route;
}
