import React, { useState } from "react";
import { Header } from "./components/Header";
import { PersonalInfo } from "./components/Forms/PersonalInformation";
import { Education } from "./components/Forms/Education";
import { Experience } from "./components/Forms/Experience";
import { PersonalInfoPreview } from "./components/Preview/PersonalInfoPreview";
import { CandidateInfoPreview } from "./components/Preview/CandidateInfoPrew";

export function App() {
  const [fullInfo, setFullInfo] = useState({
    fullName: "",
    currentJob: "",
    phoneNumber: [],
    email: "",
    cityFrom: "",
    description: "",
    institution: "",
    degree: "",
    courseStart: "",
    courseEnd: "",
    company: "",
    location: "",
    jobTitle: "",
    jobStart: "",
    jobEnd: "",
    jobDescription: ""
  })

  function getDetails(e) {
    e.preventDefault();
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFullInfo({...fullInfo, [inputName]: inputValue});
  }

  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="form-wrapper">
          <PersonalInfo 
            fullInfo = {fullInfo}
            handleChange={getDetails}
          />
          <Education 
            fullInfo = {fullInfo}
            handleChange={getDetails}
          />
          <Experience 
            fullInfo = {fullInfo}
            handleChange={getDetails}
          />
        </div>
        <div className="preview-wrapper">
          <PersonalInfoPreview 
            fullInfo = {fullInfo}
          />
          <CandidateInfoPreview 
            fullInfo = {fullInfo}
          />
        </div>
      </div>
    </>
  )
}