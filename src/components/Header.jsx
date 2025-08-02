const Header = ({theme, setTheme}) => {
    return (
        <div className="header">
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                Theme
            </button>
            <h1>Calculator</h1>
        </div>
    )
};

export default Header;