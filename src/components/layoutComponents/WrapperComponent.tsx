import React from 'react'
import { SideBar } from './SideBar'

const WrapperComponent = ({children }) => {
  return (
    <div className="app-container">
        <SideBar /> 
        <div className='app-content'>
            {children}
        </div>
  </div>
  )
}

export default WrapperComponent