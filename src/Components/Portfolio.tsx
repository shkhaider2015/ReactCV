import React from 'react'
import {PortfoliocardComp} from "./PortfolioCard"
import { getdata } from "./Utils";

const PortfolioComp = () => {

  const { projectsData } = getdata();

  return <div>
    <div className="pb-2">
      <h1 className="title title--h1 title__separate">Portfolio</h1>
    </div>
    {/* Gallery */}
    <div className="pb-0">
      <div className=" row">
        {
          projectsData.map(
            (object, index) => <PortfoliocardComp key={index} heading={object.projectTitle} desc={object.projectDesc} imageURI={object.imageURI} projectLink={object.projectLink} />
          )
        }
      </div>
    </div>
  </div>
}

export { PortfolioComp };