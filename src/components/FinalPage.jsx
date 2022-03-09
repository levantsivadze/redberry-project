import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ThanksPage from './ThanksPage'

function FinalPage({ formData, setFormData, page, setPage, formTitles }) {
	const { phone, had_covid, vaccinated, will_organize_devtalk } = formData
	const [isActive, setIsActive] = useState(false)
	const [formattedData, setFormattedData] = useState(formData)

	console.log('Submit')
	console.log(`formattedData`, formattedData)

	

	const submitHandler = (e) => {
		e.preventDefault()

		setIsActive(true)

		axios
			.post(`https://bootcamp-2022.devtest.ge/api/application/`, formattedData)
			.then((res) => console.log(res))
			.catch((err) => console.log(err))
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
