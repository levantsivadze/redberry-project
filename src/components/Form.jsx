import React, { useState } from 'react'
import { resources } from '../constants'
import Covid from './Covid/Covid'
import pagImg from './images/Next.svg'
import Insights from './Insights'
import Pagination from './Pagination/Pagination'
import Personal from './Personal/Personal'
import Skillset from './Skillset/Skillset'

function Form() {
	const [page, setPage] = useState(0)
	const [formData, setFormData] = useState({
		first_name: '',
		last_name: '',
		email: '',
		phone: '',
		skills: [],
		work_preference: 'from_home',
		had_covid: false,
		had_covid_at: '',
		vaccinated: false,
		vaccinated_at: ''
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

	console.log(formData)
	const PageDisplay = () => {
		if (page === 0) {
			return (
				<Personal
					formData={formData}
					setFormData={setFormData}
					page={page}
					setPage={setPage}
					formTitles={formTitles}
				/>
			)
		} else if (page === 1) {
			return (
				<Skillset
					formData={formData}
					setFormData={setFormData}
					page={page}
					setPage={setPage}
					formTitles={formTitles}
				/>
			)
		} else if (page === 2) {
			return (
				<Covid
					formData={formData}
					setFormData={setFormData}
					page={page}
					setPage={setPage}
					formTitles={formTitles}
				/>
			)
		} else {
			return (
				<Insights
					formData={formData}
					setFormData={setFormData}
					page={page}
					setPage={setPage}
					formTitles={formTitles}
				/>
			)
		}
	}

	return (
		<div className='form'>
			<div className='form-container'>
				<div className='header'>
					<h1>{formTitles[page]}</h1>
				</div>
				<div className='body'>{PageDisplay()}</div>
				{/* <Pagination page={page} setPage={setPage} formTitles={formTitles} /> */}
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
