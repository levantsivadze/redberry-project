import './App.css'
import { Routes, Route } from 'react-router-dom'
import Form from './components/Form'
import Landing from './components/Landing/Landing'
function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='form' element={<Form/>}/>

			</Routes>
		</div>
	)
}

export default App
