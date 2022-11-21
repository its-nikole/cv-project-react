import React from "react";

export function CandidateInfoPreview(props) {
  return (
    <div className="preview-info">
      <div className="description">
        <h3>Profile</h3>
        <span className="underline"></span>
        <div>{props.fullInfo.description}</div>
      </div>

      <div className="education-info">
        <h3>Education</h3>
        <span className="underline"></span>
        <div>Insituition name: {props.fullInfo.institution}</div>
        <div>Degree: {props.fullInfo.degree}</div>
        <div>From: {props.fullInfo.courseStart}</div>
        <div>To: {props.fullInfo.courseEnd}</div>
      </div>

      <div className="experience-info">
        <h3>Experience</h3>
        <span className="underline"></span>
        <div>Company: {props.fullInfo.company}</div>
        <div>Location: {props.fullInfo.location}</div>
        <div>Job Title: {props.fullInfo.jobTitle}</div>
        <div>From: {props.fullInfo.jobStart}</div>
        <div>To: {props.fullInfo.jobEnd}</div>
        <div>Job Description: {props.fullInfo.jobDescription}</div>
      </div>
    </div>
  );
}
