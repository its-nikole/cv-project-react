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
        <div>Insituition name: {props.fullInfo.myInstitution}</div>
        <div>Degree: {props.fullInfo.myDegree}</div>
        <div>From: {props.fullInfo.myCourseStart}</div>
        <div>To: {props.fullInfo.myCourseEnd}</div>
      </div>

      <div className="experience-info">
        <h3>Experience</h3>
        <span className="underline"></span>
        <div>Company: {props.fullInfo.myCompany}</div>
        <div>Location: {props.fullInfo.myCompanyLocation}</div>
        <div>Job Title: {props.fullInfo.myJobTitle}</div>
        <div>From: {props.fullInfo.myJobStart}</div>
        <div>To: {props.fullInfo.myJobEnd}</div>
        <div>Job Description: {props.fullInfo.myJobDescription}</div>
      </div>
    </div>
  );
}
