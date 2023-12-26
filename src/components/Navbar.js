import { FiSearch } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";


export const Navbar=()=>{
     

     return(
        <>
         <div className="navbar center">
              <div className="logo_box center">
               <img src="https://img.freepik.com/free-vector/tree_1308-36471.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703462400&semt=sph" alt="logo" className="logo_img" />
               <span> Company </span>
              </div>
              <div className="search_box spaceAroun">
                <div className="search center">
                 <span className="search_logo"><FiSearch size="20px"/>
                                                  </span>   
                 <input className="search_input" placeholder=""></input>
                </div>
                <div className="notification spaceAroun">
                <div className="notification_logo "><IoIosNotificationsOutline size="30px"/>
</div>
                <div className="contact_logo "><BsFillPersonFill size="30px" />
</div>
                </div>
              </div>

         </div>
        </>
     ) 

}