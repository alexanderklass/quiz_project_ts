import {Route, Routes} from "react-router-dom";
import Start from "./pages/start.tsx";
import Host from "./pages/host.tsx";
import Game from "./pages/game.tsx";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Start/>}/>
                <Route path={"/host/:lobby_code"} element={<Host/>}/>
                <Route path={"/game/:lobby_code"} element={<Game/>}/>
            </Routes>
        </>
    )
}

export default App
    