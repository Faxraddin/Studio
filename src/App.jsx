import { ThemeProvider } from 'styled-components';
import './App.css';
import { useRef } from 'react';
import GlobalStyles from './GlobalStyles';
import "@fontsource/kaushan-script";
import "@fontsource/sirin-stencil";
import {dark} from './Themes';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'

import Home from './sections/Home';
import { AnimatePresence } from 'framer-motion';

function App() {

  const containerRef = useRef(null);

  return (
    <>
      <GlobalStyles/>
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{smooth:true}}
          watch={[]}
          containerRef={containerRef}
        >
          <AnimatePresence>
            <main data-scroll-container ref={containerRef} className='app'>
              <Home/>
            </main>
          </AnimatePresence>
  
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  )
}

export default App
