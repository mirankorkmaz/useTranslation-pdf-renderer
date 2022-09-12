import './App.css';
import { LandingPage } from './components/landing-page/LandingPage';
import { LanguagePicker } from './components/language/LanguagePicker';

const App = () => {

    return (
        <>
            <LanguagePicker />
            <LandingPage />
        </>
    )
};

export default App;
