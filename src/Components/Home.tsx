import React from 'react'
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { AboutComp } from "./About";
import { ContactComp } from "./Contact"
import { PortfolioComp } from "./Portfolio";
import { ResumeComp } from "./Resume";
import { WhatsupBlack } from "../Assets/icons/IconImages";

const HomeComp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedRoute, setSelectedRoute] = React.useState<number>();

  React.useEffect(
    () => {
      const pn = location.pathname;
      setSelectedRoute(pn === "/" ? 1 : pn === "/resume" ? 2 : pn === "/portfolio" ? 3 : 4);
      // eslint-disable-next-line
    }, []
  )
  const handleClick = (routeNumber: number) => {
    setSelectedRoute(routeNumber)
    switch (routeNumber) {
      case 1:
        navigate("/");
        break;
      case 2:
        navigate("/resume");
        break;
      case 3:
        navigate("/portfolio");
        break;
      case 4:
        navigate("/contact");
        break;
    }

  }

  return <div className="bg-triangles" >
    {/* Preloader */}
    <div className="preloader">
      <div className="preloader__wrap">
        <div className="circle-pulse">
          <div className="circle-pulse__1" />
          <div className="circle-pulse__2" />
        </div>
        <div className="preloader__progress"><span /></div>
      </div>
    </div>
    <main className="main">
      <div className="container gutter-top">
        <div className="row sticky-parent">
          {/* Sidebar */}
          <aside className="col-12 col-md-12 col-xl-3">
            <div className="sidebar box shadow pb-0 sticky-column">
              <svg className="avatar avatar--180" viewBox="0 0 188 188">
                <g className="avatar__box">
                  <image xlinkHref="../assets/img/shakeel-img-bg.png" height="100%" width="100%" />
                </g>
              </svg>
              <div className="text-center">
                <h3 className="title title--h3 sidebar__user-name">Shakeel Haider</h3>
                <div className="badge badge--gray">Software Developer</div>
                {/* Social */}
                <div className="social">
                  <a className="social__link" target="_blank" rel="noreferrer" href="https://www.facebook.com/shakeel.haider.2015"><i className="font-icon icon-facebook" /></a>
                  <a className="social__link" target="_blank" rel="noreferrer" href="https://twitter.com/shkhaider2015"><i className="font-icon icon-twitter" /></a>
                  <a className="social__link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/shakeel-haider-818233176/"><i className="font-icon icon-linkedin2" /></a>
                  <a className="social__link" target="_blank" rel="noreferrer" href="https://github.com/shkhaider2015"><i className="font-icon icon-github" /></a>
                </div>
              </div>
              <div className="sidebar__info box-inner box-inner--rounded">
                <ul className="contacts-block">
                  <li className="contacts-block__item" data-toggle="tooltip" data-placement="top" title="Address">
                    <i className="font-icon icon-location" />Karachi, Pakistan
                  </li>
                  <li className="contacts-block__item" data-toggle="tooltip" data-placement="top" title="E-mail">
                    <a href="mailto:shkhaider2015@gmail.com"><i className="font-icon icon-envelope" />shkhaider2015@gmail.com</a>
                  </li>
                  <li className="contacts-block__item" data-toggle="tooltip" data-placement="top" title="E-mail">
                    
                  <div className="d-flex flex-direction-row w-100 justify-content-sm-center justify-content-md-start justify-content-lg-start" >
                      <div>
                          <img style={{ width : '8%', color : 'blue' }} src={WhatsupBlack} alt="whatsapp" />
                        <a className="whatsapp-anchor ml-2" href="https://wa.me/+923460027852" target="_blank" rel="noreferrer" >+92-346-002-7852</a>
                      </div>
                  </div>
                  </li>
                </ul>
                <span className="btn btn-contact" onClick={() => handleClick(4)} ><i className="font-icon icon-phone" /> Contact</span>
              </div>
            </div>
          </aside>
          {/* Content */}
          <div className="col-12 col-md-12 col-xl-9">
            <div className="box shadow pb-0 pt-sm-6">
              {/* Menu */}
              <div className="circle-menu d-sm-none">
                <div className="hamburger">
                  <div className="line" />
                  <div className="line" />
                  <div className="line" />
                </div>
              </div>
              <div className="inner-menu inner-menu-alt">
                <ul className="nav">
                  <li className="nav__item"><span className={selectedRoute === 1 ? "gg-active" : "gg"} onClick={() => handleClick(1)}>About</span></li>
                  <li className="nav__item"><span className={selectedRoute === 2 ? "gg-active" : "gg"} onClick={() => handleClick(2)}>Resume</span></li>
                  <li className="nav__item"><span className={selectedRoute === 3 ? "gg-active" : "gg"} onClick={() => handleClick(3)}>Portfolio</span></li>
                  <li className="nav__item"><span className={selectedRoute === 4 ? "gg-active" : "gg"} onClick={() => handleClick(4)}>Contact</span></li>
                </ul>
              </div>
              <Routes>
                <Route path="/" element={<AboutComp />} />
                <Route path="/contact" element={<ContactComp />} />
                <Route path="/portfolio" element={<PortfolioComp />} />
                <Route path="/resume" element={<ResumeComp />} />
              </Routes>

              {/* Footer */}
              <footer className="footer">© 2020 All rights reserved</footer>
            </div>
          </div>
        </div>
      </div></main>
    <div className="back-to-top" />
    {/* SVG masks */}
    <svg className="svg-defs">
      <clipPath id="avatar-box">
        <path d="M1.85379 38.4859C2.9221 18.6653 18.6653 2.92275 38.4858 1.85453 56.0986.905299 77.2792 0 94 0c16.721 0 37.901.905299 55.514 1.85453 19.821 1.06822 35.564 16.81077 36.632 36.63137C187.095 56.0922 188 77.267 188 94c0 16.733-.905 37.908-1.854 55.514-1.068 19.821-16.811 35.563-36.632 36.631C131.901 187.095 110.721 188 94 188c-16.7208 0-37.9014-.905-55.5142-1.855-19.8205-1.068-35.5637-16.81-36.63201-36.631C.904831 131.908 0 110.733 0 94c0-16.733.904831-37.9078 1.85379-55.5141z" />
      </clipPath>
      <clipPath id="avatar-hexagon">
        <path d="M0 27.2891c0-4.6662 2.4889-8.976 6.52491-11.2986L31.308 1.72845c3.98-2.290382 8.8697-2.305446 12.8637-.03963l25.234 14.31558C73.4807 18.3162 76 22.6478 76 27.3426V56.684c0 4.6805-2.5041 9.0013-6.5597 11.3186L44.4317 82.2915c-3.9869 2.278-8.8765 2.278-12.8634 0L6.55974 68.0026C2.50414 65.6853 0 61.3645 0 56.684V27.2891z" />
      </clipPath>
    </svg>
  </div>
}

export { HomeComp }