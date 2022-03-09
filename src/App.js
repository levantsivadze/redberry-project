import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Form from './components/Form'
import Landing from './components/Landing'
import ThanksPage from './components/ThanksPage'
function App() {
		const [thankPageIsActive, setThankPageIsActive] = useState(false)

	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/form' element={<Form/>}/>
				<Route exact path='/thank' element={<ThanksPage/>}/>

			</Routes>
		</div>
	)
}

export default App
