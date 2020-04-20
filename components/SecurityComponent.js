export default ({showImages}) => <div className="security__container">
  {showImages ? <img alt="decorado" className="security__circle1" src="../static/images/circle-security1.png" />:<div/>}
  <div className="security__elements-container">
    <h2 className="text-color3 mb-4"><b>Seguridad</b></h2>
    <h3 className="text-color3 container">Tus ahorros siempre estarán seguros y disponibles para usarlos cuando quieras. Contamos con el respaldo de: </h3>
    <div className="row security__subcontainer">
      <div className="col-md-4 pig__container">
        {showImages ? <img alt="chancho asegurado" className="security__pig " src='../static/images/pig-asegurado.png'></img>:<div/>}
      </div>
      <div className="col-md-8  mb-5 d-flex justify-content-around align-items-center">
        <div className="security__images-container container ">
          {showImages ? <img alt="embarca" className="col" src="../static/images/embarca.png"></img>:<div/>}
          {showImages ? <img alt="startup mendoza" className="col" src="../static/images/startup.png"></img>:<div/>}
          {showImages ? <img alt="camara fintech" className="col" src="../static/images/camara.png"></img>:<div/>}
          {showImages ? <img alt="ministerio de produccion" className="col" src="../static/images/produccion.png"></img>:<div/>}
        </div>
      </div>
    </div>
  </div>
  {showImages ? <img alt="decorado" className="security__circle2" src="../static/images/circle-security2.png" />:<div/>}

</div>