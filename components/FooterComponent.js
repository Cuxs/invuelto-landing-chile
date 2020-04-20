export default ({ showImages }) => <div className="footer__container" style={{ height: '550px' }}>
  {showImages ? <img alt="decorado" className="footer__circle1" src="../static/images/circle-security1.png" /> : <div />}

  <div>
    <div className="container">
      <div className="vueltos__footer">
        <div className="text-center">
          <h2 className="text-color3" style={{ fontSize: '25px' }}>Enterate de nuestras novedades </h2>
          <div className='d-lg-flex flex-md-column mt-5 justify-content-around'>
            <div>
              <a href="/"><h2 className="text-color3"><b>invuelto</b>.com</h2></a>
            </div>
            <div className="mt-4">
              <a className="ml-3" target="__blank" rel="noopener noreferrer" href="https://facebook.com/invuelto"><img alt="redes" src='../static/images/fb.png' /></a>
              <a className="ml-3" target="__blank" rel="noopener noreferrer" href="https://linkedin.com/in/invuelto"><img alt="redes" src='../static/images/in.png' /></a>
              <a className="ml-3" target="__blank" rel="noopener noreferrer" href="https://instagram.com/invuelto"><img alt="redes" src='../static/images/insta.png' /></a>
              <a className="ml-3" target="__blank" rel="noopener noreferrer" href="https://twitter.com/invuelto"><img alt="redes" src='../static/images/twitter.png' /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__social-container">
        <a href="/terminos-y-condiciones"><p className="text-color3 text-center mb-1 mt-3">Términos y condiciones</p></a>
        {showImages ? <img alt="decorado" className="footer__circle2" src="../static/images/circle-security2.png" /> : <div />}
      </div>
    </div>
    <img alt="decorado" className="footer__circle2" src="../static/images/circle-security2.png" />
    <img className="deco6" src="/static/images/vueltos/circle-2.svg" alt="decorado" />
  </div>


</div>