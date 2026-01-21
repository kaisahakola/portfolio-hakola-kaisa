import Header from "../Header/Header";
import './MainPage.scss'
import { Projects, Skills, Introduction, Contacts } from '../sections';


const MainPage = () => {
    return(
        <div className="wrapper-main-page">
            <div className="first-row">
                <Header />
                <img src="/images/face-image.jpg" alt="my-face" />
            </div>

            <div id="sections">
                <Introduction />
                <Skills />
                <Projects />
                <Contacts />
            </div>
        </div>
    )
}

export default MainPage