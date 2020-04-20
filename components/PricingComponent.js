import { Carousel } from "react-responsive-carousel";

export default () => <div className="pricing__container" id="precios">
  <h2><b>Costos</b></h2>
  <h3 className="text-primary mt-4 container">Tu alcancía gratis hasta $3.500.</h3>
  <h3 className="text-primary container">Podés ahorrar y generar intereses.</h3>
  <div className="d-none d-md-none d-lg-flex pricing__items-container">
    <div className="item-normal">
      <p className="item-normal__price">$<b>0</b></p>
      <p className="item-normal__description">Revisar <b>Saldos</b> y</p>
      <p className="item-normal__description"><b>MOVIMIENTOS</b></p>
    </div>
    <div className="item-normal">
      <p className="item-normal__price">$<b>0</b></p>
      <p className="item-normal__description"><b>Simulador</b> de</p>
      <p className="item-normal__description"><b>progresos</b></p>
    </div>
    <div className="item-important">
      <p className="item-important__price">$<b>0</b></p>
      <p className="item-important__description">Usuario<b> INVUELTO FULL</b></p>
    </div>
    <div className="item-normal">
      <p className="item-normal__price">$<b>0</b></p>
      <p className="item-normal__description"><b>Ingresar</b> o <b>RETIRAR</b></p>
      <p className="item-normal__description"><b>dinero 24/7</b></p>
    </div>
  </div>
  <div className="d-md-block d-lg-none">
    <Carousel 
      centerMode
      swipeable
      transitionTime={200}
      className="pricing__carousel"
      emulateTouch
      showArrows
      showIndicators={false}
      showStatus={false}
      showThumbs={false}>
      <div className="item-normal">
        <p className="item-normal__price">$<b>0</b></p>
        <p className="item-normal__description">Revisar <b>Saldos</b> y</p>
        <p className="item-normal__description"><b>MOVIMIENTOS</b></p>
      </div>
      <div className="item-normal">
        <p className="item-normal__price">$<b>0</b></p>
        <p className="item-normal__description"><b>Simulador</b> de</p>
        <p className="item-normal__description"><b>progresos</b></p>
      </div>
      <div className="item-important">
        <p className="item-important__price">$<b>0</b></p>
        <p className="item-important__description">Usuario<b> INVUELTO FULL</b></p>
      </div>
      <div className="item-normal">
        <p className="item-normal__price">$<b>0</b></p>
        <p className="item-normal__description"><b>Ingresar</b> o <b>RETIRAR</b></p>
        <p className="item-normal__description"><b>dinero 24/7</b></p>
      </div>
    </Carousel>
  </div>
  <p className="mt-5 container">$50 por mes, si superaste los $3.500 de ahorro,</p>
  <p className="container">Y el 0,16% mensual si superás los $25.000 de ahorro.</p>


</div>