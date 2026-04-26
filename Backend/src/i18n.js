import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                marketplace: "Marketplace",
                dashboard: "Dashboard",
                about: "About",
                signup: "Signup"
            }
        },
        hi: {
            translation: {
                marketplace: "बाज़ार",
                dashboard: "डैशबोर्ड",
                about: "हमारे बारे में",
                signup: "साइन अप"
            }
        }
    },
    lng: localStorage.getItem("lang") || "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    }
});

export default i18n;