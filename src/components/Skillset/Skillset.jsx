import React, { useState, useEffect } from 'react'
import Pagination from '../Pagination/Pagination'
import axios from 'axios'
import Dropdown from './Dropdown'
import Skill from './Skill'

function Skillset({ formData, setFormData, page, setPage, formTitles }) {
	const [skillOptions, setSkillOptions] = useState([])
	const [experienceInput, setExperienceInput] = useState('')
	const [skillsList, setSkillsList] = useState(formData.skills)
	const [errorMessage, setErrorMessage] = useState('')

	const [selectedOption, setSelectedOption] = useState({
		id: 0,
		title: 'Skills'
	})

	useEffect(() => {
		axios
			.get('https://bootcamp-2022.devtest.ge/api/skills')
			.then((res) => res.data)
			.then((fetchedSkills) => {
				setSkillOptions(fetchedSkills)
			})
	}, [])

	useEffect(() => {
		console.log(`useEffect formattedSkills`)
		setFormData({ ...formData, skills: skillsList })
	}, [skillsList])

	const experienceInputHandler = (e) => {
		setExperienceInput(e.target.value)
	}

	const addSkillsHandler = (e) => {
		e.preventDefault()

		if (selectedOption.id !== 0 && experienceInput.trim() !== '') {
			let container = {
				id: selectedOption.id,
				title: selectedOption.title,
				experience: parseInt(experienceInput)
			}

			if (skillsList) {
				if (!skillsList.find((skill) => skill.id === selectedOption.id)) {
					setSkillsList((prevList) => [...prevList, container])
					setErrorMessage('')
				} else {
					console.log(`Skill '${selectedOption.title}' was already added`)
					setErrorMessage(`Skill ${selectedOption.title} was already added`)
				}
			}
		} else {
			console.log(`one of the inputs is missing`)
			setErrorMessage(`One of the inputs is missing`)
		}
	}

	const removeSkillHandler = (id) => {
		let updatedList = skillsList.filter((skill) => skill.id !== id)
		console.log(`filteredToRemove`, updatedList)
		setSkillsList(updatedList)
	}

	console.log(skillOptions)
	console.log('FormData: ', formData)
	console.log(`Selected Skill:`, selectedOption)
	console.log(`ExpInput: `, experienceInput)
	console.log(`savedSkills List: `, skillsList)

	const onSubmitHandler = (e) => {
		e.preventDefault()
		if (formData.skills.length !== 0) {
			setPage((currPage) => currPage + 1)
		} else {
			setErrorMessage(`Please select at least one skill`)
		}
	}

	return (
		<form className='skills-container'>
			<Dropdown
				options={skillOptions}
				selected={selectedOption}
				setSelected={setSelectedOption}
			/>

			<input
				type='number'
				className='skills-exp-input'
				placeholder='Experience Duration in Years'
				onChange={experienceInputHandler}
				value={experienceInput}
			/>

			<button type='submit' className='skills-btn' onClick={addSkillsHandler}>
				Add Programming Language
			</button>

			{errorMessage && <label className='error-text'>{errorMessage}</label>}
			<div className='skills-wrapper'>
				{skillsList &&
					skillsList.map((skill) => (
						<Skill key={skill.id} skill={skill} onRemove={removeSkillHandler} />
					))}
			</div>
			<Pagination
				page={page}
				setPage={setPage}
				formTitles={formTitles}
				// nextPageHandler={onSubmitHandler}
			/>
		</form>
	)
}

export default Skillset
