import { PDFDownloadLink } from "@react-pdf/renderer";
import "./App.css";
import MyDocument from "./common/Document";
import LandingPage from "./common/LandingPage";
import LanguagePicker from "./common/LanguagePicker";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();
  return (
    <>
      <LanguagePicker />
      <LandingPage />
      <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
        {({ loading }) =>
          loading ? t("Download.loading") : t("Download.loadingDone")
        }
      </PDFDownloadLink>
    </>
  );
};

export default App;
