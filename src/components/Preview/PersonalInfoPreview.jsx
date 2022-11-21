import React from "react";

export function PersonalInfoPreview(props) {
    return (
        <section className="personal-info-prew">
            <div>
                <h1>{props.fullInfo.myFullName}</h1>
                <h4>{props.fullInfo.myCurrentJob}</h4>
                <h4>{props.fullInfo.myCity}</h4>
            </div>
            <div>
                <h4>{props.fullInfo.myPhoneNumber}</h4>
                <h4>{props.fullInfo.myEmail}</h4>
            </div>
        </section>
    )
}