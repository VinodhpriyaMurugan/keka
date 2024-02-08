import Footer from "./Footer";
import AllJobsListing from "./AllJobsListing";
import Navbar from "./Navbar";

const AllJobsPage = () => {
    return (
        <>
            <Navbar />
                <main>
                    <AllJobsListing />
                </main>
            <Footer />
        </>
    )
}

export default AllJobsPage;