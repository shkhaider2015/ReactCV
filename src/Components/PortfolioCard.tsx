import React from 'react';
import "./PortfolioCardStyle.css"

interface propTypes 
{
    heading : string,
    desc : string,
    imageURI : string,
    projectLink : string
}

const PortfoliocardComp = ({ heading, desc, imageURI, projectLink }:propTypes) => {

    return <div className="col-12, col-sm-12, col-md-6, col-lg-6 mt-3 " onClick={() => window.open(projectLink)} >
        <div className="container_foto ">
            {/* <div className="ver_mas text-center">
                <span className="lnr lnr-eye" >Open</span>
            </div> */}
            <article className="text-left">
                <h2> {heading} </h2>
                <h4> {desc} </h4>
            </article>
            <img src={imageURI} alt="" />
        </div>
    </div>
}

export { PortfoliocardComp };