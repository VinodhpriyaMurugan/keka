import { ReactComponent as InternSvg} from "../assets/Intern.svg"
import { ReactComponent as Fresher} from "../assets/Fresher.svg"
import { ReactComponent as Experienced} from "../assets/Experienced.svg"
import { ReactComponent as Restart} from "../assets/Restart.svg"
import { ReactComponent as Team} from "../assets/Team.svg"

const JobExplore = () => {
    return(
        <section className="uk-section">
            <div className="uk-container">
                <div className="uk-width-3-4@m uk-margin-auto">
                    <div className="uk-text-center">
                        <h1 className="uk-h1 uk-text-bolder uk-text-uppercase uk-margin-remove">Ready for the next big step in your life</h1>
                        <h3 className="uk-h2 uk-margin-small-top" style={{ fontWeight: "500" }}>Take the first step of becoming a TSIan</h3>
                    </div>
                    <div className="uk-margin-medium-top">
                        <div className="uk-grid-match uk-child-width-1-3@s uk-flex-center uk-text-center" uk-grid="">
                            <div>
                                <div className="uk-card uk-card-default uk-card-body">
                                    <InternSvg />
                                    <p style={{ fontWeight: "500" }} className="uk-margin-remove-bottom">I’m looking for</p>
                                    <p className="uk-text-bold uk-text-primary uk-text-lead uk-margin-remove-top">Internship opportunities</p>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-default uk-card-body">
                                    <Fresher />
                                    <p style={{ fontWeight: "500" }} className="uk-margin-remove-bottom">I’m a</p>
                                    <p className="uk-text-bold uk-text-primary uk-text-lead uk-margin-remove-top">Student/ Graduate/ Fresher</p>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-default uk-card-body">
                                    <Experienced />
                                    <p style={{ fontWeight: "500" }} className="uk-margin-remove-bottom">I’m an</p>
                                    <p className="uk-text-bold uk-text-primary uk-text-lead uk-margin-remove-top">Experienced Professional</p>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-default uk-card-body">
                                    <Restart />
                                    <p style={{ fontWeight: "500" }} className="uk-margin-remove-bottom">I’m looking to</p>
                                    <p className="uk-text-bold uk-text-primary uk-text-lead uk-margin-remove-top">Restart my career</p>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-default uk-card-body">
                                    <Team />
                                    <p style={{ fontWeight: "500" }} className="uk-margin-remove-bottom">Explore</p>
                                    <p className="uk-text-bold uk-text-primary uk-text-lead uk-margin-remove-top">Life at TSI</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JobExplore;