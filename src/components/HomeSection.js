import "./HomeSection.css";
import picPath from "../assets/images/dheeraj.jpg";
import { HOME_TEXTS } from "../dataModeling/i18n";

function HomeSection() {
    const {
        profilePicAlt,
        greeting,
        intro1,
        intro2,
        role,
        description,
        coreSkills,
        skills: SKILLS,
    } = HOME_TEXTS;

    return (
        <section id="home" className="home-container">
            <div className="home-left">
                <img
                    className="profile-pic"
                    src={picPath}
                    alt={profilePicAlt}
                />
            </div>
            <div className="home-right">
                <div className="greeting">{greeting}</div>
                <div className="name">
                    {intro1} <span>{intro2}</span>
                </div>
                <div className="role">{role}</div>
                <p>{description}</p>
                <div className="role">{coreSkills}</div>
                <div className="skills">
                    {SKILLS.map((skill, index) => (
                        <div className="skill" key={index}>
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HomeSection;
