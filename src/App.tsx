import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/routes";
import { ThemeProvider } from "@mui/material";
import THEME from "./config/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={THEME}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
