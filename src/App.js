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
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quas, tenetur provident ut voluptas odio nesciunt sed et ipsam deserunt totam laborum, dolorum dolor veritatis tempore harum magni possimus nulla. Magnam placeat sit non rem fuga animi id repudiandae quidem?",
    institution: "Vilnius University",
    degree: "Bachelor's",
    courseStart: "2016.09.01",
    courseEnd: "2020.06.01",
    company: "Orion Inovations",
    location: "London",
    jobTitle: "Junior Front-End Engineer",
    jobStart: "2020.07.15",
    jobEnd: "2022.10.10",
    jobDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quas, tenetur provident ut voluptas odio nesciunt sed et ipsam deserunt totam laborum, dolorum dolor veritatis tempore harum magni possimus nulla. Magnam placeat sit non rem fuga animi id repudiandae quidem?"
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
            myFullName={fullInfo.fullName}
            myCurrentJob={fullInfo.currentJob}
            myCity={fullInfo.cityFrom}
            myPhoneNumber={fullInfo.phoneNumber}
            myEmail={fullInfo.email}
          />
          <CandidateInfoPreview 
            myDescription={fullInfo.description}
            myInstitution={fullInfo.institution}
            myDegree={fullInfo.degree}
            myCourseStart={fullInfo.courseStart}
            myCourseEnd={fullInfo.courseEnd}
            myCompany={fullInfo.company}
            myCompanyLocation={fullInfo.location}
            myJobTitle={fullInfo.jobTitle}
            myJobStart={fullInfo.jobStart}
            myJobEnd={fullInfo.jobEnd}
            myJobDescription={fullInfo.jobDescription}
          />
        </div>
      </div>
    </>
  )
}