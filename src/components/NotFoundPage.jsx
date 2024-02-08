import Footer from "./Footer";
import AllJobsListing from "./AllJobsListing";
import Navbar from "./Navbar";

const NotFoundPage = () => {
    return (
        <>
            <Navbar />
                <main>
                <section
                        className="uk-position-relative uk-background-center-center uk-background-cover"
                        uk-height-viewport="offset-bottom: 50;"
                    >
                        <div
                        className="uk-position-cover"
                        style={{   background: "linear-gradient(269.03deg, #f3663a 3.63%, #f9b302 103.71%)" }}
                        ></div>
                        <div
                        className="uk-position-relative uk-container uk-container-small uk-flex uk-flex-middle"
                        uk-height-viewport="offset-top: true;"
                        >
                        <div className="uk-section uk-section-small uk-light">
                            <div className="uk-flex uk-text-center uk-flex-middle uk-flex-center">
                            <div>
                                <h1 className="bannerTxt uk-text-left uk-text-secondary">404</h1>
                                <h1
                                className="bannerTxt uk-text-left uk-text-secondary uk-text-italic"
                                >
                                Page not found!
                                </h1>
                                <div
                                className="bannerTxt2 uk-text-left uk-text-secondary uk-margin-large-bottom"
                                >
                                The page you are looking for doesn't exist or an other error
                                occurred. Scroll down to view the all the job openings.
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    <AllJobsListing />
                </main>
            <Footer />
        </>
    )
}

export default NotFoundPage;