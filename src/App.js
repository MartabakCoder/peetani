
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfileShow from "./pages/profile/ProfileShow";
import Timer from "./pages/timer/Timer";
import Login from "./pages/auth/Login";
import ProductList from "./pages/productList/ProductList";
import LayoutAuth from "./LayoutAuth";
import { createTheme, ThemeProvider } from '@mui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#427411',
      contrastText: '#fff',
    },
    secondary: {
      main: '#639B2F',
      contrastText: '#fff',
    },
    neutral: {
      main: '#F6F5F5',
      contrastText: '#393939',
    },
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
          <Route path="/logout" >
            <Login />
          </Route>
          <LayoutAuth path="/profile" component={ProfileShow} />
          <LayoutAuth exact path="/" component={Home} />
          <LayoutAuth exact path="/timer" component={Timer} />
          <LayoutAuth exact path="/history" component={ProductList} />
      </Router>
      
    </ThemeProvider>
  );
}

export default App;
