import { useEffect, useState } from 'react';
import "./PortfolioCardStyle.css"
import { PlaceHolderGif } from "../Assets/images/Images";

interface propTypes 
{
    heading : string,
    desc : string,
    imageURI : string,
    projectLink : string,
    projectLinkIcon: string
}

const PortfoliocardComp = ({ heading, desc, imageURI, projectLink, projectLinkIcon }:propTypes) => {

    const [isWait, setIsWait] = useState<boolean>(true)
    useEffect(
        () => {
            if(isWait)
            {
                setTimeout(() => {
                    setIsWait(!isWait)
                }, 2000);
            }
            // eslint-disable-next-line
        }, []
    )

    return <div className="col-12, col-sm-12, col-md-6, col-lg-6 mt-3 " onClick={() => window.open(projectLink)} >
        <div className="container_foto ">
            <div className="ver_mas text-center">
                <img style={{ width : '25px', marginTop : '7px' }} src={projectLinkIcon}  alt="hjh" />
            </div>
            <article className="text-left">
                <h2> {heading} </h2>
                <h4> {desc} </h4>
            </article>
            {
                isWait
                ? <img className="bg-image" src={PlaceHolderGif} alt="place-holder" />
                : <img className="bg-image" src={imageURI} alt="kjk" placeholder={PlaceHolderGif} />
            }
            
        </div>
    </div>
}

export { PortfoliocardComp };