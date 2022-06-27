import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
document.getElementById("body"));

const devMode = process.env.NODE_ENV === 'development';
if (devMode && module && module.hot) {
    module.hot.accept();
}