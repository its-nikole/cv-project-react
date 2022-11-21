import React from "react";

export function CandidateInfoPreview(props) {
  return (
    <div className="preview-info">
      <div className="description">
        <h3>Profile</h3>
        <span className="underline"></span>
        <div>{props.myDescription}</div>
      </div>

      <div className="education-info">
        <h3>Education</h3>
        <span className="underline"></span>
        <div>Insituition name: {props.myInstitution}</div>
        <div>Degree: {props.myDegree}</div>
        <div>From: {props.myCourseStart}</div>
        <div>To: {props.myCourseEnd}</div>
      </div>

      <div className="experience-info">
        <h3>Experience</h3>
        <span className="underline"></span>
        <div>Company: {props.myCompany}</div>
        <div>Location: {props.myCompanyLocation}</div>
        <div>Job Title: {props.myJobTitle}</div>
        <div>From: {props.myJobStart}</div>
        <div>To: {props.myJobEnd}</div>
        <div>Job Description: {props.myJobDescription}</div>
      </div>
    </div>
  );
}
