import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Config } from "./pages/Config/Config";
import { Sort } from "./pages/Sort/Sort";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
                <Route path='/' element={<Config />}/>
                <Route path='/sorteio' element={<Sort />}/>
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </div>
  );
}

export default App;
