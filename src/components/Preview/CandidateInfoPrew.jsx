import React from "react";

export function CandidateInfoPreview() {
    return (
    <div className="preview-wrapper">
        <div className="description">
            <div>Bla bla description</div>
        </div>

        <div className="education-info">
            <div>Insituition name: </div>
            <div>Degree: </div>
            <div>From: </div>
            <div>To: </div>
        </div>

        <div className="experience-info">
            <div>Company: </div>
            <div>Location: </div>
            <div>Position: </div>
            <div>From: </div>
            <div>To: </div>
        </div>
    </div>
    )
}