import React from 'react'
import { ProgressBar } from "react-bootstrap";

const getWindowDimensions = () => 
{
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}


const ResumeComp = () => {
  
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [animateValue, setAnimateValue] = React.useState(0);
  const {width} = getWindowDimensions();


  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    width <= 400 ? setAnimateValue(1100) : setAnimateValue(280);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line
  }, []);


  return <div>
    <div className="pb-3">
      <h1 className="title title--h1 title__separate">Resume</h1>
      
    </div>
    {/* Experience */}
    <div className="pb-0">
      <div className="row">
        <div className="col-12 col-lg-6">
          <h2 className="title title--h3"><img className="title-icon" src="http://netgon.net/artstyles/v-card/assets/icons/icon-education.svg" alt="" /> Education</h2>
          <div className="timeline">
            {/* Item */}
            <article className="timeline__item">
              <h5 className="title title--h5 timeline__title">Indus University karachi</h5>
              <span className="timeline__period">2015 — 2019</span>
              <p className="timeline__description">BS SOFTWARE ENGINEERING</p>
            </article>
            {/* Item */}
            <article className="timeline__item">
              <h5 className="title title--h5 timeline__title">Pakistan Shipowner's Collage</h5>
              <span className="timeline__period">2013 — 2015</span>
              <p className="timeline__description">INTERMEDIATE</p>
            </article>
            {/* Item */}
            <article className="timeline__item">
              <h5 className="title title--h5 timeline__title">Al Nasir Secondary School</h5>
              <span className="timeline__period">2005 — 2010</span>
              <p className="timeline__description">METRIC</p>
            </article>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <h2 className="title title--h3"><img className="title-icon" src="http://netgon.net/artstyles/v-card/assets/icons/icon-experience.svg" alt="" /> Experience</h2>
          <div className="timeline">
            {/* Item */}
            <article className="timeline__item">
              <h5 className="title title--h5 timeline__title">Android</h5>
              <a className="social__link" href="https://github.com/shkhaider2015/MyContacts">
                <i className="font-icon icon-github" /></a>
              <span className="timeline__period">Contacts App </span><br />
              <a className="social__link" href="https://github.com/shkhaider2015/MyNotesApp">
                <i className="font-icon icon-github" /></a>
              <span className="timeline__period">Notes App </span><br />
              <a className="social__link" href="https://github.com/shkhaider2015/StopWatch">
                <i className="font-icon icon-github" /></a>
              <span className="timeline__period">Stop Watch App </span><br />
              <a className="social__link" href="https://github.com/shkhaider2015/WorkArena">
                <i className="font-icon icon-github" /></a>
              <span className="timeline__period">Work Arena FYP App </span><br />
              <a className="social__link" href="https://github.com/shkhaider2015/CanteenMS">
                <i className="font-icon icon-github" /></a>
              <span className="timeline__period"> CMS Client</span><br />
            </article>
            {/* Item */}
            <article className="timeline__item">
              <h5 className="title title--h5 timeline__title">Python</h5>
              <a className="social__link" href="https://github.com/shkhaider2015/Flask_App">
                <i className="font-icon icon-github" /></a>
              <span className="timeline__period">Flask Social Web App </span><br />
              <a className="social__link" href="https://github.com/shkhaider2015/PIAIC-QUARTER-2/blob/master/Deep%20Learning/Tensorflow/Image%20Detection%20-%20Horse%20vs%20Humans.ipynb">
                <i className="font-icon icon-github" /></a>
              <span className="timeline__period">Horse vs Human Image Recognition</span><br />
              <a className="social__link" href="https://github.com/shkhaider2015/PIAIC-QUARTER-2/blob/master/Deep%20Learning/Tensorflow/Fashion%20Detection%20-%20Computer%20Vision.ipynb">
                <i className="font-icon icon-github" /></a>
              <span className="timeline__period">Fashion Detection IR </span><br />
              <a className="social__link" href="https://github.com/shkhaider2015/IUSM">
                <i className="font-icon icon-github" /></a>
              <span className="timeline__period"> CMS Admin panel</span><br />
            </article>
            {/* Item */}
            <article className="timeline__item">
              <h5 className="title title--h5 timeline__title">React</h5>
              <a className="social__link" href="https://github.com/shkhaider2015/COVID19_tracker_app">
                <i className="font-icon icon-github" /></a>
              <span className="timeline__period"> COVID19 Tracker App</span><br />
              <a className="social__link" href="https://github.com/shkhaider2015/Bootcamp_6th_class_Expense_Tracker2">
                <i className="font-icon icon-github" /></a>
              <span className="timeline__period"> Expense Tracker App </span><br />
              <a className="social__link" href="https://github.com/shkhaider2015/Project3_ShoesStore_React">
                <i className="font-icon icon-github" /></a>
              <span className="timeline__period"> Shoes Store App </span><br />
            </article>
          </div>
        </div>
      </div>
    </div>
    {/* Skills */}
    <div className="box-inner box-inner--rounded">
      <div className="row">
        <div className="col-12 col-lg-6">
          <h2 className="title title--h3">App Development Skills</h2>
          <div className="box box__second">
            {/* Progress */}
            <ProgressBar now={ scrollPosition > animateValue ? 70 : 0 } label="Native Android" />
            {/* <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                <div className="progress-text"><span>Android App</span><span>80%</span></div>
              </div>
              <div className="progress-text"><span>Android App</span></div>
            </div> */}
            {/* Progress */}
            <ProgressBar now={ scrollPosition > animateValue ? 70 : 0 } label="React Native" />
            {/* <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                <div className="progress-text"><span>Native App</span><span>75%</span></div>
              </div>
              <div className="progress-text"><span>Native App</span></div>
            </div> */}
            {/* Progress */}
            <ProgressBar now={ scrollPosition > animateValue ? 70 : 0 } label="PWA" />
            {/* <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                <div className="progress-text"><span>Java</span><span>90%</span></div>
              </div>
              <div className="progress-text"><span>Java</span></div>
            </div> */}
            {/* Progress */}
            <ProgressBar now={ scrollPosition > animateValue ? 70 : 0 } label="Java / XML / Javascript" />
            {/* <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                <div className="progress-text"><span>IOS App</span><span>50%</span></div>
              </div>
              <div className="progress-text"><span>IOS App</span></div>
            </div> */}
          </div>
        </div>
        <div className="col-12 col-lg-6 mt-4 mt-lg-0">
          <h2 className="title title--h3">Web Development Skills</h2>
          <div className="box box__second">
            {/* Progress */}
            <ProgressBar now={ scrollPosition > animateValue ? 70 : 0 } label="React JS" />
            {/* <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                <div className="progress-text"><span>Javascript</span><span>80%</span></div>
              </div>
              <div className="progress-text"><span>Javascript</span></div>
            </div> */}
            {/* Progress */}
            <ProgressBar now={ scrollPosition > animateValue ? 70 : 0 } label="Flask" />
            {/* <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>
                <div className="progress-text"><span>React</span><span>70%</span></div>
              </div>
              <div className="progress-text"><span>React</span></div>
            </div> */}
            {/* Progress */}
            <ProgressBar now={ scrollPosition > animateValue ? 70 : 0 } label="NodeJS/ExpressJS" />
            {/* <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                <div className="progress-text"><span>Firebase</span><span>100%</span></div>
              </div>
              <div className="progress-text"><span>Firebase</span></div>
            </div> */}
            {/* Progress */}
            <ProgressBar now={ scrollPosition > animateValue ? 70 : 0 } label="Firebase" />
            {/* <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                <div className="progress-text"><span>Flask</span><span>90%</span></div>
              </div>
              <div className="progress-text"><span>Flask</span></div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
}

export { ResumeComp };