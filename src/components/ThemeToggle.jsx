function ThemeToggle({ dark, setDark }) {

    const toggleTheme = () => {
        const newTheme = !dark;

        setDark(newTheme);

        localStorage.setItem(
            "theme",
            newTheme ? "dark" : "light"
        );
    };

    return (
        <button
            className="btn no-hover"
            onClick={toggleTheme}
        >
            {dark ? "☀️" : "🌙"}
        </button>
    );
}

export default ThemeToggle;