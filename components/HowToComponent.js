import { useRouter } from 'next/router'
import SpecialButton from "../components/SpecialButton";
export default ({ showImages }) => {
  const router = useRouter()

  return (<section>
    <div className="howto__container">
      {showImages? <img className="howto__circle1" src="../static/images/circle-aqua.png" />: <div/>}
      <div className="howto__elements-container">
        <h2 className="text-primary"><b>¿Por qué invuelto?</b></h2>
        <div className="howto__areas-container">
          <div className="howto__area1">
            {showImages ? <img alt="Intereses" src="../static/images/howto_step1.png"></img> : <div />}
            <h3 className="mb-0 mt-4 mb-4">El primer empujón</h3>
            <p className="text-primary">Venimos a motivarte para</p>
            <p className="text-primary"> que alcances tus objetivos</p>
            <p className="text-primary">por tus propios medios </p>
          </div>
          <div className="howto__area2">
            {showImages ? <img alt="Vueltos" src="../static/images/howto_step2.png"></img> : <div />}
            <h3 className="mb-0 mt-4 mb-4">A tu medida</h3>
            <p className="text-primary">Queremos que todos</p>
            <p className="text-primary">puedan juntar plata por eso </p>
            <p className="text-primary">ofrecemos múltiples formas </p>
          </div>
          <div className="howto__area3">
            {showImages ? <img alt="tips de ahorro" src="../static/images/howto_step3.png"></img> : <div />}
            <h3 className="mb-0 mt-4 mb-4">Sin esfuerzo</h3>
            <p className="text-primary">Tu alcancía se llena sin</p>
            <p className="text-primary">que hagas nada gracias </p>
            <p className="text-primary">a nuestros servicios</p>
          </div>
        </div>
      </div>
      {showImages ? <img className="howto__circle2" src="../static/images/circle-opaqueblue.png" /> : <div />}
    </div>
  </section>)
}