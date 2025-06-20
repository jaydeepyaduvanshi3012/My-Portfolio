import AboutMe from './_components/AboutMe';
import Banner from './_components/Banner';
import Skills from './_components/Skills';
import ProjectList from './_components/ProjectList';

export default function Home() {
    return (
        <div className="page-">
            <Banner />
            <AboutMe />
            <Skills />
            <ProjectList />
        </div>
    );
}
