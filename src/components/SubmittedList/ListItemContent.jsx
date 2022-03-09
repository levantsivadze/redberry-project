import React from 'react'

function ListItemContent({listItem}) {

  return (
    <div className="list-item-content-container">
      <div className="personal-info-container"></div>
      <div className="covid-info-container"></div>
      <div className="skillset-info-container"></div>
      <div className="insights-info-container"></div>
    </div>
  )
}

export default ListItemContent