import { useDarkMode } from "./darkModeProvider";


export const ToggleDarkModeButton: React.FC = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <button onClick={toggleDarkMode} className="btn-theme-drm mt-2">
            {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
        </button>
    );
};
