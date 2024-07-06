import Project from "./Project"
import projects from "../../../data"

export default function ProjectPart() {
    return (
        <>
        {projects.map(project => <Project key={project.title} {...project}></Project>)}
        </>
    )
}
