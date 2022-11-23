import React, {useState} from "react";

export function Experience(props) {
  const experienceInitialState = {
    company: "",
    location: "",
    jobTitle: "",
    jobStart: "",
    jobEnd: "",
    jobDescription: ""
  }
  const [state, setState] = useState(experienceInitialState);

  function handleChange(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setState({...state, [inputName]: inputValue});
  }

  function handleSubmit(e) {
    e.preventDefault();
    setState(experienceInitialState);
    props.setExperience([...props.experience, state]);
  }

  return (
    <section className="experience">
      <h2>Experience</h2>
      <form onSubmit={handleSubmit} className="experience-form">
        <label>Company</label>
        <input
          type="text"
          placeholder="Company"
          className="input"
          name="company"
          value={state.company}
          onChange={handleChange}
        />

        <label>Location</label>
        <input
          type="text"
          placeholder="Company"
          className="input"
          name="location"
          value={state.location}
          onChange={handleChange}
        />

        <label>Job Title</label>
        <input
          type="text"
          placeholder="Job Title"
          className="input"
          name="jobTitle"
          value={state.jobTitle}
          onChange={handleChange}
        />

        <label>From</label>
        <input
          type="date"
          placeholder="From"
          className="input"
          name="jobStart"
          value={state.jobStart}
          onChange={handleChange}
        />

        <label>To</label>
        <input 
            type="date" 
            placeholder="To" 
            className="input" 
            name="jobEnd" 
            value={state.jobEnd}
            onChange={handleChange}
        />

        <label>Job Description</label>
        <input
          type="text"
          placeholder="Job Description"
          className="input"
          name="jobDescription"
          value={state.jobDescription}
          onChange={handleChange}
        />
        <button type="submit" className="btn-add">+ Add Job</button>
      </form>
    </section>
  );
}
