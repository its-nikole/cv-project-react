import React from "react";

export function CandidateInfoPreview(props) {
  const handleEducationDelete = (e) => {
    props.setEducation(props.education.filter((item) => item.id !== e.id));
  };

  const handleExperienceDelete = (e) => {
    props.setExperience(props.experience.filter((item) => item.id !== e.id));
  };

  const handleEducationEdit = (e) => {
    const editableItem = props.education.find((item) => item.id === e.id);
    props.setEditEducation(editableItem.id);
  }

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
        {props.education.map((educationItem) => (
          <div className="item" key={educationItem.id}>
            <div>Insituition name: {educationItem.institution}</div>
            <div>Degree: {educationItem.degree}</div>
            <div>From: {educationItem.courseStart}</div>
            <div>To: {educationItem.courseEnd}</div>
            <button onClick={() => handleEducationDelete(educationItem)} className="btn-delete">Delete</button>
            <button onClick={() => handleEducationEdit(educationItem)} className="btn-edit">Edit</button>          
          </div>
        ))}
      </div>

      <div className="experience-info item">
        <h3>Experience</h3>
        <span className="underline"></span>
        {props.experience.map((experienceItem) => (
          <div className="item" key={experienceItem.id}>
            <div>Company: {experienceItem.company}</div>
            <div>Location: {experienceItem.location}</div>
            <div>Job Title: {experienceItem.jobTitle}</div>
            <div>From: {experienceItem.jobStart}</div>
            <div>To: {experienceItem.jobEnd}</div>
            <div>Job Description: {experienceItem.jobDescription}</div>
            <button onClick={() => handleExperienceDelete(experienceItem)}className="btn-delete">Delete</button>
            <button className="btn-edit">Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}
