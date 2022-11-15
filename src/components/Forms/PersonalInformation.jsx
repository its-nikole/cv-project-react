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
        />

        <label>Current Job Title</label>
        <input
          type="text"
          placeholder="Job Title"
          className="input"
          name="currentJobTitle"
          value={props.currentJobInput}
        />

        <label>Phone Number</label>
        <input
          type="number"
          placeholder="Phone Number"
          className="input"
          name="phoneNumber"
          value={props.phoneInput}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          className="input"
          name="email"
          value={props.emailInput}
        />

        <label>City</label>
        <input
          type="text"
          placeholder="From"
          className="input"
          name="cityFrom"
          value={props.cityInput}
        />

        <label>Description</label>
        <input
          type="text"
          placeholder="Describe yourself briefly"
          className="input"
          name="description"
          value={props.descriptionInput}
        />
      </form>
    </section>
  );
}
