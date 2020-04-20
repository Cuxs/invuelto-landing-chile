import React, { Fragment, useState } from 'react'
import ReactMarkdown from "react-markdown";
import Swipe from 'react-easy-swipe';
import {terms} from "../components/terms";
import Head from '../components/head'
import Nav from '../components/nav'
import '../sass/main.scss';

export default () =>{
  const [sideDrawerOpen, toggleSideDrawer] = useState(false);

return  (
  <Fragment>
    <Swipe onSwipeLeft={() =>toggleSideDrawer(false)}>
      <Head title="Términos y condiciones" description="Desarrollamos una herramienta con la que ahora sí vas a poder ahorrar, cuidamos tu plata de la inflación ya que tus ahorros generan intereses a
  tu favor. Vos elegís el monto y la forma de ingresar dinero." url="www.invuelto.com" />
      <Nav open={sideDrawerOpen} toggle={toggleSideDrawer} external></Nav>
      <div className="terms__container container">
      <ReactMarkdown source={terms()} />
      </div>
    </Swipe>
  </Fragment>)}