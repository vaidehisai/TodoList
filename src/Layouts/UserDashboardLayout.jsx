import React, { useEffect } from 'react';
import SideNavBar from '../CommonComponents/SideNav';

function UserDashboardLayout(props){
    useEffect(()=>{
       
    },[])
    return(
        <div>
          <SideNavBar Redirectpath={props.Redirectpath}/>
        </div>
    )
}
export default UserDashboardLayout