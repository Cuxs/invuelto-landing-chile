import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import SecondaryButton from "../components/SecondaryButton";
import { hotjar } from 'react-hotjar';
import { getTotalCashBacks } from "../modules/fetches";
import '../sass/main.scss';
import '../sass/_odometer.scss';
import VideoContainer from '../components/VideoContainer';
import Head from '../components/head';
import GoogleTagManager from '../components/tagManager';
const Odometer = dynamic(import('react-odometerjs'), {
  ssr: false,
  loading: () => 0
});

const Vueltos = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let ignore = false;

    const getCashBackCount = async () => {
      const response = await getTotalCashBacks()
      if (!ignore) setCount(response.data.data);
    }

    getCashBackCount()
    return () => { ignore = true; }

  }, [])
  
  useEffect(()=>{
    hotjar.initialize(1063100, 6);
  })
  return (
    <div>
      <Head title="#Vuelvenlosvueltos" description="Desarrollamos una herramienta con la que ahora sí vas a poder ahorrar, cuidamos tu plata de la inflación ya que tus ahorros generan intereses a
  tu favor. Vos elegís el monto y la forma de ingresar dinero." url="www.invuelto.com" />
      <div className="container text-center">
      <GoogleTagManager gtmId="GTM-5SSJRB7" />
        <div className="vueltos__jumbotron d-flex justify-content-between flex-lg-row flex-md-column flex-column">
          <div className="vueltos__jumbotron--images">
            <img src="/static/images/vueltos/formas-01.svg" className="vueltos__image1" alt="decorado" style={{ zIndex: '-1' }} />
            <img src="/static/images/vueltos/formas-02.svg" className="vueltos__image2" alt="decorado" />
            <img src="/static/images/vueltos/pig-enamorado.png" className="vueltos__image3" alt="decorado" />
          </div>
          <div className="vueltos__jumbotron--text">
            <h2 className="mb-3" style={{ lineHeight: '140%' }}><b>La solución a los problemas de cambio y redondeo </b></h2>
            <SecondaryButton onClick={()=>window.location.assign('https://app.invuelto.com/register')}><b>Comenzar</b></SecondaryButton>
          </div>
        </div>
        <div>
          <h2 className="text-primary text-center"><b>¡<Odometer duration={2000} theme="plaza" auto value={count} format="(ddd)" animation="count" /> VUELTOS DADOS! </b></h2>
        </div>
        <img className="deco1" src="/static/images/vueltos/candy.svg" alt="decorado" />
        <VideoContainer videoId="pF1Q5JgfAu0"
          iconVueltos="/static/images/vueltos/dar-negocios.svg"
          icon1="/static/images/vueltos/digito.svg"
          icon2="/static/images/vueltos/sms.svg"
          icon3="/static/images/vueltos/revisar.svg"
          title="Quiero dar vueltos"
          subtitle="para negocios"
          text1="Vueltos de cualquier dígito ($1,00; 12,33 ó 9,76)"
          text2="Acreditación automática a tus clientes con o sin cuenta"
          text3="Ver y revisar vueltos con un click" />
        <SecondaryButton onClick={()=>window.location.assign('https://app.invuelto.com/register')}><b>Activá tu alcancía</b></SecondaryButton>
        <img className="deco2" src="/static/images/vueltos/moneda.svg" alt="decorado" />
        <img className="deco5" src="/static/images/vueltos/circle.svg" alt="decorado" />
        <img className="deco7" src="/static/images/vueltos/circle.svg" alt="decorado" />
        <img className="deco4" src="/static/images/vueltos/candy.svg" alt="decorado" />
        <VideoContainer videoId="sCJM75kQDpA"
          iconVueltos="/static/images/vueltos/dar-vueltos.svg"
          icon1="/static/images/vueltos/sms.svg"
          icon2="/static/images/vueltos/activala.svg"
          icon3="/static/images/vueltos/crecen.svg"
          title="Quiero mi vuelto"
          subtitle="para usuarios"
          text1="Tu vuelto a tu celu por sms"
          text2="¿No tenés cuenta? Activala gratis."
          text3="Revisá como crecen día a día tus vueltos" />
        <SecondaryButton onClick={()=>window.location.assign('https://app.invuelto.com/register')}><b>Empezá a ahorrar</b></SecondaryButton>
      </div>
      <img className="deco3" src="/static/images/vueltos/moneda.svg" alt="decorado" />
      <div className="footer__container" style={{ height: '550px' }}>
        <div className="container">
          <div className="vueltos__footer">
            <div className="text-center">
              <h2 className="text-color3" style={{ fontSize: '25px' }}>Enterate de nuestras novedades </h2>
              <div className='d-lg-flex flex-md-column mt-5 justify-content-around'>
                <div>
                  <a href="/"><h2 className="text-color3"><b>invuelto</b>.com</h2></a>
                </div>
                <div className="mt-4">
                  <a className="ml-3" target="__blank" rel="noopener noreferrer" href="https://facebook.com/invuelto"><img alt="redes" src='../static/images/fb.png'></img></a>
                  <a className="ml-3" target="__blank" rel="noopener noreferrer" href="https://linkedin.com/in/invuelto"><img alt="redes" src='../static/images/in.png'></img></a>
                  <a className="ml-3" target="__blank" rel="noopener noreferrer" href="https://instagram.com/invuelto"><img alt="redes" src='../static/images/insta.png'></img></a>
                  <a className="ml-3" target="__blank" rel="noopener noreferrer" href="https://twitter.com/invuelto"><img alt="redes" src='../static/images/twitter.png'></img></a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__social-container">
          </div>
        </div>
        <img alt="decorado" className="footer__circle2" src="../static/images/circle-security2.png" />
        <img className="deco6" src="/static/images/vueltos/circle-2.svg" alt="decorado" />
      </div>
    </div>
  )
}

export default Vueltos;