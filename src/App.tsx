import { PDFViewer } from "@react-pdf/renderer";
import "./App.css";
import MyDocument from "./common/Document";
import LandingPage from "./common/LandingPage";
import LanguagePicker from "./common/LanguagePicker";

const App = () => {
  return (
    <>
      <LanguagePicker />
      <LandingPage />
      <PDFViewer>
        <MyDocument />
      </PDFViewer>
    </>
  );
};

export default App;
