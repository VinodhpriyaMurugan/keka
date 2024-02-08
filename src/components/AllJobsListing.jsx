import { useEffect, useState } from "react";
import ExtendendJobSearch from "./ExtendendJobSearch";

const LIST_URL = '//career.tpfsoftware.com/tpfSoftware/getJobContent';
//  const LIST_URL = '//localhost:8080/tpfSoftware/getJobContent';

const AllJobsListing = () => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] =useState(true);
    
    const [generalInputText, setGeneralInputText]  = useState("");
    const [locationInputText, setLocationInputText] = useState("");
    const [jobTypeInputText, setJobTypeInputText] = useState("");

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          fetch(LIST_URL, requestOptions)
          .then(response => response.json())
          .then(result => { setData(result);
            setIsLoading(false)} )
          .catch(error => console.log('error', error));
    },[])

    let inputHandler = (e) => {
        //convert input text to lower case
        let lowerCase = e.target.value.toLowerCase();
        setGeneralInputText(lowerCase);
    };

    let locationInputHandler = (e) => {
        //convert input text to lower case
        let lowerCase = e.target.value.toLowerCase();
        setLocationInputText(lowerCase);
    };

    let jobTypeInputHandler = (e) => {
        //convert input text to lower case
        let lowerCase = e.target.value.toLowerCase();
        setJobTypeInputText(lowerCase);
    };

    return(
        <>
            <section className="uk-section">
                <div className="container">
                    <div>
                        <div className="uk-text-center">
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
                                    <a href='/careers/jobs'>All Job Openings</a>
                                </li>
                            </ul>
                            <h1 className="uk-h1 uk-text-bolder uk-text-uppercase uk-margin-remove">Explore jobs with TSI</h1>
                            <h3 className="uk-h3 uk-margin-small-top">Take the first step of becoming a TSIan</h3>
                        </div>
                        <p className="jobsFoundTitle">All Job Openings</p>
                        <div className="uk-margin-medium-top">
                            <div>
                                <form method="get">
                                    <div className="uk-grid-small" uk-grid=''>
                                        <div className="uk-width-expand@s uk-first-column">
                                            <input 
                                                type="text" 
                                                className="uk-input uk-form-large uk-width-1-1 uk-border-pill" 
                                                placeholder="Type your skills, job titles or keywords"
                                                onChange={inputHandler}
                                            />
                                        </div>
                                        <div>
                                            <input 
                                                type="text" 
                                                className="uk-input uk-form-large uk-width-1-1 uk-border-pill" 
                                                placeholder="Location" 
                                                onChange={locationInputHandler}
                                            />
                                        </div>
                                        <div>
                                            <select className="uk-select uk-form-large uk-border-pill" aria-label="Job Type" onChange={jobTypeInputHandler}>
                                                <option value={'_none'} hidden>Job Type</option>
                                                <option value={'Full Time/ Permanent'}>Full Time</option>
                                                <option value={'Part Time'}>Part Time</option>
                                                <option value={'Internship'}>Internship</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {
                                isLoading ? 
                                <div className="uk-display-block uk-text-center" uk-spinner="ratio: 3"></div>
                                : <ExtendendJobSearch data={data} generalInput={generalInputText} locationInput={locationInputText} jobType={jobTypeInputText} />
                            }
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default AllJobsListing;