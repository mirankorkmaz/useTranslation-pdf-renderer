import { useEffect, useState } from "react";
import { getLanguage, i18nLoading, setLanguage } from "../../i18n";

export const LanguagePicker = () => {
    const languages = [
        { value: "en", text: "English" },
        { value: "sv", text: "Svenska" },
    ];
    const [anchorEl, setAnchorEl] = useState(null);
    const [currentLanguage, setCurrentLanguage] = useState("");

    useEffect(() => {
        if (currentLanguage === "") {
            i18nLoading.then(() => {
                setCurrentLanguage(getLanguage() || "sv");
            });
        }
    }, [currentLanguage]);

    const handleOnClick = (event: any) => {
        setAnchorEl(event.currentTarget)
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
        <div>
            <button aria-haspopup="true" onClick={handleOnClick}>{currentLanguage}</button>
            <div>
                {languages.map(({ value, text }) => (
                    <p key={value} onClick={() => selectLanguage(value)}>
                        {text}
                    </p>
                ))}
            </div>
        </div>
    )
};
