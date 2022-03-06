import React, { useState, useEffect } from 'react'
import 'react-dropdown/style.css'
import axios from 'axios'
import Dropdown from './Dropdown'

function Skillset({ formData, setFormData }) {
	const [skills, setSkills] = useState([])
	const [selectedSkill, setSelectedSkill] = useState({ id: 0, title: 'Skills' })

	useEffect(() => {
		axios
			.get('https://bootcamp-2022.devtest.ge/api/skills')
			.then((res) => res.data)
			.then((fetchedSkills) => {
				setSkills(fetchedSkills)
			})
	}, [])
	console.log(skills)
  console.log(`Selected Skill:`, selectedSkill);
	return (
		<>
			<Dropdown
				options={skills}
				selected={selectedSkill}
				setSelected={setSelectedSkill}
			/>

      <input type="number" className="skills-exp-input" placeholder='Experience Duration in Years' />
		</>
	)
}

export default Skillset
