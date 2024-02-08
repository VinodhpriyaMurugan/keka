const JobCard = (props) => {


    console.log("Propsssss value after search=======>",props.JobType)
    return (
        <>
            <div className="uk-link-reset uk-card uk-card-default uk-card-body uk-width-1-1@m uk-margin-medium-top uk-box-shadow-medium uk-text-decoration-none">
                <h3 className="uk-card-title uk-text-bold uk-margin-remove-bottom">
                    {props.JobTitle}
                </h3>
                <p style={{ fontWeight: "600" }} className="uk-margin-remove-top">{props.JobType}</p>
                <p dangerouslySetInnerHTML={{ __html: props.JobSummary }}></p>
                <div className="row">
                    <p>
                        <span style={{marginRight: '2rem', fontWeight: "500"}}><span style={{marginRight: '2.5px'}} uk-icon="icon: location" /> {props.JobLocation}</span>
                        <span style={{marginRight: '2rem', fontWeight: "500"}}><span style={{marginRight: '2.5px'}} uk-icon="icon: info" /> {props.JobExperience}+years</span>
                        <span style={{marginRight: '2rem', fontWeight: "500"}}><span style={{marginRight: '2.5px'}} uk-icon="icon: git-branch" /> {props.JobDomain}</span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default JobCard;