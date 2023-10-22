import React from 'react'

const AchievementCard = (props) => {
  return (
    <div className="card col-md-6 col-lg-3 col-sm-6 mx-auto my-3 each-card" style={{overflow:'hidden'}}>
        <div className="card-body my-3" style={{backgroundColor:'#012030',color:'#5ff46b'}}>
            <div style={{fontFamily:"Montserrat"}}>
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text" style={{textAlign:"justify",textJustify:"inter-word"}}>{props.description}</p>
            <p className="card-text" style={{fontSize:"10px"}}>{props.date}</p>
            </div>
        </div>
    </div>
  )
}

export default AchievementCard
