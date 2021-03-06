import PrimaryButton from "./PrimaryButton";
import { Carousel } from "react-responsive-carousel";

export default ({ showImages }) => <div className="area2__container" id="tus-intereses-primero">
  <h2 className="container d-none d-sm-block"><b> Creá tu alcancía sin costo</b></h2>
  <h2 className="d-md-block d-lg-none"><b> Creá tu alcancía <br/> sin costo</b></h2>
  <h3 className="mb-5 container d-none d-sm-block">Registrate y empezá a juntar plata en tu <br /> alcancía virtual</h3>
  <img className="area2__image d-none d-md-block" alt="chancho compu" src='../static/images/pig-compu.png'></img>
  <div className="d-none d-md-none d-lg-flex area2__step-container mb-5">
    <div className="area2__step">
      <img alt="alcancia" src="../static/images/celular.svg"></img>
      <h3 className="mt-4 mb-5">1. Registrate gratis</h3>
      <p>Sólo con tu teléfono y </p>
      <p>email, y una contraseña</p>
    </div>
    <div className="area2__step">
      <img alt="ahorro" src="../static/images/invuelto-icon.svg"></img>
      <h3 className="mt-4 mb-5"> 2. Haz tu primer ahorro </h3>
      <p>Tú eliges cómo hacer </p>
      <p>el primer cash-in</p>
    </div>
    <div className="area2__step">
      <img alt="potenciamos tu ahorro" src="../static/images/ahorro-icon.svg"></img>
      <h3 className="mt-4">3. Tu plata</h3>
      <h3 className="mb-2"> se acumula!</h3>
      <p>Tus ahorros generan ganancias</p>
      <p> todos los días, revisá tu alcancía 24/7 </p>

    </div>
    <div className="area2__step">
      <img alt="Directo a tu bolsillo" src="../static/images/wallet-icon.svg"></img>
      <h3 className="mt-4">4. De la alcancía</h3>
      <h3 className="mb-2">a tu bolsillo</h3>
      <p> Sacá tu plata cuando quieras </p>
      <p>y sin costo</p>
    </div>
  </div>
  <div className="d-md-block d-lg-none">
    <Carousel
      centerMode
      swipeable
      transitionTime={200}
      className="pricing__carousel"
      emulateTouch
      showArrows={true}
      showIndicators={true}
      showStatus={false}
      showThumbs={false}>
      <div className="area2__step">
        <img alt="alcancia" src="../static/images/celular.svg"></img>
        <h3 className="mt-4 mb-5">1. Registrate gratis</h3>
        <p>Sólo con tu teléfono y </p>
        <p>email, y una contraseña</p>
      </div>
      <div className="area2__step">
        <img alt="ahorro" src="../static/images/invuelto-icon.svg"></img>
        <h3 className="mt-4 mb-5"> 2. Haz tu primer ahorro </h3>
        <p>Tú eliges cómo hacer </p>
        <p>el primer cash-in</p>
      </div>
      <div className="area2__step">
        <img alt="potenciamos tu ahorro" src="../static/images/ahorro-icon.svg"></img>
        <h3 className="mt-4">3. Tu plata se acumula!</h3>
        <p>Tus ahorros generan ganancias</p>
        <p>todos los días,</p>
        <p>revisá tu alcancía 24/7</p>
      </div>
      <div className="area2__step">
        <img alt="Directo a tu bolsillo" src="../static/images/wallet-icon.svg"></img>
        <h3 className="mt-4">4. De la alcancía</h3>
        <h3 className="mb-2">a tu bolsillo</h3>
        <p> Sacá tu plata cuando quieras </p>
        <p>y sin costo</p>
      </div>
    </Carousel>
  </div>
</div>