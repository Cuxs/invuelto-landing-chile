import React, { useState } from 'react'
import Link from 'next/link'
import Toolbar from './Toolbar';
import SideDrawer from './Toolbar/SideDrawer';
import Backdrop from './Toolbar/Backdrop';
import SecondaryButton from './SecondaryButton';

const Nav = (props) => {
  let backdrop;

  if (props.open) {
    backdrop = <Backdrop click={() => props.toggle(!props.open)} />
  }
  return (
    <nav>
      <div>
        <Toolbar drawerClickHandler={() => props.toggle(!props.open)} external={props.external} />
        <SideDrawer show={props.open} click={()=>props.toggle(!props.open)} external={props.external} />
        {backdrop}
      </div>
    </nav>
  )
}

export default Nav
