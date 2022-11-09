import React from "react";
import { Header } from "./components/Header";
import { PersonalInfo } from "./components/Forms/PersonalInformation";
import { Education } from "./components/Forms/Education";
import { Experience } from "./components/Forms/Experience";
import { PersonalInfoPreview } from "./components/Preview/PersonalInfoPreview";
import { CandidateInfoPreview } from "./components/Preview/CandidateInfoPrew";

export function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div>
          <PersonalInfo />
          <Education />
          <Experience />
        </div>
        <div>
          <PersonalInfoPreview />
          <CandidateInfoPreview />
        </div>
      </div>
    </>
  )
}


