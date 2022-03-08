import React, { useState } from 'react'
import Pagination from './Pagination/Pagination'

function Devtalk({ formData, setFormData, page, setPage, formTitles }) {
	const { will_organize_devtalk, devtalk_topic, something_special } = formData

	const [errorMessage, setErrorMessage] = useState('')

	console.log('DevTalk')
	console.log(`formData`, formData)

	const isDevTalkSelected = (value) => will_organize_devtalk === value

	const topicChangeHander = (e) => {
		setFormData({ ...formData, devtalk_topic: e.target.value })
	}

	const specialChangeHander = (e) => {
		setFormData({ ...formData, something_special: e.target.value })
	}

	const onSubmitHandler = (e) => {
		e.preventDefault()
		setPage((currPage) => currPage + 1)
	}

	return (
		<>
			<div className='devtalk-container'>
				<div className='devtalk-question-container'>
					<span>
						Would you attend Devtalks and maybe also organize your own?
					</span>
					<label>
						<input
							type='radio'
							name='yes'
							id='devtalk-yes'
							value={true}
							checked={isDevTalkSelected(true)}
							onChange={() =>
								setFormData({ ...formData, will_organize_devtalk: true })
							}
						/>
						Yes
					</label>
					<label>
						<input
							type='radio'
							name='yes'
							id='devtalk-yes'
							value={false}
							checked={isDevTalkSelected(false)}
							onChange={() =>
								setFormData({ ...formData, will_organize_devtalk: false })
							}
						/>
						No
					</label>
				</div>
				{will_organize_devtalk && (
					<div className='devtalk-question-container'>
						<span>What would you speak about at Devtalk?</span>
						<textarea
							name='about'
							id='devtalk-topic'
							value={devtalk_topic}
							onChange={topicChangeHander}
							cols='30'
							rows='20'
							placeholder='I would...'
						/>
					</div>
				)}
				<div className='devtalk-question-container'>
					<span>Tell us something special</span>
					<textarea
						name='special'
						id='devtalk-special'
						value={something_special}
						onChange={specialChangeHander}
						cols='30'
						rows='10'></textarea>
				</div>
			</div>
			<Pagination
				page={page}
				setPage={setPage}
				formTitles={formTitles}
				nextPageHandler={onSubmitHandler}
			/>
		</>
	)
}

export default Devtalk
