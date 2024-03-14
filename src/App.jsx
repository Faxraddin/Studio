import { ThemeProvider } from 'styled-components';
import './App.css';
import GlobalStyles from './GlobalStyles';
import "@fontsource/kaushan-script";
import "@fontsource/sirin-stencil";
import {dark} from './Themes'

function App() {

  return (
    <>
      <GlobalStyles/>
      <ThemeProvider theme={dark}>
        <h1>bunjkml</h1>
      </ThemeProvider>
    </>
  )
}

export default App
