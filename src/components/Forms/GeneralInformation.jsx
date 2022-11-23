import React from "react";

export function GeneralInfo(props) {
  return (
    <section className="personal-info">
      <h2>Personal Information</h2>
      <form className="personal-info-form">
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Full Name"
          className="input"
          name="fullName"
          value={props.generalInfo.name}
          onChange={props.handleChange}
        />

        <label>Current Job Title</label>
        <input
          type="text"
          placeholder="Job Title"
          className="input"
          name="currentJob"
          value={props.generalInfo.currentJob}
          onChange={props.handleChange}
        />

        <label>Phone Number</label>
        <input
          type="number"
          placeholder="Phone Number"
          className="input"
          name="phoneNumber"
          value={props.generalInfo.phoneNumber}
          onChange={props.handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          className="input"
          name="email"
          value={props.generalInfo.email}
          onChange={props.handleChange}
        />

        <label>City</label>
        <input
          type="text"
          placeholder="From"
          className="input"
          name="cityFrom"
          value={props.generalInfo.city}
          onChange={props.handleChange}
        />

        <label>Description</label>
        <input
          type="text"
          placeholder="Describe yourself briefly"
          className="input"
          name="description"
          value={props.generalInfo.description}
          onChange={props.handleChange}
        />
      </form>
    </section>
  );
}
