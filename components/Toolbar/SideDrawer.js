import { Fragment } from "react";
import SecondaryButton from "../SecondaryButton";
import { Link } from 'react-scroll'

export default props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <img alt="decorado" className="side-drawer__circle1" src="../../static/images/circle-aqua.png"></img>
      <button className="side-drawer__close-button" onClick={props.click}>&#8592;</button>
      <div className="text-center">
        <ul>
          <li><div><a href="/vueltos">Vueltos</a></div></li>
          <li>{props.external ? <a href="index#tus-intereses-primero">Cómo funciona</a>:
        <Link onClick={() => props.click()}  activeClass="side-drawer--active" to="tus-intereses-primero" offset={-120} duration={1000}>
                Cómo funciona
              </Link>
            }</li>
          <li>{props.external ? <a href="index#precios">Precios</a>:
        <Link onClick={() => props.click()}  activeClass="side-drawer--active" to="precios" offset={-120} duration={1000}>
          Precios
              </Link>
            }</li>
          {/* <li>{props.external ? <a href="#">FAQ</a>:
        <Link onClick={() => props.click()}  activeClass="side-drawer--active" to="tus-intereses-primero" offset={-120} duration={1000}>
                FAQ
              </Link>
            }</li> */}
          <li>{props.external ? <a href="index#academia-del-ahorro">Tips de ahorro</a>:
        <Link onClick={() => props.click()}  activeClass="side-drawer--active" to="academia-del-ahorro" offset={-120} duration={1000}>
          Tips de ahorro
              </Link>
            }</li>
        </ul>
        <SecondaryButton className="side-drawer__login" onClick={() => window.location.assign('https://app.invuelto.com/login')}>Ingresá</SecondaryButton>
      </div>
      <img alt="decorado" className="side-drawer__circle2" src="../../static/images/half-circle-blue-thin.png"></img>
    </nav>
  );
};