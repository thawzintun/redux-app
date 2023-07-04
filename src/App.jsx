import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";

function App() {
    const isLogin = useSelector((state) => state.auth.isLogin);
    return (
        <>
            <NavBar isLogin={isLogin} />
            {!isLogin && <Welcome />}
            {isLogin && <Counter />}
        </>
    );
}

export default App;
