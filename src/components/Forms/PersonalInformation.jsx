import React from "react";

export function PersonalInfo(props) {
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
          value={props.nameInput}
          onChange={props.handleChange}
        />

        <label>Current Job Title</label>
        <input
          type="text"
          placeholder="Job Title"
          className="input"
          name="currentJob"
          value={props.currentJobInput}
          onChange={props.handleChange}
        />

        <label>Phone Number</label>
        <input
          type="number"
          placeholder="Phone Number"
          className="input"
          name="phoneNumber"
          value={props.phoneInput}
          onChange={props.handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          className="input"
          name="email"
          value={props.emailInput}
          onChange={props.handleChange}
        />

        <label>City</label>
        <input
          type="text"
          placeholder="From"
          className="input"
          name="cityFrom"
          value={props.cityInput}
          onChange={props.handleChange}
        />

        <label>Description</label>
        <input
          type="text"
          placeholder="Describe yourself briefly"
          className="input"
          name="description"
          value={props.descriptionInput}
          onChange={props.handleChange}
        />
      </form>
    </section>
  );
}
