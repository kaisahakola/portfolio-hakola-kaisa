import Header from "../Header/Header";
import './MainPage.scss'
import { Projects, Skills, Introduction } from '../sections';


const MainPage = () => {
    return(
        <div className="wrapper-main-page" id="main-section">
            <div className="first-row">
                <Header />
            </div>

            <div id="sections">
                <Introduction />
                <Skills />
                <Projects />
            </div>
        </div>
    )
}

export default MainPage