import react from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Home from "./pages/Home";

const App = () => {
    return <div>
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
        </Switch>
        </BrowserRouter>
    </div>;
};

export default App;
