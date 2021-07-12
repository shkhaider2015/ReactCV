import React from 'react'
import { ProgressBar } from "react-bootstrap";
import "../Assets/icons/iconsStyle.css";
import { getWindowDimensions, getdata } from "./Utils";
import { Experience, Education } from "../Assets/icons/IconImages";

const ResumeComp = () => {

  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [animateValue, setAnimateValue] = React.useState(0);
  const {certificationsData} = getdata();
  const { width } = getWindowDimensions();


  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    width <= 400 ? setAnimateValue(900) : setAnimateValue(150);
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
          <h2 className="title title--h3"><img className="title-icon" src={Education} alt="" /> Education</h2>
          <div className="timeline">
            {/* Item */}
            <article className="timeline__item">
              <h5 className="title title--h5 timeline__title">Indus University karachi</h5>
              <p className="mb-2 ml-3" style={{ color : "#8697A8" }} >2015 — 2019</p>
              <p className="timeline__description">BS SOFTWARE ENGINEERING</p>
            </article>
            {/* Item */}
            <article className="timeline__item">
              <h5 className="title title--h5 timeline__title">Pakistan Shipowner's Collage</h5>
              <p className="mb-2 ml-3" style={{ color : "#8697A8" }} >2013 — 2015</p>
              <p className="timeline__description">INTERMEDIATE</p>
            </article>
            {/* Item */}
            <article className="timeline__item">
              <h5 className="title title--h5 timeline__title">Al Nasir Secondary School</h5>
              <p className="mb-2 ml-3" style={{ color : "#8697A8" }} >2005 — 2010</p>
              <p className="timeline__description">METRIC</p>
            </article>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <h2 className="title title--h3"><img className="title-icon" src={Experience} alt="" /> Certification</h2>
          <div className="certificate-timeline" >
            {/* Items */}
            {
              certificationsData.map(
                (object, index) => (
                  <article key={index} className="timeline__item">
              <h5 className="title title--h5 timeline__title"> {object.courseTitle} </h5>
              <p className="mb-2 ml-3" style={{ color : "#8697A8" }} > {object.CourseDuration} </p>
              <p className="course-link" onClick={() => window.open(object.courseLink)} > {object.courseProvider} </p>
            </article>
                )
              )
            } 
          </div>
        </div>
      </div>
    </div>
    <div className="box-inner box-inner--rounded">
      <div className="row">
        <div className="col-12 col-lg-6">
          <h2 className="title title--h3">Frontend Development</h2>
          <div className="box box__second">
            <ProgressBar now={scrollPosition > animateValue ? 80 : 0} label="ReactJS" />
            <ProgressBar now={scrollPosition > animateValue ? 60 : 0} label="React Native" />
            <ProgressBar now={scrollPosition > animateValue ? 65 : 0} label="Java/XML" />
            <ProgressBar now={scrollPosition > animateValue ? 90 : 0} label="Bootstrap/Material-UI" />
           <ProgressBar now={scrollPosition > animateValue ? 95 : 0} label="HTML/CSS" />
          </div>
        </div>
        <div className="col-12 col-lg-6 mt-4 mt-lg-0">
          <h2 className="title title--h3">Backend Development</h2>
          <div className="box box__second">
            <ProgressBar now={scrollPosition > animateValue ? 80 : 0} label="Flask" />
            <ProgressBar now={scrollPosition > animateValue ? 60 : 0} label="Node/Express" />
            <ProgressBar now={scrollPosition > animateValue ? 90 : 0} label="Firebase" />
            <ProgressBar now={scrollPosition > animateValue ? 80 : 0} label="PostgresSQL" />
            <ProgressBar now={scrollPosition > animateValue ? 75 : 0} label="Tensorflow 2.0" />
          </div>
        </div>
      </div>
    </div>
  </div>
}

export { ResumeComp };