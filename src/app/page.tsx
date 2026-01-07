import resumeData from "./resume.json";
import type { Resume } from "../../types/resume";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Section from "./components/Section";
import EducationList from "./components/Education";
import Honors from "./components/Honors";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

const resume = resumeData as Resume;

export default function Home() {
  const { name, tagline, headshot, contact, education, honors_and_awards, skills, leadership_and_experience, projects } = resume;

  return (
    <main>
      <Nav name={name} context='home'/>
      <Header name={name} headshot={headshot} tagline={tagline} contact={contact}/>

      <Section title="Education">
        <EducationList {...education}/>
      </Section>

      <Section title="Honors and Awards">
        <Honors items={honors_and_awards}/>
      </Section>

      <Section title="Skills">
        <Skills skills={skills}/>
      </Section>

      <Section title="Leadership and Experience">
        <Experience items={leadership_and_experience}/>
      </Section>

      <Section title="Projects">
        <Projects projects={projects}/>
      </Section>
      <Footer name={name} link={contact.linkedin}/>
    </main>
  );
}
