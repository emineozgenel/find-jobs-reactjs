import Header from "./components/Header/Index";
import List from "./components/List/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound/Index";
import { Switch, Route } from "react-router-dom";
import Parse from 'parse';
	
Parse.initialize(process.env.REACT_APP_APPLICATION_ID, process.env.REACT_APP_JAVASCRIPT_KEY,  process.env.REACT_APP_REST_API_Key);
Parse.serverURL = process.env.REACT_APP_SERVER_URL;

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={List} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
