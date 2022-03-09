import React, { useState, useEffect } from 'react'
import pagImg from '../utils/images/Next.svg'
import emptyCircle from '../utils/images/circle-empty.svg'
import fullCircle from '../utils/images/circle-full.svg'
import { useNavigate } from 'react-router-dom'

function Pagination({ page, setPage, formTitles, nextPageHandler }) {
	const navigate = useNavigate()
	const [skillsIsActive, setSkillsIsActive] = useState(false)
	const [covidIsActive, setCovidIsActive] = useState(false)
	const [devtalkIsActive, setDevtalkIsActive] = useState(false)

	useEffect(() => {
		if (page === 1) setSkillsIsActive(true)
		if (page === 2) {
			setSkillsIsActive(true)
			setCovidIsActive(true)
		}
		if (page === 3) {
			setSkillsIsActive(true)
			setCovidIsActive(true)
			setDevtalkIsActive(true)
		}
	}, [])

	 // check which button was clicked and navigate to that page accordingly
	const onCircleClick = (e) => {
		if (e.target.id === '0') setPage(0)
		if (e.target.id === '1' && skillsIsActive) setPage(1)
		if (e.target.id === '2' && covidIsActive) setPage(2)
		if (e.target.id === '3' && devtalkIsActive) setPage(3)
	}

	return (
		<div className='footer'>
			<input
				type='image'
				alt='Previous Button'
				style={{ transform: 'rotate(-180deg)' }}
				src={pagImg}
				onClick={() => {
					if (page === 0) {
						navigate('/')
					}
					setPage((currPage) => currPage - 1)
				}}
			/>
			<input
				id='0'
				type='image'
				alt='Personal Page'
				src={fullCircle}
				onClick={onCircleClick}
			/>
			<input
				id='1'
				type='image'
				alt='Skills Page'
				src={skillsIsActive ? fullCircle : emptyCircle}
				onClick={onCircleClick}
			/>
			<input
				id='2'
				type='image'
				alt='Covid Page'
				src={covidIsActive ? fullCircle : emptyCircle}
				onClick={onCircleClick}
			/>
			<input
				id='3'
				type='image'
				alt='DevTalk Page'
				src={devtalkIsActive ? fullCircle : emptyCircle}
				onClick={onCircleClick}
			/>
			<input
				type='image'
				alt='Next Button'
				src={pagImg}
				disabled={page === formTitles.length}
				onClick={nextPageHandler}
			/>
		</div>
	)
}

export default Pagination
