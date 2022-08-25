import React from "react";
import { Chat } from "./features/chat/Chat";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      paper: '#37464f',
    },
    text: {
      primary: '#fff',
      secondary: '#ff5722',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      main: '#009688',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Chat />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
