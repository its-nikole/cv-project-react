import React from "react";

export function GeneralInfoPreview(props) {
    return (
        <section className="personal-info-prew">
            <div>
                <h1>{props.generalInfo.fullName}</h1>
                <h4>{props.generalInfo.currentJob}</h4>
                <h4>{props.generalInfo.cityFrom}</h4>
            </div>
            <div>
                <h4>{props.generalInfo.phoneNumber}</h4>
                <h4>{props.generalInfo.email}</h4>
            </div>
        </section>
    )
}