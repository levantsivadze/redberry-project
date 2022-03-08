import React from 'react'
import Pagination from './Pagination/Pagination'

function Insights({ formData, setFormData, page, setPage, formTitles }) {
  
	const onSubmitHandler = (e) => {
		e.preventDefault()
		setPage((currPage) => currPage + 1)
	}

	return (
		<div>
			<Pagination
				page={page}
				setPage={setPage}
				formTitles={formTitles}
				nextPageHandler={onSubmitHandler}
			/>
		</div>
	)
}

export default Insights
