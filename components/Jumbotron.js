import PrimaryButton from './PrimaryButton';
export default () => {
  return (
    <section>
      <div className="jumbotron__container row mr-0">
        <div className="jumbotron__elements-container col-md-8 col-lg-6">
          <h3 className="d-block d-sm-block d-md-none jumbotron__spot-title">¡Tu <b>alcancía</b> ahora <br/> en el celu!</h3>

          <img alt="chachito" className="jumbotron__pig" src="../static/images/pig-welcome-covid.png" />
          {/* <img alt="moneda" className="jumbotron__coin-1" src="../static/images/coin.png" /> */}
          {/* <img alt="moneda" className="jumbotron__coin-2" src="../static/images/coin.png" /> */}
          <img alt="celular" className="jumbotron__phone" src="../static/images/phone.png" />
          <h3 className="d-none d-sm-none d-md-block jumbotron__spot-title">¡Tu alcancía ahora en el celu!</h3>
        </div>
        <div className="jumbotron__title col-lg-5 col-md-12 pr-0">
          <h2><b>Una alcancía virtual donde </b></h2>
          <h2 className="mb-3"><b>juntar plata es muuuy fácil.</b></h2>
          <p className="mb-5">¡Empezá ahora!</p>
          <PrimaryButton style={{width:'260px !important'}} className="mt-0" bold="registrarme" onClick={()=>window.location.assign('https://app.invuelto.com/register')} />
        </div>

        <div className="jumbotron__circle">
          <img alt="decorado" src="../static/images/circle-jumbo.png" />
        </div>

      </div>
    </section>)
}