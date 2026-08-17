import { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {

    const [dark, setDark] = useState(
        localStorage.getItem("theme") === "dark"
    );

    return (
        <div className={dark ? "app dark" : "app"}>

            <NavBar
                dark={dark}
                setDark={setDark}
            />

            <Home />

        </div>
    );
}

export default App;