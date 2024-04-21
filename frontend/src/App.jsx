import { Routes, Route } from 'react-router-dom'
import Form from './components/Form'
import List_form from './components/List_form'
import Login from './components/Login'
import Registration from './components/Registration'
import Display_form from '../src/components/pages/Display_form'

function App() {
  return (
<Routes>
  <Route path='/' element=<Login />/>
  <Route path='/registration' element=<Registration />/>
  <Route path='/list' element=<List_form />/>
  <Route path='/form' element=<Form />/>
  <Route path='/user_formdata/:form_id' element=<Display_form />/>
</Routes>
  )
}

export default App
