import { useState, useEffect } from 'react'
import ListItem from './ListItem'
import { Token } from '../../constants'
import axios from 'axios'
import ListItemContent from './ListItemContent'

function SubmittedList() {
	const [dataList, setDataList] = useState([])

	useEffect(() => {
		axios
			.get(`https://bootcamp-2022.devtest.ge/api/applications?token=${Token}`)
			.then((res) => res.data)
			.then((submittedData) => setDataList(submittedData))
	}, [])
	console.log(`dataList`, dataList)

	return (
		<div className='list-page-container'>
			<h1>Submitted Applications</h1>
			<div className='list-container'>
				<ul>
					{dataList.length !== 0 &&
						dataList.map((dataItem, index) => (
							<ListItem key={index} index={index + 1} itemData={dataItem} />
						))}
				</ul>
			</div>
			{/* {dataList.length !== 0 && <ListItemContent itemData={dataList[1]} />} */}
		</div>
	)
}

export default SubmittedList
