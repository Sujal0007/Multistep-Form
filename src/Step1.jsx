export default function FirstStep({formData , handleChange , errors}){
    return(
        <div>
            <h2>Personal Details</h2>
            <>
                <label htmlFor="">First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                {errors.firstName && <p>{errors.firstName}</p>}
            </>
            <>
                <label htmlFor="">Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                {errors.lastName && <p>{errors.lastName}</p>}
            </>
            <>
                <label htmlFor="">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <p>{errors.email}</p>}
            </>
            <>
                <label htmlFor="">Phone Number</label>
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
            </>
            <>
                <label htmlFor="">Address</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} />
                {errors.address && <p>{errors.address}</p>}
            </>
        </div>
    
    )
}