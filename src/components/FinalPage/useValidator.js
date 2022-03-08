import { useState } from 'react'

//remove all empty values that API can't accept

function useValidator(formData) {
	const { phone, had_covid, vaccinated, will_organize_devtalk } = formData
	
	const [formattedData, setFormattedData] = useState(formData)

	if (!phone) {
		const { phone, ...cleanedData } = formData
		setFormattedData(cleanedData)
	}
	if (!had_covid) {
		const { had_covid_at, ...cleanedData } = formData
		setFormattedData(cleanedData)
	}
	if (!vaccinated) {
		const { vaccinated_at, ...cleanedData } = formData
		setFormattedData(cleanedData)
	}
	if (!will_organize_devtalk) {
		const { devtalk_topic, ...cleanedData } = formData
		setFormattedData(cleanedData)
	}

	const manageSkills = () => {
		let formattedSkills = formData.skills.map((skill) => ({
			id: skill.id,
			experience: skill.experience
		}))
		setFormattedData({ ...formData, skills: formattedSkills })
	}

	return { formattedData, manageSkills }
}

export default useValidator
