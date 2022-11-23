import React, { useState } from "react";
import { Header } from "./components/Header";
import { GeneralInfo } from "./components/Forms/GeneralInformation";
import { Education } from "./components/Forms/Education";
import { Experience } from "./components/Forms/Experience";
import { GeneralInfoPreview } from "./components/Preview/GeneralInfoPrew";
import { CandidateInfoPreview } from "./components/Preview/CandidateInfoPrew";

export function App() {
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [generalInfo, setGeneralInfo] = useState({
    fullName: "",
    currentJob: "",
    phoneNumber: [],
    email: "",
    cityFrom: "",
    description: "",
  });

  function getDetails(e) {
    e.preventDefault();
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setGeneralInfo({ ...generalInfo, [inputName]: inputValue });
  }

  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="form-wrapper">
          <GeneralInfo generalInfo={generalInfo} handleChange={getDetails} />
          <Education setEducation={setEducation} education={education} />
          <Experience setExperience={setExperience} experience={experience} />
        </div>
        <div className="preview-wrapper">
          <GeneralInfoPreview
            generalInfo={generalInfo}
            handleChange={getDetails}
          />
          <CandidateInfoPreview
            generalInfo={generalInfo}
            handleChange={getDetails}
            setEducation={setEducation}
            education={education}
            setExperience={setExperience}
            experience={experience}
          />
        </div>
      </div>
    </>
  );
}
