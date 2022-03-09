import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function ThanksPage() {
	const navigate = useNavigate()
	setTimeout(() => {
		navigate('../')
	}, 3000)

	return (
		<div className='thanks-page-container'>
			<p>Thanks for Joining 😊</p>
		</div>
	)
}

export default ThanksPage
