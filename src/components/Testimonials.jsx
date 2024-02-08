const Testimonials = () => {
    return(
        <section className="uk-section">
                                <div className="uk-text-center">
                        <h1 className="uk-h1 uk-text-bolder uk-text-uppercase uk-margin-remove">Hear it from our Teams</h1>
                    </div>
        <div className="uk-container uk-padding-remove" data-uk-slider="autoplay: true; easing: cubic-bezier(.16,.75,.47,1)">
          <ul className="uk-slider-items uk-child-width-1-1">
            <li>
              <div className="uk-grid uk-child-width-1-2@l uk-flex-middle careerSliderCard uk-margin-remove-left" data-uk-slider-parallax="opacity: 0.2,1,0.2" data-uk-grid>
                <div>
                  <img className="careerSliderImage" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/assets/careers/cinthiya-m.png" alt="" data-uk-img />
                </div>
                <div data-uk-scrollspy-class="uk-animation-slide-right-medium uk-padding-remove-left">
                  <h2 className="uk-margin-small-top careerSliderHeading">
                    Cinthiya Maria Princy Charles
                  </h2>
                  <h3 className="uk-margin-small-top careerSliderSubHeading">
                    Product Specialist
                  </h3>
                  <p className="subtitle-text careerSliderDesc">
                    TSI is being a culture which has values that every employee
                    knows by heart. A positive work culture is one that
                    prioritizes the well-being of employees, TSI offers support
                    at all levels within the organization, and has policies in
                    place that encourage respect, trust, empathy, and support.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="uk-grid uk-child-width-1-2@l uk-flex-middle careerSliderCard uk-margin-remove-left" data-uk-grid>
                <div>
                  <img className="careerSliderImage" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/assets/careers/shankar-g.png" alt="" data-uk-img />
                </div>
                <div data-uk-scrollspy-class="uk-animation-slide-right-medium uk-padding-remove-left">
                  <h2 className="uk-margin-small-top careerSliderHeading">
                    Shankar Govindaraj
                  </h2>
                  <h3 className="uk-margin-small-top careerSliderSubHeading">
                    Associate Software Developer
                  </h3>
                  <p className="subtitle-text careerSliderDesc">
                    A place where you can nourish your knowledge and career, as
                    well as maintain good work-life balance.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="uk-grid uk-child-width-1-2@l uk-flex-middle careerSliderCard uk-margin-remove-left" data-uk-grid>
                <div>
                  <img className="careerSliderImage" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/assets/careers/divya-k.png" alt="" data-uk-img />
                </div>
                <div data-uk-scrollspy-class="uk-animation-slide-right-medium uk-padding-remove-left">
                  <h2 className="uk-margin-small-top careerSliderHeading">
                    Divya Kesavanidhi
                  </h2>
                  <h3 className="uk-margin-small-top careerSliderSubHeading">
                    Technical Lead - Services
                  </h3>
                  <p className="subtitle-text careerSliderDesc">
                    When I joined TSI as a fresher , I was looking for a
                    position where I could engage in work that can develop along
                    the way. For the past 12 and half years I have been provided
                    opportunity to sharpen and diversify my skill set. At every
                    step of the way I had full support of my managers and TSI
                    leadership team . TSI has been my extended family and they
                    are playing a major role in my development as a person.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="uk-grid uk-child-width-1-2@l uk-flex-middle careerSliderCard uk-margin-remove-left" data-uk-grid>
                <div>
                  <img className="careerSliderImage" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/assets/careers/sai-teja.png" alt="" data-uk-img />
                </div>
                <div data-uk-scrollspy-class="uk-animation-slide-right-medium uk-padding-remove-left">
                  <h2 className="uk-margin-small-top careerSliderHeading">
                    Sai Teja Malaga
                  </h2>
                  <h3 className="uk-margin-small-top careerSliderSubHeading">
                    Software Engineer
                  </h3>
                  <p className="subtitle-text careerSliderDesc">
                    I define TSI as Togetherness, Supportive and Innovation. My
                    experience at TSI has taught me the difference between being
                    in a good company and working in the best company.
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <div><ul className="uk-slider-nav uk-dotnav uk-margin-top" style={{ placeContent: 'center' }}><li /></ul></div>
        </div>
      </section>
    )
}

export default Testimonials;