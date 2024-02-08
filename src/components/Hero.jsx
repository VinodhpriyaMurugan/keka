const Hero = () => {
    return(
        <section className="uk-section-large uk-cover-container uk-light uk-flex uk-flex-middle top-wrap-height">
            <div className="uk-position-cover" style={{backgroundImage: 'url(https://tpfsoftware.com/assets/careers/careers-landing-block.png', backgroundPosition: "center"}} />
            <div className="uk-position-cover" style={{backgroundImage: 'linear-gradient(to right, rgba(21, 21, 33, 0.3), rgba(21, 21, 33, 0.5), rgba(21, 21, 33, 0.7))'}} />
            <div className="uk-container uk-flex-auto top-container uk-position-relative uk-margin-medium-top">
                <div className="uk-text-center uk-width-1-1@s">
                    <ul className="breadcrumb uk-margin-small-bottom">
                        <li>
                            <a href="/">
                                <span className="uk-icon-link breadcrumb-icon" uk-icon="home" />
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/careers"> Careers</a>
                        </li>
                    </ul>
                    <h4 className="uk-text-center uk-text-secondary uk-text-bold uk-margin-remove">
                        <span className="heading-gradient meta-heading">UNLOCK YOUR</span>
                    </h4>
                    <h1 className="prodsBannerTxt uk-text-center uk-text-secondary uk-text-bold uk-margin-remove">
                        <span className="heading-gradient uk-heading-small">CAREER GROWTH</span>
                    </h1>
                    <p id="CareersHeroTag" className="uk-text-center uk-text-secondary uk-text-bold uk-margin-remove">
                        <span>#JoinTSI</span>
                    </p>
                    <a className="uk-display-inline-block uk-button uk-button-primary uk-button-large uk-border-pill uk-margin-small-top" style={{ color: "white" }} href="#currentOpenings">Explore Current Openings</a>
                </div>
            </div>
      </section>
    )
}

export default Hero;