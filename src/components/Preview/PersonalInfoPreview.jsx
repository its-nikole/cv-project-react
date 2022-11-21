import React from "react";

export function PersonalInfoPreview(props) {
    return (
        <section className="personal-info-prew">
            <div>
                <h1>{props.myFullName}</h1>
                <h4>{props.myCurrentJob}</h4>
                <h4>{props.myCity}</h4>
            </div>
            <div>
                <h4>{props.myPhoneNumber}</h4>
                <h4>{props.myEmail}</h4>
            </div>
        </section>
    )
}