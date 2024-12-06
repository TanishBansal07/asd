
import Skillcard from "./skillcard.astro"

let skills = {
    "Languages": ["JavaScript", "Python","R"],
    "Frontend": ["React", "HTML", "CSS", "Bootstrap"],
    "Backend": ["Node.js", "Express", "Flask"],
    "Databases": ["MongoDB", "PostgreSQL"],
    "Tools": ["Git", "GitHub", "Heroku"],
    "Others": ["Data Structures", "Algorithms", "Machine Learning"]
}
function getSkills(skills) {
for (const [key,value] of Object.entries(skills)) {
    let skill = document.createElement("div")
    skill.id = key
    skill.innerText = `${key}`
    document.getElementById("skills").append(skill)
    for (let index = 0; index < value.length; index++) {
        let card = document.createElement(<Skillcard/>)
        document.getElementById(key).append(card)
    }
}
}
getSkills(skills)
