import { useEffect, useState } from "react";
import SearchOutput from "./SearchOutput";

const LIST_URL = '//career.tpfsoftware.com/tpfSoftware/getJobContent';
// const LIST_URL = '//localhost:8080/tpfSoftware/getJobContent';

const JobSearchSection = () => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] =useState(true);
    
    const [generalInputText, setGeneralInputText]  = useState("");
    const [locationInputText, setLocationInputText] = useState("");

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          fetch(LIST_URL, requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log("result=======>",result)
            setData(result);
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

    return(
        <section className="uk-section uk-section-muted" id="currentOpenings">
            <div className="uk-container">
                <div className="uk-width-3-4@m uk-margin-auto">
                    <div className="uk-text-center">
                        <h1 className="uk-h1 uk-text-bolder uk-text-uppercase uk-margin-remove"></h1>
                        <h3 className="uk-h3 uk-margin-small-top">Take the first step of becoming a TSIan</h3>
                    </div>
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
                                    <div className="uk-width-1-1 uk-width-auto@s">
                                        <a href="/careers/jobs" className="uk-button uk-button-primary uk-button-large uk-border-pill">View all job openings</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {
                             isLoading ? 
                             <div className="uk-display-block uk-text-center" uk-spinner="ratio: 3"></div>
                            : <SearchOutput data={data} generalInput={generalInputText} locationInput={locationInputText} />
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JobSearchSection;