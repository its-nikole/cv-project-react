import React from "react";

export function PersonalInfo() {
    return (
        <section className="personal-info">
            <h2>Personal Information</h2>
            <form className="personal-info-form">
                <label>First Name</label>
                <input type="text" name="firstName" placeholder="First Name" className="input"/>

                <label>Last Name</label>
                <input type="text" name="lastName" placeholder="Last Name" className="input"/>

                <label>Phone Number</label>
                <input type="numnber" name="phoneNumber" placeholder="Phone Number" className="input"/>

                <label>Email</label>
                <input type="email" name="email" placeholder="Email" className="input"/>

                <label>Description</label>
                <input type="text" name="description" placeholder="Describe yourself briefly" className="input"/>
            </form>
        </section>
    );
}