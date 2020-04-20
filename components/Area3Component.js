import BlogPreview from "./BlogPreview";

export default ({showImages}) => 
  (<div className="area3__container container" id="academia-del-ahorro">
  <h2><b>Conocé nuestra academia del ahorro</b></h2>
  <h3 className="mt-5 text-primary d-none d-sm-block">Te enseñamos cómo sacarle el</h3>
  <h3 className="text-primary mb-5 d-none d-sm-block">máximo provecho a tu plata.</h3>
  <div className='d-block d-md-flex justify-content-around mt-4'>
    <div className="microlink__container">
    <BlogPreview url="https://blog.invuelto.com/post/Cambiamos-tus-billetes-de-5-pesos-y-los-duplicamos" showImages={showImages} />
    </div>
    <div className="microlink__container d-none d-sm-block">
      <BlogPreview url="https://blog.invuelto.com/post/3-lecciones-para-manejar-mi-dinero-que-aprendi-tarde" showImages={showImages} />
    </div>
    <div className="microlink__container d-none d-sm-block">
    <BlogPreview url="https://blog.invuelto.com/post/Cuanto-tengo-que-ahorrar-por-mes" showImages={showImages} />
    </div>

  </div>

</div>)