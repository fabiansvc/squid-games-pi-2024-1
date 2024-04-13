import { BrowserRouter, Route, Routes } from "react-router-dom";
import Level1 from "../pages/level1/Level1";

export default function RoutesSquidGames() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Level1 />} />
            </Routes>
        </BrowserRouter>
    )
}