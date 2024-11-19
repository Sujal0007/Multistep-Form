export default function FourthStep({formData}){
    return(
        <div>
            <h2>Rewiew your form details</h2>
            <h3>Personal details</h3>
            <p>First Name: {formData.firstName}</p>
            <p>Email: {formData.email}</p>
            <p>Address: {formData.address}</p>
            <p>Tenth School: {formData.tenthSchool}</p>
            <p>Tenth CGPA: {formData.tenthCgpa}</p>
            <p>Twealth School: {formData.twealthSchool}</p>
            <p>Twealth CGPA: {formData.twealthCgpa}</p>
            <p>College: {formData.collegeName}</p>
            <p>College Year: {formData.collegeYear}</p>
            <p>Company Nmae: {formData.companyName}</p>
            <p>Job Title: {formData.jobTitle}</p>
            <p>Start Date: {formData.startDate}</p>
            <p>End Date: {formData.endDate}</p>
            <p>Job Description: {formData.jobDescription}</p>
        </div>
    )
}
