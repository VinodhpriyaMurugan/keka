import Lottie from "lottie-react";
import friendlyTeams from "../assets/friendly-teams.json";
import overseas from "../assets/onsite-overseas.json";
import upskills from "../assets/upskilling-programs.json";

const Fillers = () => {
 return(
    <>
        <section className="uk-section">
          <div className="container">
            <p className="whyJoinTitle">WHY JOIN TSI ?</p>
            <p className="whyJoinSubTitle">Here’s what TSIans got to say about TSI</p>
            <div className="row uk-margin-large-top">
              <div className="col-6" id="forGeneral">
                  <Lottie animationData={friendlyTeams} loop={true} />
              </div>
              <div className="col-6">
                <p className="whyTsiTitles">Friendly teams</p>
                <p className="whyTsiSubTitles uk-text-lead">
                  TPF provides a friendly environment for its employees to work.
                  The ambiance, the work exposure, and the people around you, all
                  contribute to the friendly environment at TPF.
                </p>
              </div>
              <div className="col-6 uk-text-center" id="forMobile">
                 <Lottie animationData={friendlyTeams} loop={true} />
              </div>
            </div>
            <div className="row" style={{marginTop: '4rem'}}>
              <div className="col-6">
                <p className="whyTsiTitles">Onsite Overseas</p>
                <p className="whyTsiSubTitles uk-text-lead">
                  TSI has over 150 employees spread across offices in the USA,
                  India, and New Zealand, formed with tremendous flexibility to
                  ramp up resources through strategic alliances.
                </p>
              </div>
              <div className="col-6">
              <Lottie animationData={overseas} loop={true} />
              </div>
            </div>
            <div className="row" style={{marginTop: '4rem'}}>
              <div className="col-6" id="forGeneral">
                <Lottie animationData={upskills} loop={true} />
              </div>
              <div className="col-6">
                <p className="whyTsiTitles">Upskilling Programs</p>
                <p className="whyTsiSubTitles uk-text-lead">
                  At TSI, we encourage and support all our employees to upskill
                  themselves from time to time and keep them updated on the latest
                  trends.
                </p>
              </div>
              <div className="col-6 uk-text-center" id="forMobile">
                <Lottie animationData={upskills} loop={true} />
              </div>
            </div>
          </div>
        </section>
        <section className="uk-section">
          <div className="container">
            <p className="perkTitle1">PERKS</p>
            <p className="whyJoinSubTitle">
              Here comes the best part, Learn how we keep our teams happy
            </p>

            <div className="uk-grid uk-grid-column-small uk-child-width-1-3@s uk-text-center">
                <div className="uk-margin-medium-top">
                    <img src="https://tpfsoftware.com/assets/careers/assured-insurance-policies_oimir4.svg" className="uk-align-center perksImg" alt="" />
                    <p className="perkSubtitle">Assured Insurance Policies</p>
                </div>
                <div className="uk-margin-medium-top">
                    <img src="https://tpfsoftware.com/assets/careers/employee-gratuity-schemes.svg" className="uk-align-center perksImg" alt="" />
                    <p className="perkSubtitle">Employee Gratuity schemes</p>
                </div>
                <div className="uk-margin-medium-top">
                    <img src="https://tpfsoftware.com/assets/careers/employee-pension-scheme.svg" className="uk-align-center perksImg" alt="" />
                    <p className="perkSubtitle">Employee Pension Scheme</p>
                </div>
                <div className="uk-margin-medium-top">
                    <img src="https://tpfsoftware.com/assets/careers/performance-based-appraisals.svg" className="uk-align-center perksImg" alt=""/>
                    <p className="perkSubtitle">Performance based bonus</p>
                </div>
                <div className="uk-margin-medium-top">
                    <img src="https://tpfsoftware.com/assets/careers/flexible-work-culture.svg" className="uk-align-center perksImg"  alt="" />
                    <p className="perkSubtitle">Flexible work culture</p>
                </div>
                <div className="uk-margin-medium-top">
                    <img src="https://tpfsoftware.com/assets/careers/annual-vacation.svg" className="uk-align-center perksImg" alt="" />
                    <p className="perkSubtitle">Annual Vacation</p>
                </div>
            </div>
          </div>
        </section>
    </>
 )
}

export default Fillers;