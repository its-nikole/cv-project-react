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
          value={props.fullInfo.institution}
          onChange={props.handleChange}
        />

        <label>Degree</label>
        <input
          type="text"
          placeholder="Degree"
          className="input"
          name="degree"
          value={props.fullInfo.degree}
          onChange={props.handleChange}
        />

        <label>From</label>
        <input
          type="date"
          placeholder="From"
          className="input"
          name="courseStart"
          value={props.fullInfo.courseStart}
          onChange={props.handleChange}
        />

        <label>To</label>
        <input 
            type="date" 
            placeholder="To" 
            className="input" 
            name="courseEnd"
            value={props.fullInfo.courseEnd}
            onChange={props.handleChange}
        />
        <button className="btn-add">+ Add Education</button>
      </form>
    </section>
  );
}
