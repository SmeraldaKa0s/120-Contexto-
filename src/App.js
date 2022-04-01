import './App.scss';
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Context from "./context/Context"
import { useState } from 'react';


const App = () => {
  const [user, setUser] = useState({})
  const [theme, setTheme] = useState({})
  const [languaje, setLanguage] = useState("es")


  const context = {
    user: user, 
    setUser: setUser,
    theme:{
  
    },
    language: languaje,
    setLanguage: setLanguage 
  
  }
  return (
    <div>
     <Context.Provider value={context}> 
     <Nav />
     <Main />
     <Footer />
     </Context.Provider>
    </div>
  );
}

export default App;
