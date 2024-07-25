import { useTranslation } from "react-i18next";

const LandingPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p>{t("LandingPage.hi")}</p>
    </div>
  );
};

export default LandingPage;
