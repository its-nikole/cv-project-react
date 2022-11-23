import React from "react";

export function CandidateInfoPreview(props) {
  return (
    <div className="preview-info">
      <div className="description">
        <h3>Profile</h3>
        <span className="underline"></span>
        <div>{props.generalInfo.description}</div>
      </div>

      <div className="education-info">
        <h3>Education</h3>
        <span className="underline"></span>
        {props.education.map((educationItem, index) => (
          <div className="item" key={index}>
            <div>Insituition name: {educationItem.institution}</div>
            <div>Degree: {educationItem.degree}</div>
            <div>From: {educationItem.courseStart}</div>
            <div>To: {educationItem.courseEnd}</div>{" "}
          </div>
        ))}
      </div>

      <div className="experience-info item">
        <h3>Experience</h3>
        <span className="underline"></span>
        {props.experience.map((experienceItem, index) => (
          <div className="item" key={index}>
            <div>Company: {experienceItem.company}</div>
            <div>Location: {experienceItem.location}</div>
            <div>Job Title: {experienceItem.jobTitle}</div>
            <div>From: {experienceItem.jobStart}</div>
            <div>To: {experienceItem.jobEnd}</div>
            <div>Job Description: {experienceItem.jobDescription}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
