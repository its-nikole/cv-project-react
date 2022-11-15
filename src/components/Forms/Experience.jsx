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
          onChange={props.handleChange}
        />

        <label>Location</label>
        <input
          type="text"
          placeholder="Company"
          className="input"
          name="location"
          value={props.companyLocationInput}
          onChange={props.handleChange}
        />

        <label>Job Title</label>
        <input
          type="text"
          placeholder="Job Title"
          className="input"
          name="jobTitle"
          value={props.jobTitleInput}
          onChange={props.handleChange}
        />

        <label>From</label>
        <input
          type="date"
          placeholder="From"
          className="input"
          name="jobStart"
          value={props.jobStartInput}
          onChange={props.handleChange}
        />

        <label>To</label>
        <input 
            type="date" 
            placeholder="To" 
            className="input" 
            name="jobEnd" 
            value={props.jobEndInput}
            onChange={props.handleChange}
        />

        <label>Job Description</label>
        <input
          type="text"
          placeholder="Job Description"
          className="input"
          name="jobDescription"
          value={props.jobDescriptionInput}
          onChange={props.handleChange}
        />
      </form>
    </section>
  );
}
