import React, { useState } from 'react'
import axios from 'axios'
import ThanksPage from './ThanksPage'

function FinalPage({ formData, setPage }) {
	const [isActive, setIsActive] = useState(false)

	const submitHandler = (e) => {
		e.preventDefault()

		axios
			.post(`https://bootcamp-2022.devtest.ge/api/application/`, formData)
			.then((res) => console.log(res))
			.catch((err) => console.log(err))

			setIsActive(true)
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
