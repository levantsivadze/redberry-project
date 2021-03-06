import React from 'react'
import { useNavigate } from 'react-router-dom'
import rocketman from '../utils/images/rocketman.png'



function Landing() {
	const navigate = useNavigate()
	
	return (
		<div className='landing-container'>
			<div className='landing-body'>
				<h1>Welcome Rocketeer !</h1>
				<button className='questions-btn' onClick={() => navigate('form')}>
					Start Questionnaire
				</button>
				<a href='/list' className='applications-link'>
					Submitted Questions
				</a>
				<img className='rocketman-img' src={rocketman} alt='Rocketman' />
			</div>
		</div>
	)
}

export default Landing
