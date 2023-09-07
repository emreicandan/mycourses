import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { CourseProvider } from './Context/CourseContext'
import Courses from './components/Courses'

function App() {
  const [count, setCount] = useState(0)

  return (
<CourseProvider>
    <Courses/>
</CourseProvider>
  )
}

export default App
