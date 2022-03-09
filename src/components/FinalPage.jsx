import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import ThanksPage from './ThanksPage'

function FinalPage({ formData, setFormData, page, setPage, formTitles }) {
	const { phone, had_covid, vaccinated, will_organize_devtalk } = formData
	const [isActive, setIsActive] = useState(false)
	const [formattedData, setFormattedData] = useState(formData)
	const navigate = useNavigate()

	console.log('Submit')
	console.log(`formattedData`, formattedData)

	useEffect(() => {
		let formattedSkills = formData.skills.map((skill) => ({
			id: skill.id,
			experience: skill.experience
		}))
		setFormattedData({ ...formData, skills: formattedSkills })

	}, [])

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
