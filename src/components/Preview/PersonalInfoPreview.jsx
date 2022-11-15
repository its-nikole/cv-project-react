import React from "react";

export function PersonalInfoPreview(props) {
    return (
        <section className="personal-info-prew">
            <div>
                <h1>{props.myFullName}</h1>
                <h3>{props.myCurrentJob}</h3>
            </div>
            <div>
                <h3>Number</h3>
                <h3>Email</h3>
            </div>
        </section>
    )
}