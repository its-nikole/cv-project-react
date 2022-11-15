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
          name="institutionName"
          value={props.institutionInput}
        />

        <label>Degree</label>
        <input
          type="text"
          placeholder="Degree"
          className="input"
          name="degree"
          value={props.degreeInput}
        />

        <label>From</label>
        <input
          type="date"
          placeholder="From"
          className="input"
          name="dateFrom"
          value={props.courseStartInput}
        />

        <label>To</label>
        <input 
            type="date" 
            placeholder="To" 
            className="input" 
            name="dateTo"
            value={props.courseEndInput}
        />
      </form>
    </section>
  );
}
