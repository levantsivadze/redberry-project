export const validateOnSubmit = (
	formData,
	errorStatus,
	setErrorStatus,
	setPage
) => {
	const { first_name, last_name, email, phone } = formData

	if (first_name.trim() === '') {
		setErrorStatus({ ...errorStatus, firstNameIsValid: false })
	} else if (last_name.trim() === '') {
		setErrorStatus({ ...errorStatus, lastNameIsValid: false })
	} else if (email.trim() === '') {
		setErrorStatus({ ...errorStatus, emailIsValid: false })
	} else setPage((currPage) => currPage + 1)
}

export const validateOnTyping = (
	validator,
	propertyName,
	errorStatus,
	setErrorStatus
) => {
	console.log(`validateOnTyping`)
	console.log(`validator`, validator)
	console.log('propertyName', propertyName)
	console.log(`errorStatus`, errorStatus)

	if (validator) {
		setErrorStatus({ ...errorStatus, [propertyName]: false })
	} else {
		setErrorStatus({ ...errorStatus, [propertyName]: true })
	}
}
