import { usePDF } from "@react-pdf/renderer";
import "./App.css";
import MyDocument from "./common/Document";
import LandingPage from "./common/LandingPage";
import LanguagePicker from "./common/LanguagePicker";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();
  const [instance] = usePDF({ document: <MyDocument /> });

  if (instance.loading) return <div>{t("Download.loading")}</div>;

  return (
    <>
      <LanguagePicker />
      <LandingPage />
      <a href={instance.url || ""} download="test.pdf">
        {t("Download.loadingDone")}
      </a>
    </>
  );
};

export default App;
