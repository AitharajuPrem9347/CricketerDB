import React from 'react';
import './App.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { Route, BrowserRouter as Router ,  Routes} from 'react-router-dom';
import AddUser from './Users/AddUser';
import EditUser from './Users/EditUser';
import ViewUser from './Users/ViewUser';

function App() {
  return (
   <>
   <Router>
       <Navbar />
         <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route exact path='/add' element={<AddUser/>}></Route>
         <Route exact path='/edit/:id' element={<EditUser/>}></Route>
         <Route exact path='/view/:id' element={<ViewUser/>}></Route>
        </Routes>
   </Router>
   </>
  );
}

export default App;
