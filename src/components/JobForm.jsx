import { useState } from "react";

const JobForm = ({ jobTitle,jobid }) => {

    const [ resume, setResume ] = useState()
    const [ isFormLoading, setIsFormLoading ] = useState(false)
    const [ isFormSubmitted, setIsFormSubmitted ] = useState(false)
    const [showRef,setShowRef] = useState(true)
    const [requiredField,setRequiredField] = useState(false)
    const[refVal,setRefVal] = useState('')
    const[res,setRes] = useState([]);
    const onFileUpload = (event) => {
        
        const reader = new FileReader();  
        reader.readAsDataURL(event.target.files[0]);

        reader.onload = function() {
            setResume(reader)
        };        

        
    }
const setRefferalValues = (event) =>{

if(event.target.value === "Referral"){
    setShowRef(false)
    setRequiredField(true)
}
else{
    setRequiredField(false)
    setShowRef(true)
    setRefVal(event.target.value)
}
}

const setReferralId = (event)=>{
let val = "Referral" + "-"+ event.target.value
setRefVal(val);
}

    const handleFormSubmit = async (event) => {
        event.preventDefault()
        setIsFormLoading(true);

        // const FileData = event.target.resume.files[0];
        
        // const Name = event.target.first_name.value.concat("_",event.target.last_name.value);

        // const FileUploadAPIHeaders = new Headers();
        // FileUploadAPIHeaders.append("Content-Type", "application/octet-stream");
        // FileUploadAPIHeaders.append("Content-Disposition", `file; filename="${Name}_resume.pdf"`);
        // FileUploadAPIHeaders.append("Access-Control-Request-Method", "POST");

    

        // const FileUploadReq =  await fetch('//drupal.tpfsoftware.com/webform_rest/job_application_form/upload/resume', requestOptions).then(response => response.json()).catch(error => console.log(error) );
      
        // const fileID = String(FileUploadReq.fid[0].value);

    //     let details = {
    //      jobId: jobid,
    //      name: appName,
    //      emailId: emailId,
    //      linkedinId: sampleObject.LinkedinId,
    //      contactNo: value,
    //      coverLetter: coverLetter,
    //      aboutVacany: radioValue,
    //      source:aboutSrc,
    //    };
    
    // const FormSubmission = await fetch('//localhost:8080/tpfSoftware/saveApplicantDetails', { 
        const FormSubmission = await fetch('//career.tpfsoftware.com/tpfSoftware/saveApplicantDetails', {           
            method: "POST",
            body: JSON.stringify({
                // webform_id: "job_application_form",
                jobId: jobid,
                     name: event.target.first_name.value,
                     emailId: event.target.email.value,
                     linkedinId: event.target.linkedin_id.value,
                     contactNo: event.target.phone_number.value,
                     coverLetter: event.target.description.value,
                     aboutVacany: "",
                     source:refVal,
                // first_name: event.target.first_name.value,
                
                // email: event.target.email.value,
                // phone_number: event.target.phone_number.value,
                // years_of_experience: event.target.years_of_experience.value,
                // current_location: event.target.current_location.value,
                // resume: fileID,
                // description: event.target.description.value,
                // applied_for: event.target.applied_for.value,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => { 
            return response.json().then((data) => {
                let FileData = new FormData();
        FileData.append("applicantId", data.applicantId);
        FileData.append("file", event.target.resume.files[0]);
        let requestOptions = {
            method: 'POST',
            // headers: FileUploadAPIHeaders,
            body: FileData,
            // redirect: 'follow'
        }
    // const FileUploadReq =  fetch('//localhost:8080/tpfSoftware/uploadResume',
    const FileUploadReq =  fetch('//career.tpfsoftware.com/tpfSoftware/uploadResume',
     requestOptions).then(response => response.json()).catch(error => console.log(error) );
                
                console.log(data.applicantId);
                return data;
            }).catch((err) => {
                console.log(err);
            }) 
        });
        // .then(response => 
            
        //   setRes(response.json())
        //     )
        //     .then(function(data) {
        //         const items = data;
        //         console.log("jdagadgadg",items)
        //     }).
        //     catch(error =>  console.log(error) );



        setIsFormLoading(false);
        setIsFormSubmitted(true);

    }
    // console.log("Response=================>",res)
    return (
        <div>
            <p className="roleDescTitle">
                Your first step to career growth starts here...
            </p>   

            { 
                isFormLoading ?  <div className="uk-display-block uk-section-large uk-text-center" uk-spinner="ratio: 3"></div>
                :   
                    <>
                        {
                            isFormSubmitted ? <div className="uk-card uk-card-body uk-margin-large-top" style={{ backgroundColor: "#32d296", color: "white" }}><h4 className="uk-card-title">Your application for this job role is successfully submitted. Our team will analyze your information and come back to you soon.</h4><a href="/careers/jobs" className="uk-button uk-button-default uk-button-large">Click here to view other job openings</a></div>
                                :
                                    <form className="uk-grid-small uk-margin-medium-top" uk-grid=''  encType="multipart/form-data" onSubmit={handleFormSubmit}>  
                                            <input type="hidden" id="applied_for" name="applied_for" value={jobTitle} />   
                                            <div className="uk-width-1-2@s">
                                                <input className="uk-input" type="text" placeholder="Your First Name" id="first_name" name="first_name" aria-label="Your First Name" required/>
                                            </div>
                                            {/* <div className="uk-width-1-2@s">
                                                <input className="uk-input" type="text" placeholder="Your Last Name" id="last_name" name="last_name" aria-label="Your Last Name" required/>
                                            </div> */}
                                            <div className="uk-width-1-2@s">
                                                <input className="uk-input" type="email" placeholder="Your Email Address" id="email" name="email" aria-label="Your Email Address" required/>
                                            </div>
                                            <div className="uk-width-1-2@s">
                                                <input className="uk-input" type="tel" placeholder="Your Phone Number" id="phone_number" name="phone_number" aria-label="Your Phone Number" required/>
                                            </div>
                                            <div className="uk-width-1-2@s">
                                                <input className="uk-input" type="number" placeholder="Years of Experience" id="years_of_experience" name="years_of_experience" aria-label="Years of Experience" required/>
                                            </div>
                                            <div className="uk-width-1-2@s">
                                                <input className="uk-input" type="text" placeholder="Your Linkedin Id" id="linkedin_id" name="linkedin_id" aria-label="Your Linkedin Id" required/>
                                            </div>
                                            {/* <div className="uk-width-1-2@s">
                                                <input className="uk-input" type="text" placeholder="Your Current Location" id="current_location" name="current_location" aria-label="Your Current Location" required/>
                                            </div> */}
                                            <div className="uk-width-1-3@s">  
                                            <select class="uk-select" onChange={setRefferalValues} aria-label="How do you come to know?" required >
                                                <option value={'_none'} hidden>How do you come to know?</option>
                                                <option>Naukri</option>
                                                <option>Linkedin</option>
                                                <option>Vendor</option>
                                                <option>Referral</option>
                                             
                                            </select>                                                                                     
                                            </div>
                                            <div className="uk-width-1-6@s">                                            
                                            <input className="uk-input" onBlur={setReferralId} type="text" hidden={showRef} placeholder="Referral Id" id="referral_id" name="referral_id" aria-label="Referral Id" required={requiredField}/>
                                          
                                            </div>

                                            <div className="uk-width-1-2@s">            
                                                <div uk-form-custom="target: true">
                                                    <input type="file" onChange={onFileUpload}  name="resume" id="resume" aria-label="Resume" required />
                                                    <input className="uk-input uk-form-width-large"  type="text" placeholder="Click here to upload your resume" aria-label="Click here to upload your resume" disabled />
                                                    <label className="uk-text-meta">Allowed File Extensions: pdf <br/> Maximum file size: 5 MB</label>
                                                </div>
                                            </div>
                                          
                                          
                                           
                                            


                                            <div className="uk-width-1-1">
                                                <textarea className="uk-textarea" rows="5" placeholder="Use this space to explain about yourself" id="description" name="description" aria-label="Use this space to explain about yourself" required></textarea>
                                            </div>
                                            <div className="uk-width-1-1">
                                                <label><input type="checkbox" required/> I agree to all the <a href="/" className="uk-text-primary" target={'_blank'}>Terms and Conditions</a></label>
                                                <p>We will never share your submitted data</p>
                                                <button className="btn btn-primary exploreButton" type="submit">Submit</button>
                                            </div>
                                          
                                                </form>
                         }
                    </>
                }
        </div>
    )
}

export default JobForm;

// REMOVE HELMET AND HOOKS