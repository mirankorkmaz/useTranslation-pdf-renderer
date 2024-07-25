import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getLanguage, i18nLoading, setLanguage } from "../../i18n";
import "./LanguagePicker.css";

const LanguagePicker = () => {
  const { t } = useTranslation();
  const languages = [
    { value: "en", text: "English" },
    { value: "sv", text: "Svenska" },
  ];
  const [, setAnchorEl] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState("");

  useEffect(() => {
    if (currentLanguage === "") {
      i18nLoading.then(() => {
        setCurrentLanguage(getLanguage() || "sv");
      });
    }
  }, [currentLanguage]);

  const handleOnClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOnClose = () => {
    setAnchorEl(null);
  };

  const selectLanguage = (language: string) => {
    setCurrentLanguage(language);
    setLanguage(language);
    handleOnClose();
  };

  return (
    <label className="dropdown">
      <div className="dd-button">{t("Language.language")}</div>
      <input
        type="checkbox"
        className="dd-input"
        id="test"
        onClick={handleOnClick}
      />
      <ul className="dd-menu">
        {languages.map(({ value, text }) => (
          <p key={value} onClick={() => selectLanguage(value)}>
            {text}
          </p>
        ))}
      </ul>
    </label>
  );
};

export default LanguagePicker;
