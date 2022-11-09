import React from "react";
import { Header } from "./components/Header";
import { PersonalInfo } from "./components/Forms/PersonalInformation";
import { Education } from "./components/Forms/Education";
import { Experience } from "./components/Forms/Experience";

export function App() {
  return (
    <>
      <Header />
      <PersonalInfo />
      <Education />
      <Experience />
    </>
  )
}


