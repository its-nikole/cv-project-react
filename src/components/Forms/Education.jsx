import React, {useEffect, useState} from "react";

export function Education(props) {
  const educationInitialState = {
    institution: "",
    degree: "",
    courseStart: "",
    courseEnd: "",
  }
  const [state, setState] = useState(educationInitialState);

  useEffect(() => {
    const editingData = props.education.find(
      (item) => item.id === props.editEducation
    );
    if (!editingData) {
      return;
    }
    setState(editingData);
  }, [props.editEducation, props.education]);

  function handleChange(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setState({...state, [inputName]: inputValue});
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (props.editEducation) {
      props.setEducation([state]);
      props.setEditEducation(null);
      setState(editEducation);
    } else {
      const id = generateID();
      setState(educationInitialState);
      props.setEducation([...props.education, {...state, id}]);
    };
  }

  const generateID = () => {
    return Math.floor(Math.random() * 50);
  }

  return (
    <section className="education">
      <h2>Education</h2>
      <form onSubmit={handleSubmit} className="education-form">
        <label>Institution Name</label>
        <input
          type="text"
          placeholder="Institution Name"
          className="input"
          name="institution"
          value={state.institution}
          onChange={handleChange}
        />

        <label>Degree</label>
        <input
          type="text"
          placeholder="Degree"
          className="input"
          name="degree"
          value={state.degree}
          onChange={handleChange}
        />

        <label>From</label>
        <input
          type="date"
          placeholder="From"
          className="input"
          name="courseStart"
          value={state.courseStart}
          onChange={handleChange}
        />

        <label>To</label>
        <input 
            type="date" 
            placeholder="To" 
            className="input" 
            name="courseEnd"
            value={state.courseEnd}
            onChange={handleChange}
        />
        <button type="submit" className="btn-add">+ Add Education</button>
      </form>
    </section>
  );
}
