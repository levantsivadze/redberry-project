import React, { useState, useEffect } from 'react'
import 'react-dropdown/style.css'
import axios from 'axios'
import Dropdown from './Dropdown'
import Skill from './Skill'

function Skillset({ formData, setFormData }) {
	const [skillOptions, setSkillOptions] = useState([])
	const [experienceInput, setExperienceInput] = useState('')
	const [skillsList, setSkillsList] = useState([])

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
					setSkillsList([...skillsList, container])
				} else {
					console.log(`Skill ${selectedOption.title} was already added`)
				}
			}
		} else {
			console.log(`one of the input is missing`)
		}
	}

	console.log(skillOptions)
	console.log(`Selected Skill:`, selectedOption)
	console.log(`ExpInput: `, experienceInput)
	console.log(`savedSkills List: `, skillsList)
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

			{skillsList &&
				skillsList.map((skill) => (
					<Skill key={skill.id} title={skill.title} years={skill.experience} />
				))}
		</form>
	)
}

export default Skillset
