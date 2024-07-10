import React from 'react'
import image from "../image/project/image.png"
import { projectData } from "../json/Project";

function Project() {
    return (
        <>
            <div className="container text-light py-2 mb-4">
                <h2 className="my-5 aboutHeading experience-title">
                    <span className="highlight">P</span>r<span className="highlight">o</span>j<span className="highlight">ec</span>ts
                </h2>

                <div className=' d-flex my-5 flex-wrap gap-4'>
                    {projectData.map(project => {
                        return <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={image} alt={project.projectName} style={{ width: "300px", height: "300px" }} />
                                    <p className="px-3 d-flex justify-content-left align-items-center" style={{ height: "50px" }}>
                                        {project.projectName}
                                    </p>
                                </div>
                                <div className="flip-card-back">
                                    <ul>
                                        {project.createdDate ? <li className='py-1 mb-1 px-2 bg-dark rounded'><strong className='text-warning'>Created :</strong> {project.createdDate}</li> : ""}
                                        {project.technologiesUsed ? <li className='py-1 px-2 bg-dark rounded'><strong className='text-warning'>Tech :</strong> {project.technologiesUsed}</li> : ""}
                                        {project.features.map(feature => {
                                            return <li>{feature}</li>
                                        })}
                                    </ul>
                                    <div className="flip-card-back-links">
                                        {project.repositoryLink ? <a href={project.repositoryLink} style={{ padding: "12px" }} target='_blank' rel="noreferrer"><i className="fa fa-github" style={{ fontSize: "2rem" }}></i></a> : ""}

                                        {project.liveProjectLink ? <a href={project.liveProjectLink} className="p-3" target='_blank' rel="noreferrer"><i className="fa fa-external-link" style={{ fontSize: "1.5rem" }} aria-hidden="true"></i></a> : ""}
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Project