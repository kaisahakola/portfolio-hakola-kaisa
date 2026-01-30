import "./App.scss";
import MainPage from "./components/mainPage/Page/MainPage.tsx.tsx";
import Navigation from "./components/shared/Navbar/Navigation.tsx";
import Footer from "./components/shared/Footer/Footer.tsx";

function App() {
  return (
    <div>
      <Navigation />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
