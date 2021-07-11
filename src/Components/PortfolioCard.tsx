import React from 'react';
import "./PortfolioCardStyle.css"

interface propTypes 
{
    heading : string,
    desc : string,
    imageURI : string,
    projectLink : string,
    projectLinkIcon: string
}

const PortfoliocardComp = ({ heading, desc, imageURI, projectLink, projectLinkIcon }:propTypes) => {

    return <div className="col-12, col-sm-12, col-md-6, col-lg-6 mt-3 " onClick={() => window.open(projectLink)} >
        <div className="container_foto border ">
            <div className="ver_mas text-center">
                <img style={{ width : '25px', marginTop : '7px' }} src={projectLinkIcon} alt="hjh" />
            </div>
            <article className="text-left">
                <h2> {heading} </h2>
                <h4> {desc} </h4>
            </article>
            <img className="bg-image" src={imageURI} alt="kjk" />
        </div>
    </div>
}

export { PortfoliocardComp };