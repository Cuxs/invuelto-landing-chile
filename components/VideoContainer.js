import { Carousel } from "react-responsive-carousel";
import YouTube from 'react-youtube';

const VideoContainer = ({ videoId, title, iconVueltos, subtitle, text1, text2, text3, icon1, icon2, icon3 }) => (
  <div className="vueltos__video-container">
    <div className="d-flex align-items-center mb-5">
      <div>
        <img src={iconVueltos} />
      </div>
      <div className="ml-4">
        <h2 className="mt-4 mb-0 text-left"><b>{title}</b></h2>
        <p className="text-left">{subtitle}</p>
      </div>
    </div>
    {videoId && <YouTube
      videoId={videoId}
      opts={{
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 0
        }
      }}
    />}
    <div className="d-none d-md-none d-lg-flex pricing__items-container">
      <div className="mt-5 d-flex justify-content-around text-center">
        <div className="col">
          <div className="icon__container">
            <img src={icon1} style={{ width: '120px', height: '120px' }} />
          </div>
          <p>{text1}</p>
        </div>
        <div className="col">
          <div className="icon__container">
            <img src={icon2} style={{ width: '120px', height: '120px' }} />
          </div>
          <p>{text2}</p>
        </div>
        <div className="col">
          <div className="icon__container">
            <img src={icon3} style={{ width: '120px', height: '120px' }} />
          </div>
          <p>{text3}</p>
        </div>
      </div>
    </div>
    <div className="d-md-block d-lg-none">
        <Carousel
          swipeable
          transitionTime={200}
          emulateTouch
          showArrows={false}
          className="mt-5 mb-0 p-0 d-flex justify-content-around text-center"
          showIndicators
          showStatus={false}
          showThumbs={false}>
          <div className="col">
            <div className="icon__container">
              <img src={icon1} style={{ width: '120px', height: '120px' }} />
            </div>
            <p>{text1}</p>
          </div>
          <div className="col">
            <div className="icon__container">
              <img src={icon2} style={{ width: '120px', height: '120px' }} />
            </div>
            <p>{text2}</p>
          </div>
          <div className="col">
            <div className="icon__container">
              <img src={icon3} style={{ width: '120px', height: '120px' }} />
            </div>
            <p>{text3}</p>
          </div>
        </Carousel>
      </div>
  </div>
)
export default VideoContainer;