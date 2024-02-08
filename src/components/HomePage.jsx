import Fillers from "./Fillers";
import Footer from "./Footer";
import Hero from "./Hero";
import JobExplore from "./JobExplore";
import JobListing from "./JobListing";
import JobSearchSection from "./JobSearchSection";
import Navbar from "./Navbar";
import Testimonials from "./Testimonials";

const HomePage = () => {
    return(
        <>
            <Navbar />
                <main>
                    <Hero />
                    {/* <JobExplore /> */}
                    <Fillers />
                    <JobSearchSection />
                    <JobListing />
                    <Testimonials />
                </main>
            <Footer />
        </>
    )
}

export default HomePage;