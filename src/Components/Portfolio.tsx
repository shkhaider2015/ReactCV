import React from 'react'

const PortfolioComp = () =>
{
    return  <div>
    <div className="pb-2">
      <h1 className="title title--h1 title__separate">Portfolio</h1>
    </div>
    {/* Gallery */}
    <div className="pb-0">
      {/* Filter */}
      <div className="select">
        <span className="placeholder">Select category</span>
        <ul className="filter">
          <li className="filter__item">Category</li>
          <li className="filter__item active" data-filter="*"><a className="filter__link active" href="#filter">All</a></li>
        </ul>
        <input type="hidden" name="changemetoo" />
      </div>
      {/* Content */}
      <div className="gallery-grid js-masonry js-filter-container">
        <div className="gutter-sizer" />
        {/* Item 1 */}
        <figure className="gallery-grid__item category-concept">
          <div className="gallery-grid__image-wrap">
            <img className="gallery-grid__image cover lazyload" src="../assets/img/portfolio1.PNG" data-zoom alt="" />
          </div>
          <figcaption className="gallery-grid__caption">
            <h4 className="title gallery-grid__title">Expense Tracker</h4>
            <a href="http://expencetracker_shakeelhaider.surge.sh/" style={{textDecoration: 'none'}}><span className="gallery-grid__category">visit site</span></a>
          </figcaption>
        </figure>
        {/* Item 2 */}
        <figure className="gallery-grid__item category-concept">
          <div className="gallery-grid__image-wrap">
            <img className="gallery-grid__image cover lazyload" src="../assets/img/portfolio2.PNG" data-zoom alt="" />
          </div>	
          <figcaption className="gallery-grid__caption">
            <h4 className="title gallery-grid__title"> COVID19 Tracker App</h4>
            <a href="http://shkhaider_covid19_tracker_app.surge.sh/" style={{textDecoration: 'none'}}><span className="gallery-grid__category">visit site</span></a>
          </figcaption>
        </figure>
        {/* Item 3 */}
        <figure className="gallery-grid__item category-design">
          <div className="gallery-grid__image-wrap">
            <img className="gallery-grid__image cover lazyload" src="../assets/img/portfolio3.PNG" data-zoom alt="" />
          </div>	
          <figcaption className="gallery-grid__caption">
            <h4 className="title gallery-grid__title"> Shoes Store App</h4>
            <a href="http://shkhaider_shoes_store.surge.sh/" style={{textDecoration: 'none'}}><span className="gallery-grid__category">visit site</span></a>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
}

export {PortfolioComp};