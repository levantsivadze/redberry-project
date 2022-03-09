import React from 'react'
import pagImg from '../utils/images/Next.svg'
import emptyCircle from '../utils/images/circle-empty.svg'
import fullCircle from '../utils/images/circle-full.svg'
import { useNavigate } from 'react-router-dom'
function Pagination({ page, setPage, formTitles, nextPageHandler }) {
	const navigate = useNavigate()

	return (
		<div className='footer'>
			<input
				type='image'
				alt='Previous Button'
				style={{ transform: 'rotate(-180deg)' }}
				src={pagImg}
				onClick={() => {
					if (page === 0) {
						navigate('/')
					}
					setPage((currPage) => currPage - 1)
				}}
			/>
			<input
				type='image'
				alt='Personal Page'
				src={page === 0 ? fullCircle : emptyCircle}
			/>
			<input
				type='image'
				alt='Personal Page'
				src={page === 1 ? fullCircle : emptyCircle}
			/>
			<input
				type='image'
				alt='Personal Page'
				src={page === 2 ? fullCircle : emptyCircle}
			/>
			<input
				type='image'
				alt='Personal Page'
				src={page === 3 ? fullCircle : emptyCircle}
			/>
			<input type='image' alt='Personal Page' src={emptyCircle} />
			<input
				type='image'
				alt='Next Button'
				src={pagImg}
				disabled={page === formTitles.length}
				onClick={
					nextPageHandler
						? nextPageHandler
						: () => setPage((currPage) => currPage + 1)
				}
			/>
		</div>
	)
}

export default Pagination
