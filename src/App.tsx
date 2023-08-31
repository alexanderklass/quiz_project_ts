import {Route, Routes} from "react-router-dom";
import Start from "./pages/start.tsx";
import Host from "./pages/host.tsx";


function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Start/>}/>
                <Route path={"/host"} element={<Host/>}/>
            </Routes>
        </>
    )
}

export default App
    