export default function SecondStep({formData , handleChange , errors}){
    return(
        <div>
            <h2>Education Details</h2>
            
            <>
                <label htmlFor="">10th School</label>
                <input type="text" name="tenthSchool" value={formData.tenthSchool} onChange={handleChange} />
                {errors.tenthSchool && <p>{errors.tenthSchool}</p>}
            </>
            
             <>
                <label htmlFor="">10th CGPA</label>
                <input type="text" name="tenthCgpa" value={formData.tenthCgpa} onChange={handleChange} />
                {errors.tenthCgpa && <p>{errors.tenthCgpa}</p>}
            </>
            <>
                <label htmlFor="">12th School</label>
                <input type="text" name="twealthSchool" value={formData.twealthSchool} onChange={handleChange} />
                {errors.twealthSchool && <p>{errors.twealthSchool}</p>}
            </>
           
            <>
                <label htmlFor="">12th Cgpa</label>
                <input type="text" name="twealthCgpa" value={formData.twealthCgpa} onChange={handleChange} />
                {errors.twealthCgpa && <p>{errors.twealthCgpa}</p>}
            </>
            <>
                <label htmlFor="">College Name</label>
                <input type="text" name="collegeName" value={formData.collegeName} onChange={handleChange} />
                {errors.collegeName && <p>{errors.collegeName}</p>}
            </>
            <>
                <label htmlFor="">College Year</label>
                <input type="text" name="collegeYear" value={formData.collegeYear} onChange={handleChange} />
                {errors.collegeYear && <p>{errors.collegeYear}</p>}
            </>
        </div>
    )

}