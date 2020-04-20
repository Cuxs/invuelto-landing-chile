import { useState, useEffect } from "react";
import DrawerToggleButton from './DrawerToggleButton';
import SecondaryButton from '../SecondaryButton';
import { Link } from 'react-scroll'
import SpecialButton from "../SpecialButton";

export default props => {
  const [color, setColor] = useState('');
  const [logoColor, setLogoColor] = useState(false);
  const renderLogo = () => {
    return logoColor ?
      <div className="mt-3 toolbar__logo">
        <img src="../static/images/logo-color.png" />
      </div>
      :
      <div className="mt-3 toolbar__logo">
        <img src="../static/images/logo-blanco.png" />
      </div>
  }
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop) {
        setColor('')
        setLogoColor(false);
      } else {
        setColor('white')
        setLogoColor(true)
      }
    });
    return () => document.removeEventListener("scroll", this);
  })
  return (
    <header className={`toolbar ${color}`}>
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__container-items">
        <div><a href="/">{renderLogo()}</a></div>
        <div className="spacer" />
        <div className="toolbar__items">
          <ul>
            <li>{props.external ?
              <a href="/index#tus-intereses-primero">Cómo funciona</a>
              :
              <Link activeClass="side-drawer--active" to="tus-intereses-primero" offset={-120} duration={1000}>
                Cómo funciona
              </Link>
            }</li>
            <li>{props.external ?
              <a href="/index#precios">Precios</a>
              :
              <Link activeClass="side-drawer--active" to="precios" offset={-120} duration={1000}>
                Precios
              </Link>
            }</li>
            {/* <li>{props.external ?
              <a href="#">FAQ</a>
              :
              <Link activeClass="side-drawer--active" to="test1" offset={50} duration={1000}>
                Test 1
              </Link>
            }</li> */}
            <li>{props.external ?
              <a href="/index#academia-del-ahorro">Tips de ahorro</a>
              :
              <Link activeClass="side-drawer--active" to="academia-del-ahorro" offset={-120} duration={1000}>
                Tips de ahorro
              </Link>
            }</li>
          </ul>
        </div>

      </div>
    </header>
  )
}