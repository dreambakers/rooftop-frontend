// import Signup from './components/Auth/Signin/Signin'
// import Login from './components/Auth/Signup/Signup'
// import Event from './components/Event/Event'

// function App() {
//   return (
//     <div className="App">
//       {/* <Login /> */}
//       {/* <Signup /> */}
//       <Event />
//     </div>
//   );
// }

// export default App;

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import routes, { renderRoutes } from "./Routes";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FAAF31",
    },
    secondary: {
      main: "#FFFFFF",
    },
    typography: {
      "fontFamily": `"EuclidCircularB", sans-serif`,
      "fontWeightRegular": 400, 
      "fontWeightBold": 900
    }
  },
});

function App() {
  const history = createBrowserHistory();
  return (
      <ThemeProvider theme={theme}>
        <Router history={history}>{renderRoutes(routes)}</Router>
      </ThemeProvider>
  );
}

export default App;
