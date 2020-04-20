import React, { Fragment, useState, useEffect } from 'react'
import { Waypoint } from 'react-waypoint';
import Swipe from 'react-easy-swipe';
import { hotjar } from 'react-hotjar';
import Head from '../components/head'
import Nav from '../components/nav'
import '../sass/main.scss';
import Jumbotron from '../components/Jumbotron';
import IntroComponent from '../components/IntroComponent';
import HowToComponent from '../components/HowToComponent';
import Area1Component from '../components/Area1Component';
import Area2Component from '../components/Area2Component';
import Area3Component from '../components/Area3Component';
import SecurityComponent from '../components/SecurityComponent';
import PricingComponent from '../components/PricingComponent';
import FooterComponent from '../components/FooterComponent';
const Home = () => {
  const [group1, toggleVisibilityGroup1] = useState(true)
  const [group2, toggleVisibilityGroup2] = useState(false)
  const [group3, toggleVisibilityGroup3] = useState(false)
  const [group4, toggleVisibilityGroup4] = useState(false);
  const [sideDrawerOpen, toggleSideDrawer] = useState(false);
  useEffect(()=>{
    hotjar.initialize(1063100, 6);
  },[])

  return (
    <Fragment>
        <Swipe onSwipeLeft={() =>toggleSideDrawer(false)}>
        <Head title="Invuelto, tu alcancía virtual" description="Desarrollamos una herramienta con la que ahora sí vas a poder ahorrar, cuidamos tu plata de la inflación ya que tus ahorros generan intereses a
  tu favor. Vos elegís el monto y la forma de ingresar dinero." url="www.invuelto.com" />
        <Nav open={sideDrawerOpen} toggle={toggleSideDrawer}></Nav>
          <Jumbotron />
          <IntroComponent />
          <Waypoint
          fireOnRapidScroll={false}
            onEnter={() => toggleVisibilityGroup2(true)}
          />
          <Area1Component />
          <Waypoint
          fireOnRapidScroll={false}
            onEnter={() => toggleVisibilityGroup2(true)}
          />
          <img className="area2__spots" alt="decoracion" src="../static/images/multiple-spots.png"></img>
          <Waypoint
          fireOnRapidScroll={false}
            onEnter={() =>{
              toggleVisibilityGroup2(true)
              toggleVisibilityGroup3(true)
            }}
          />
          <Area2Component showImages={group2} />
          <HowToComponent showImages={group2} />
          <Waypoint
          fireOnRapidScroll={false}
              onEnter={() =>{
                toggleVisibilityGroup2(true)
                toggleVisibilityGroup3(true)
              }}
          />
          <Waypoint
          fireOnRapidScroll={false}
            onEnter={() =>{
              toggleVisibilityGroup2(true)
              toggleVisibilityGroup3(true)
              toggleVisibilityGroup4(true)
            }}
          />
          <Area3Component showImages={group3}/>
          <SecurityComponent showImages={group3}/>
          <Waypoint
          fireOnRapidScroll={false}
            onEnter={() =>{
              toggleVisibilityGroup2(true);
              toggleVisibilityGroup3(true);
              toggleVisibilityGroup4(true);
            }}
          />
          <PricingComponent showImages={group4} />
          {/* <div className="text-center mt-5"> */}
            {/* //TODO agregar lista de posts de facebook */}
            {/* <div className="fb-page" data-href="https://www.facebook.com/invuelto" data-tabs="timeline" data-width="350" data-height="500" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/invuelto" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/invuelto">Invuelto</a></blockquote></div> */}
          {/* </div> */}
          <FooterComponent showImages={group4} />
        </Swipe>
      </Fragment>
        

  )
}

export default Home
