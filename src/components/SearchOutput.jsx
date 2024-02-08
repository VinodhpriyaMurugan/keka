import { Link } from "react-router-dom";
import JobCard from "./JobCard";
import Fuse from "fuse.js";

const SearchOutput = ({ data, generalInput, locationInput }) => {

    console.log("SearchOutput==========>",data)
    let isEmpty = true;

    const jobs = data;

    const options = {
        includeScore: true,
        useExtendedSearch: true,
        keys: ['hiringRole','employmentType','customer','jobLocation']
    }
    const fuse = new Fuse(jobs, options)    

    let filteredData;

    if(generalInput.length && locationInput.length){
        filteredData= fuse.search({
            $and: [
                { 'hiringRole': `${generalInput}` }, 
                { 'jobLocation': `${locationInput}`}]
        })
      
    } else {
        filteredData = fuse.search(`'${generalInput} | '${locationInput}`)
        filteredData.forEach((item,index)=> filteredData[index] = item['item'])
        console.log("filteredData=>",filteredData)

    }



    
    if(filteredData.length){
        isEmpty = false
    } 
    let output;
    if(isEmpty){
        
        output = ( <div className="uk-placeholder uk-text-bold uk-text-center">Type your skills or job titles to find the closest job match</div> )
    } else {
        output = (
            <>
                <h3>Job Openings Matched: {filteredData.length}</h3>
                { filteredData.length ? 
                    filteredData.map((job) => (
                        <div key={job.id}>
                            <Link to={`/jobs/${job.id}`} >
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

export default SearchOutput;
