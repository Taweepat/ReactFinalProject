import React from "react";
import Sidebar from "./Components/Sidebar";
import styled from "styled-components"
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import Cartpage from "./Pages/Cartpage";
import {BrowserRouter as Router, Switch as Switching, Route} from 'react-router-dom'
import AboutPage from "./Pages/AboutPage";
import Switch from "@material-ui/core/Switch";
import IconButton from '@material-ui/core';
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { useState , useEffect } from 'react'
import rootReducer from "./Redux/Reducers/index";
import {createStore} from 'redux'
import { Provider } from "react-redux";

const store = createStore(rootReducer);

function App() {

  const [theme,setTheme] = useState('dark-theme')
  const [checked, setChecked] = useState(false)

  const themeToggler = () =>{
    if(theme === 'light-theme'){
      setTheme('dark-theme')
      setChecked(false)
    }else{
      setTheme('light-theme')
      setChecked(true)
    }
  }

  useEffect(() => {
    document.documentElement.className = theme;
  },[theme])

  return (
    <Provider store = {store}>
    <div className="App">
     <Sidebar/>
     <MainContentStyled className="main-content">

      <div className="light-dark-mode">
        
        <div className="left-content">
            <Brightness4Icon />
          </div>
        <div className="right-content">
            <Switch
              value=""
              checked={checked}
              inputProps={{'arial-label':''}}
              size="medium"
              onClick={themeToggler}
            />
          </div>
        
        </div>

        <Switching>
          <Route path="/" exact><HomePage/></Route>
          <Route path="/about" exact><AboutPage/></Route>

          <Route path='/product' ><ProductPage /></Route>
          <Route path='/cart' ><Cartpage /></Route>
        </Switching>
     </MainContentStyled>
    </div>
    </Provider>
  );
}

const MainContentStyled = styled.main`

  prosition : relative;
  margin-left : 16.3rem;
  min-height : 100vh;

`

export default App;
