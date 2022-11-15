import React from "react";

export function Education(props) {
  return (
    <section className="education">
      <h2>Education</h2>
      <form className="education-form">
        <label>Institution Name</label>
        <input
          type="text"
          placeholder="Institution Name"
          className="input"
          name="institution"
          value={props.institutionInput}
          onChange={props.handleChange}
        />

        <label>Degree</label>
        <input
          type="text"
          placeholder="Degree"
          className="input"
          name="degree"
          value={props.degreeInput}
          onChange={props.handleChange}
        />

        <label>From</label>
        <input
          type="date"
          placeholder="From"
          className="input"
          name="courseStart"
          value={props.courseStartInput}
          onChange={props.handleChange}
        />

        <label>To</label>
        <input 
            type="date" 
            placeholder="To" 
            className="input" 
            name="courseEnd"
            value={props.courseEndInput}
            onChange={props.handleChange}
        />
      </form>
    </section>
  );
}
