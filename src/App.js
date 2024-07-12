import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { App1 } from "./components/App1";
import { App2 } from "./components/App2";
import { Home } from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Aldo App
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
                <a class="nav-link" href="/app1">
                  App 1
                </a>
                <a class="nav-link" href="/app2">
                  App 2
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div>
          <Routes>
            <Route path="/app1" element={<App1 />} />
            <Route path="/app2" element={<App2 />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
