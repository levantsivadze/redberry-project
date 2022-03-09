import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Form from './components/Form'
import Landing from './components/Landing'
import ThanksPage from './components/ThanksPage'
import SubmittedList from './components/SubmittedList/SubmittedList'
import Covid from './components/Covid'
function App() {
	const [thankPageIsActive, setThankPageIsActive] = useState(false)

	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/form' element={<Form />} />
				<Route  path='/thank' element={<ThanksPage />} />
				<Route  path='/list' element={<SubmittedList />} />
			</Routes>
		</div>
	)
}

export default App
