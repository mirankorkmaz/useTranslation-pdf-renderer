import { useTranslation } from "react-i18next"

export const LandingPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            <p>
                {t("LandingPage.hi")}
            </p>
        </div>
    )
}