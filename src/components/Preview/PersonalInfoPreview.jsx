import React from "react";

export function PersonalInfoPreview(props) {
    return (
        <section className="personal-info-prew">
            <div>
                <h1>{props.fullInfo.fullName}</h1>
                <h4>{props.fullInfo.currentJob}</h4>
                <h4>{props.fullInfo.cityFrom}</h4>
            </div>
            <div>
                <h4>{props.fullInfo.phoneNumber}</h4>
                <h4>{props.fullInfo.email}</h4>
            </div>
        </section>
    )
}