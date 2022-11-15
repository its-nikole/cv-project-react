import React, { useState } from "react";
import { Header } from "./components/Header";
import { PersonalInfo } from "./components/Forms/PersonalInformation";
import { Education } from "./components/Forms/Education";
import { Experience } from "./components/Forms/Experience";
import { PersonalInfoPreview } from "./components/Preview/PersonalInfoPreview";
import { CandidateInfoPreview } from "./components/Preview/CandidateInfoPrew";

export function App() {
  const [fullInfo, setFullInfo] = useState({
    name: "Name Surname",
    currentJob: "Junior Front-End Engineer",
    phoneNumber: +37061770141,
    email: "name@outlook.com",
    cityFrom: "Vilnius",
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
    const {name, value} = e.target
    setFullInfo(prevNames => ({
        ...prevNames,
        [name]: value
    }))
  }

  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="form-wrapper">
          <PersonalInfo 
            nameInput={fullInfo.name}
            currentJobInput={fullInfo.currentJob}
            phoneInput={fullInfo.phoneNumber}
            emailInput={fullInfo.email}
            cityInput={fullInfo.cityFrom}
            descriptionInput={fullInfo.description}
            handleChange={getDetails}
            
          />
          <Education 
            institutionInput={fullInfo.institution}
            degreeInput={fullInfo.degree}
            courseStartInput={fullInfo.courseStart}
            courseEndInput={fullInfo.courseEnd}
            handleChange={getDetails}
          />
          <Experience 
            companyInput={fullInfo.company}
            companyLocationInput={fullInfo.location}
            jobTitleInput={fullInfo.jobTitle}
            jobStartInput={fullInfo.jobStart}
            jobEndInput={fullInfo.jobEnd}
            jobDescriptionInput={fullInfo.jobDescription}
            handleChange={getDetails}
          />
        </div>
        <div className="preview-wrapper">
          <PersonalInfoPreview 
            myFullName={fullInfo.name}
            myCurrentJob={fullInfo.currentJob}
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