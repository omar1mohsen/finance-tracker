
// ! ----------------------------- imports start ---------------------------------- //
import Router from "./routes/Routes"
import { Provider } from "react-redux";
import store from "store";

// ! ----------------------------- imports css ---------------------------------- //
import "./App.scss";
// ! ----------------------------- imports end ---------------------------------- //


function App() {
  return (
      <Provider store={store}>
        <Router />
      </Provider>
  )
}

export default App
