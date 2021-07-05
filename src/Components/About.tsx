import React from 'react'

const AboutComp = () => {
    return <div>
        <div className="pb-0 pb-sm-2">
            <h1 className="title title--h1 title__separate">About Me</h1>
            <p>I'm creative Developer and UI/UX Designer from Karachi, Pakistan, working in Web Development and App Development. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
            <p>My job is to build your Website and App so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way.</p>
        </div>
        {/* What */}
        <div className="box-inner pb-0">
            <h2 className="title title--h3">What I'm Doing</h2>
            <div className="row">
                {/* Case Item */}
                <div className="col-12 col-lg-6">
                    <div className="case-item box box__second">
                        <img className="case-item__icon" src="http://netgon.net/artstyles/v-card/assets/icons/icon-design.svg" alt="" />
                        <div>
                            <h3 className="title title--h5">Web Design</h3>
                            <p className="case-item__caption">The most modern and high-quality design made at a professional level. &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </p>
                        </div>
                    </div>
                </div>
                {/* Case Item */}
                <div className="col-12 col-lg-6">
                    <div className="case-item box box__second">
                        <img className="case-item__icon" src="http://netgon.net/artstyles/v-card/assets/icons/icon-dev.svg" alt="" />
                        <div>
                            <h3 className="title title--h5">Web Development</h3>
                            <p className="case-item__caption">High-quality and professional development of sites at the professional level.</p>
                        </div>
                    </div>
                </div>
                {/* Case Item */}
                <div className="col-12 col-lg-6">
                    <div className="case-item box box__second">
                        <img className="case-item__icon" src="http://netgon.net/artstyles/v-card/assets/icons/icon-app.svg" alt="" />
                        <div>
                            <h3 className="title title--h5">Mobile App Development</h3>
                            <p className="case-item__caption">Professional development of applications for iOS, Android and also native app.
                            &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                            </p>
                        </div>
                    </div>
                </div>

                {/* Case Item */}
                <div className="col-12 col-lg-6">
                    <div className="case-item box box__second">
                        <img className="case-item__icon" src="http://netgon.net/artstyles/v-card/assets/icons/icon-app.svg" alt="" />
                        <div>
                            <h3 className="title title--h5">Mobile App Development</h3>
                            <p className="case-item__caption">Professional development of applications for iOS, Android and also native app.
                            &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>




}

export { AboutComp };

