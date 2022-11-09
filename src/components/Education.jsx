import React from "react";

export function Education() {
    return (
        <section className="education">
            <h2>Education</h2>
            <form className="education-form">
                <label>Institution Name</label>
                <input type="text" name="institutionName" placeholder="Institution Name" className="input"/>

                <label>Degree</label>
                <input type="text" name="degree" placeholder="Degree" className="input"/>

                <label>From</label>
                <input type="date" name="dateFrom" placeholder="From" className="input"/>

                <label>To</label>
                <input type="date" name="dateTo" placeholder="To" className="input"/>
            </form>
        </section>
    )
}