import { Login } from './Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Signup } from './Signup'
import UserList from './UserList'

function App() {

  return (
    <BrowserRouter>
     <Routes>
     <Route path='/register' element={<Signup/>}> </Route>
       <Route path='/login' element={<Login/>}/>
       <Route path='/home' element={<UserList/>}/>
       
     </Routes>
    </BrowserRouter>
     )
}

export default App
