import {createBrowserHistory} from "history";
import configureStore from "../redux/store";

const history = createBrowserHistory();
const store = configureStore({}, history);

export {history, store};
