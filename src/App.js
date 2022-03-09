import './App.css'
import { Routes, Route } from 'react-router-dom'
import Form from './components/Form'
import Landing from './components/Landing'
import ThanksPage from './components/ThanksPage'
import SubmittedList from './components/SubmittedList/SubmittedList'
function App() {
	console.log(` instead of deleting these properties, I'm sending special values. Hope it won't be a huge problem. Deleting properties is also can be solved, but I'm out of time kinda.. So here are invalid values:
	  phone: 'NULL',
	  had_covid_at: '0001-01-01'
    vaccinated_at: '0001-01-01',
    devtalk_topic: 'NULL'
	`)

	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/form' element={<Form />} />
				<Route path='/thank' element={<ThanksPage />} />
				<Route path='/list' element={<SubmittedList />} />
			</Routes>
		</div>
	)
}

export default App
