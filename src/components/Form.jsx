import React, { useState } from 'react'
import { resources } from '../constants'
import Covid from './Covid/Covid'
import pagImg from './images/Next.svg'
import Insights from './Insights'
import Personal from './Personal/Personal'
import Skillset from './Skillset/Skillset'

function Form() {
	const [page, setPage] = useState(0)
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: '',
		skills:[]
	})

	const formTitles = [
		resources.PERSONAL.FORM_HEADING,
		resources.SKILLSET.FORM_HEADING,
		resources.COVID.FORM_HEADING,
		resources.INSIGHTS.FORM_HEADING
	]

	const aboutTitles = [
		resources.PERSONAL.ABOUT_HEADING,
		resources.SKILLSET.ABOUT_HEADING,
		resources.COVID.ABOUT_HEADING,
		resources.INSIGHTS.ABOUT_HEADING
	]
	const aboutDescription = [
		resources.PERSONAL.ABOUT_DESCRIPTION,
		resources.SKILLSET.ABOUT_DESCRIPTION,
		resources.COVID.ABOUT_DESCRIPTION,
		resources.INSIGHTS.ABOUT_DESCRIPTION
	]

	console.log(formData);
	const PageDisplay = () => {
		if (page === 0) {
			return <Personal formData={formData} setFormData={setFormData}/>
		} else if (page === 1) {
			return <Skillset formData={formData} setFormData={setFormData}/>
		} else if (page === 2) {
			return <Covid formData={formData} setFormData={setFormData}/>
		} else {
			return <Insights />
		}
	}

	return (
		<div className='form'>
			<div className='form-container'>
				<div className='header'>
					<h1>{formTitles[page]}</h1>
				</div>
				<div className='body'>{PageDisplay()}</div>
				<div className='footer'>
					<input
						type='image'
						alt='Previous Button'
						style={{ transform: 'rotate(-180deg)' }}
						src={pagImg}
						disabled={page === 0}
						onClick={() => setPage((currPage) => currPage - 1)}
					/>
					<input
						type='image'
						alt='Next Button'
						src={pagImg}
						disabled={page === formTitles.length - 1}
						onClick={() => setPage((currPage) => currPage + 1)}
					/>
				</div>
			</div>
			<div className='about'>
				<div className='about-container'>
					<h1>{aboutTitles[page]}</h1>
					<p>{aboutDescription[page]}</p>
				</div>
			</div>
		</div>
	)
}

export default Form
