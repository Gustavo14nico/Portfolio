import {Navbar} from "../components/Navbar/Navbar";
import {Hero} from "../components/Hero/Hero";
import {About} from "../components/About/About";
import {Footer} from "../components/Footer/Footer";
import {Contact} from "../components/Contact/Contact"
import {Skills} from "../components/Skills/Skills"
import {Projects} from "../components/Projects/Projects"
import {Reveal} from "../components/Reveal/Reveal"

export function Home(){
    return(
    <>
        <Navbar/>
        <Hero/>
        <Reveal><About/></Reveal>
        <Reveal><Skills/></Reveal>
        <Reveal><Projects/></Reveal>
        <Reveal><Contact/></Reveal>
        <Footer/>
    </>
    )
}

export default Home;