import React from "react";

export function CandidateInfoPreview(props) {
    return (
    <div className="preview-info">
        <div className="description">
            <div>{props.myDescription}</div>
        </div>

        <div className="education-info">
            <div>Insituition name: {props.myInstitution}</div>
            <div>Degree: {props.myDegree}</div>
            <div>From: {props.myCourseStart}</div>
            <div>To: {props.myCourseEnd}</div>
        </div>

        <div className="experience-info">
            <div>Company: {props.myCompany}</div>
            <div>Location: {props.myCompanyLocation}</div>
            <div>Job Title: {props.myJobTitle}</div>
            <div>From: {props.myJobStart}</div>
            <div>To: {props.myJobEnd}</div>
            <div>Job Description: {props.myJobDescription}</div>
        </div>
    </div>
    )
}