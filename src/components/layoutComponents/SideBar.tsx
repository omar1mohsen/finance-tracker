import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Arrow } from 'assets/svgs/side-arrow.svg';

export const SideBar = () => {

  const [openSide,setOpenSide] = useState(false);

  return (
    <div  className={`side-bar ${openSide ? 'hide-side':''}`}   >
      <span className={`toggle-btn  ${openSide ? 'rotate-0 -end-10':''}`} onClick={()=>{setOpenSide(!openSide)}}>
        <Arrow />  
      </span> 
      <div className='nav-list'>
        <NavLink to={'/'}  className={({ isActive })=>`${isActive ? "active":""}`}>
          Transaction List
        </NavLink> 
        <NavLink to={'/summary'}  className={({ isActive })=>`${isActive ? "active":""}`}>
          Summary View
        </NavLink>
      </div>
    </div>
  )
}
