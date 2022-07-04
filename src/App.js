
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar';
import TodoList from './Pages/TodoList'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Footer from './Components/Footer';
import Register from './Pages/Register';
import UpdateToDo from './Pages/UpdateToDo';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/'> <Home/> </Route>
        <Route exact path='/todo-list'> <TodoList /></Route>
        <Route exact path='/update/:id'> <UpdateToDo/></Route>
        <Route exact path='/login'> <Login/></Route>
        <Route exact path='/register'> <Register/></Route>
      </Switch>
      
      <Footer/>
    </Router>
    </>
  );
}

export default App;
