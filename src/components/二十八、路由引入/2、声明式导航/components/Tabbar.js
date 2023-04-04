import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Tabbar() {
  return (
    <div>
      <ul>
        <li>
         <NavLink to='/Header'>header部分</NavLink>
        </li>
        <li>
         <NavLink to='/Center'>Center部分</NavLink>
        </li>
        <li>
         <NavLink to='/Footer'>Footer部分</NavLink>
        </li>
      </ul>
    </div>
  )
}
