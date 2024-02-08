import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Footer from "./Footer";
import JobForm from "./JobForm";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { RWebShare } from "react-web-share";

const JobPage = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([])
    
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        const fetchData = async () => {
            console.log("idddddd",id)
            // const response = await fetch(`//localhost:8080/tpfSoftware/getDescription/${id}`, requestOptions)

            const response = await fetch(`//career.tpfsoftware.com/tpfSoftware/getDescription/${id}`, requestOptions)
            const json = await response.json();
            if(json===undefined){
                navigate("/404")
            } else {
                setData(json)
                setIsLoading(false)
            }
            
        }
        fetchData().catch(error => console.log('error', error));
    },[id])
    return (
        <>  
            <Navbar />
                <main>
                    { isLoading ? <div className="uk-display-block uk-section-large uk-text-center" uk-spinner="ratio: 3"></div>
                        :  
                        <section className="uk-section-large uk-flex uk-flex-middle top-wrap-height">
                            <div className="container">
                                <ul className="breadcrumb-dark uk-margin-small-bottom">
                                    <li>
                                        <a href="/">
                                            <span className="uk-icon-link breadcrumb-icon-dark" uk-icon="home"></span> 
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/careers"> Careers</a>
                                    </li>
                                    <li>
                                        <a href={`/careers/jobs/${data.id}`}>{data.hiringRole}</a>
                                        {/* <a href={`/careers/jobs/1`}>Java Developer</a> */}
                                    </li>
                                </ul>
                                <div className="row">
                                    <div className="col-6 ">
                                        <p className="roleDescTitle">
                                            {data.hiringRole}
                                        </p>
                                        <p className="roleDescSubTitle">
                                        {data.jobLocation} <br/>
                                            <strong className="uk-display-block uk-margin-small-right">{data.employmentType}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> 
                                            <p>Posted date : {data.displayPostedDate}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Last date to apply : {data.displayEndDate}</p>
                                        </p> 
                                    </div>
                                    <div className="col-6 d-flex justify-content-end">
                                    <RWebShare
            data={{
              text: "career",
              url: "https://tpfsoftware.com/careers/jobs/"+id,
              title: "TSI CAREERS",
            }}
            onClick={() => console.log("shared successfully!")}>
                                    <button className="btn btn-primary applyButton" type="button">Share</button>
           
          </RWebShare>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <h3 className="jobDesc"><strong>Job Description</strong></h3>   
                                    <div className="uk-margin-medium-top jobDescList" dangerouslySetInnerHTML={{ __html: `<pre>${data.description}</pre>` }} />
                                </div>   
                                <JobForm jobTitle="Java" jobid = {data.id}/>      
                                <a href="/careers/jobs" className="uk-margin-medium-top uk-button uk-button-primary uk-button-large uk-border-pill">View more job openings</a>             
                            </div>
                        </section>
                    }
                </main>
            <Footer /> 
        </>
    )
}

export default JobPage;