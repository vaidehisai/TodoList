import React, { useEffect } from 'react';
import { Outlet } from "react-router-dom";

export default function CustomLayout(){
    useEffect(()=>{
        // alert("header");
    })
    return(
        <div>
            <Outlet/>
        </div>
    )
}