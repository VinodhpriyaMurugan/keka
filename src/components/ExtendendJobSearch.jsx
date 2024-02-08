import { Link } from "react-router-dom";
import JobCard from "./JobCard";
import Fuse from "fuse.js";
import { useEffect, useState } from "react";


const ExtendendJobSearch = ({ data, generalInput, locationInput, jobType }) => {
    let isEmpty = true;
    const [jobStatement,setJobStatement] = useState('')
// console.log("extended search data ==========>",data);
    const jobs = data;
    
    useEffect(() => {

        setHeaderStatement();
       
       
    },[data])

    const setHeaderStatement =()=>{
        if(data.length>0){
            setJobStatement('Type your skills or job titles to find the closest job match')
        }
        else{
            setJobStatement('No Jobs found, please check all job openings or search with a different keyword')
        }
    }
    
    const options = {
        includeScore: true,
        useExtendedSearch: true,
        keys: ['hiringRole','employmentType','customer','jobLocation']
    }
    const fuse = new Fuse(jobs, options)    

    let filteredData = fuse.search(`${jobType}`);

    if(generalInput.length && locationInput.length && jobType.length){
        filteredData= fuse.search({
            $and: [
                { 'hiringRole': `${generalInput}` }, 
                { 'jobLocation': `${locationInput}`}, 
                { 'employmentType': `${jobType}` }]
        })
    } else if (generalInput.length && locationInput.length) {   
        filteredData= fuse.search({
            $and: [{ 'hiringRole': `${generalInput}` }, { 'jobLocation': `${locationInput}` }]
        })
    } else if (jobType.length && locationInput.length) {   
        filteredData= fuse.search({
            $and: [{ 'jobLocation': `${locationInput}` }, { 'employmentType': `${jobType}` }]
        })
    } else {
        filteredData = fuse.search(`'${generalInput} | '${locationInput} | '${jobType} `);
    }
    
    if(filteredData.length){
        isEmpty = false
    } 
    let output;
    if(isEmpty){
        output = ( 
            <>
                <div className="uk-placeholder uk-text-bold uk-text-center">{jobStatement}</div>
                { 
                    data.map((job, index) => (
                        <div key={index}>
                           
                            <Link  key={index} to={`/jobs/${job.id}`} >
                                <JobCard
                                    key={job.id}
                                    JobID={job.id}
                                    JobTitle={job.hiringRole}
                                    JobType={job.employmentType}
                                    JobLocation={job.jobLocation}
                                    JobDescription={job.hiringRole}
                                    JobExperience={job.minYearsOfExperience}
                                    JobDomain={job.domain}
                                    JobSummary={job.jobSummary}
                                />
                            </Link>
                        </div>
                    )) 
                } 
            </> 
        )
    } else {
        output = (
            <>
                <h3>Job Openings Matched: {filteredData.length}</h3>
                { filteredData.length ? 
                    filteredData.map((job) => (
                        <div key={job.id}>


                            <Link key={job.item.id} to={`/jobs/${job.id}`} >
                                <JobCard
                                  key={job.item.id}
                                  JobID={job.item.id}
                                  JobTitle={job.item.hiringRole}
                                  JobType={job.item.employmentType}
                                  JobLocation={job.item.jobLocation}
                                  JobDescription={job.item.hiringRole}
                                  JobExperience={job.item.minYearsOfExperience}
                                  JobDomain={job.item.domain}
                                  JobSummary={job.item.jobSummary}
                                />
                            </Link>
                        </div>
                    )) :
                    <div className="uk-placeholder uk-text-bold uk-text-center">No Jobs found, please check all job openings or search with a different keyword </div>
                } 
            </> 
        )
    }

    return (
        <>
            {output}
        </>
    )
}

export default ExtendendJobSearch;
