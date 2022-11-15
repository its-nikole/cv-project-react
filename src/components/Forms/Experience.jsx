import React from "react";

export function Experience(props) {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <form className="experience-form">
        <label>Company</label>
        <input
          type="text"
          placeholder="Company"
          className="input"
          name="company"
          value={props.companyInput}
        />

        <label>Location</label>
        <input
          type="text"
          placeholder="Company"
          className="input"
          name="location"
          value={props.companyLocationInput}
        />

        <label>Job Title</label>
        <input
          type="text"
          placeholder="Job Title"
          className="input"
          name="jobTitle"
          value={props.jobTitleInput}
        />

        <label>From</label>
        <input
          type="date"
          placeholder="From"
          className="input"
          name="dateFrom"
          value={props.jobStartInput}
        />

        <label>To</label>
        <input 
            type="date" 
            placeholder="To" 
            className="input" 
            name="dateTo" 
            value={props.jobEndInput}
        />

        <label>Job Description</label>
        <input
          type="text"
          placeholder="Job Description"
          className="input"
          name="jobDescription"
          value={props.jobDescriptionInput}
        />
      </form>
    </section>
  );
}
