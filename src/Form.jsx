import { useState } from "react";
import FirstStep from "./Step1";
import ThirdStep from "./Step3";
import SecondStep from "./Step2";
import FourthStep from "./Step4";

export default function Form(){
    const [step , setStep] = useState(1);
    const [errors , setErrors] = useState({});
    const [formData , setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        phoneNumber:'',
        address:'',
        tenthSchool:'',
        tenthCgpa:'',
        twealthSchool:'',
        twealthCgpa:'',
        collegeName:'',
        collegeYear:'',
        companyName:'',
        jobTitle:'',
        startDate:'',
        endDate:'',
        jobDescription:'',
    });
    

    function nextStep(){
        setStep(step + 1);
    }
    function prevStep(){
        setStep(step - 1);
    }

    const handleChange = (event)=>{
        setFormData({...formData , [event.target.name]: event.target.value});
        setErrors({...errors, [event.target.name]: ''});
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        alert("Submitted see data in console log")
        console.log('submitted :' , formData)
    }

    const validateFirst = ()=>{
        const newErrors = {};
        if(!formData.firstName) newErrors.firstName = 'First Name is required';
        if(!formData.lastName) newErrors.lastName = 'Last Name is required';
        if(!formData.email) newErrors.email = 'Email is required';
        if(!formData.phoneNumber) newErrors.phoneNumber = 'Phone Number is required';
        if(!formData.address) newErrors.address = 'Address is required';
        return newErrors;
    }

    const validateSecond = ()=>{
        const newErrors = {};
        if(!formData.tenthSchool) newErrors.tenthSchool = 'Required field';
        if(!formData.tenthCgpa) newErrors.tenthCgpa = 'Required field';
        if(!formData.twealthSchool) newErrors.twealthSchool = 'Required field';
        if(!formData.twealthCgpa) newErrors.twealthCgpa = 'Required field';
        if(!formData.collegeName) newErrors.collegeName = 'Required field';
        if(!formData.collegeYear) newErrors.collegeYear = 'Required field';
        return newErrors;
    }

    const validateThird = ()=>{
        const newErrors = {};
        if(!formData.companyName) newErrors.companyName = 'Required field';
        if(!formData.jobTitle) newErrors.jobTitle = 'Required field';
        if(!formData.startDate) newErrors.startDate = 'Required field';
        if(!formData.endDate) newErrors.endDate = 'Required field';
        if(!formData.jobDescription) newErrors.jobDescription = 'Required field';
        return newErrors;
    }
    const handleNext = ()=>{
        let currentErrors = {};
        if(step === 1){
            currentErrors = validateFirst() || {};
        }else if(step === 2){
            currentErrors = validateSecond() || {};
        }else if(step === 3){
            currentErrors = validateThird() || {};
        }

        if(Object.keys(currentErrors).length === 0){
            nextStep();
        }else{
            setErrors(currentErrors);
        }
    }

    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
                {step === 1 && (
                    <FirstStep formData={formData} handleChange={handleChange} errors={errors}/>
                )}
                {step === 2 && (
                    <SecondStep formData={formData} handleChange={handleChange} errors={errors}/>
                )}
                 {step === 3 && (
                    <ThirdStep formData={formData} handleChange={handleChange} errors={errors}/>
                )}
                {step === 4 && <FourthStep formData={formData}/>}

                <div>
                    {step > 1 && <button onClick={prevStep}>Back</button>}
                    {step < 4 && <button type="button" onClick={handleNext}>Next</button>}
                    {step === 4 && <button type="submit">Submit</button>}
                </div>
            </form>
        </div>
    )
}