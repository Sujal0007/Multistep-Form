export default function ThirdStep({formData , handleChange , errors}){
    return(
        <div>
            <h2>Work Expierience</h2>
            <>
                <label htmlFor="">company Name</label>
                <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
                {errors.companyName && <p>{errors.companyName}</p>}
            </>
            <>
                <label htmlFor="">Job Title</label>
                <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
                {errors.jobTitle && <p>{errors.jobTitle}</p>}
            </>
        
            <>
                <label htmlFor="">Start Date</label>
                <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
                {errors.startDate && <p>{errors.startDate}</p>}
            </>
            <>
                <label htmlFor="">End Date</label>
                <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
                {errors.endDate && <p>{errors.endDate}</p>}
            </>
            <>
                <label htmlFor="">Job description</label>
                <input type="textarea" name="jobDescription" value={formData.jobDescription} onChange={handleChange} />
                {errors.jobDescription && <p>{errors.jobDescription}</p>}
            </>


            
        </div>
    )

}