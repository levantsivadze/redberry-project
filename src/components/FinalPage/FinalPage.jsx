import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useValidator from './useValidator'
import { useNavigate } from 'react-router-dom'
import ThanksPage from '../ThanksPage/ThanksPage'

function FinalPage({ formData, setFormData, page, setPage, formTitles }) {
	const { phone, had_covid, vaccinated, will_organize_devtalk } = formData
	const [isActive, setIsActive] = useState(false)
	const [formattedData, setFormattedData] = useState(formData)
	const navigate = useNavigate()

	console.log('Submit')
	console.log(`formattedData`, formattedData)

	useEffect(() => {
		if (!phone) {
			const { phone, ...cleanedData } = formData
			setFormattedData(cleanedData)
		} else if (!had_covid) {
			const { had_covid_at, ...cleanedData } = formData
			setFormattedData(cleanedData)
		} else if (!vaccinated) {
			const { vaccinated_at, ...cleanedData } = formData
			setFormattedData(cleanedData)
		} else if (!will_organize_devtalk) {
			const { devtalk_topic, ...cleanedData } = formData
			setFormattedData(cleanedData)
		}
	}, [])

	const submitHandler = (e) => {
		e.preventDefault()

		setIsActive(true)

		// axios
		// 	.post(`https://bootcamp-2022.devtest.ge/api/application/${formData}`)
		// 	.then((res) => console.log(res))
		// 	.catch((err) => console.log(err))
	}
	return (
		<>
			{!isActive ? (
				<div className='submit-page-container'>
					<button className='submit-btn' onClick={submitHandler}>
						Submit
					</button>
					<button
						className='back-btn'
						onClick={() => setPage((currPage) => currPage - 1)}>
						go back
					</button>
				</div>
			) : (
				<ThanksPage />
			)}
		</>
	)
}

export default FinalPage
