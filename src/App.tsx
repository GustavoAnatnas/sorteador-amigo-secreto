import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Forms from "./components/Forms/Forms";
import { Config } from "./pages/Config";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
                <Route path='/' element={Config}/>
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </div>
  );
}

export default App;
