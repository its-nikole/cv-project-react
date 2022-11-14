import React from "react";  

export function Experience() {
    return (
        <section className="experience">
            <h2>Experience</h2>
            <form className="experience-form">
                <label>Company</label>
                <input type="text" name="company" placeholder="Company" className="input"/>

                <label>Location</label>
                <input type="text" name="location" placeholder="Company" className="input"/>

                <label>Position</label>
                <input type="text" name="position" placeholder="Position" className="input"/>

                <label>From</label>
                <input type="date" name="dateFrom" placeholder="From" className="input"/>

                <label>To</label>
                <input type="date" name="dateTo" placeholder="To" className="input"/>

                <label>Job Description</label>
                <input type="text" name="jobDescription" placeholder="Job Description" className="input"/>
            </form>
        </section>
    )
}