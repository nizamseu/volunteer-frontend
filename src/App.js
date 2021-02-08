import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import EventCreate from './Componant/Admin/EventCreate';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Register from './Componant/Register/Register';
import EventTask from './Componant/Event Task/EventTask';
import { createContext, useState } from 'react';
import Auth from './Componant/Auth/Auth';
import Header from './Componant/Header/Header';
import Admin from './Componant/Admin/Admin';
import PrivateRoute from './Componant/Header/PrivateRoute';
import VolunteerList from './Componant/Admin/VolunteerList';
import MenuBar from './Componant/Header/MenuBar';
import Spinner from './Spinner/Spinner';

export const userAuth=createContext()

function App() {
const [user,setUser]=useState({
    name:'',
    email:'',
    photo:'',
})


  return (

   <div>
     <userAuth.Provider value={[user,setUser]}>
       
     <Router>
     {/* <Header></Header> */}
       <Switch>
    
      <Route path="/addevent">
      <EventCreate></EventCreate>
      </Route>


      <PrivateRoute path="/reg/:id">
          <Register></Register>
      </PrivateRoute>


      <Route path="/reg">
        <Register></Register>
      </Route>
    <PrivateRoute path="/event">
      <Header></Header>
      <EventTask></EventTask>
    </PrivateRoute>

    <Route path="/auth">
      <Auth></Auth>
    </Route>

    <Route path="/create">
      <EventCreate></EventCreate>
    </Route>

    <Route path="/admin">
      <Admin></Admin>
    </Route>


    <Route path="/list">
        <VolunteerList></VolunteerList>
    </Route>


      <Route path='/menuBar'>
        <MenuBar></MenuBar>
      </Route>

      <Route path='/sp'>
          <Spinner></Spinner>
      </Route>

      <Route exact path="/">
       <MenuBar></MenuBar>
    </Route>
     </Switch>
     </Router>
     </userAuth.Provider>
   </div>
  );
}

export default App;
