import React from 'react'
import pagImg from './images/Next.svg'

function Pagination({page, setPage, formTitles}) {
	return (
		<div>
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
	)
}

export default Pagination
