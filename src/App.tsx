import "./App.scss";
import MainPage from "./components/mainPage/Page/MainPage.tsx.tsx";
import Navigation from "./components/shared/Navbar/Navigation.tsx";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/shared/Footer/Footer.tsx";

function App() {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
