import React from 'react'

const ProjectsCard = (props) => {
  return (
    <div className="card col-md-6 col-lg-4 col-sm-6 mx-auto my-3 each-card" style={{overflow:'hidden',padding:'0', borderWidth:"0px"}}>
        <img src={props.pic} class="card-img-top" style={{padding:'0px'}} alt="..."></img>
        <div className="card-body my-3" style={{backgroundColor:'#000',color:'#5ff46b',margin:'0'}}>
            <div style={{fontFamily:"Montserrat"}}>
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text" style={{textAlign:"center",textJustify:"inter-word"}}>{props.description}</p>
            <a className='btn navbar-btn 'style={{textDecoration:"none",color:'',margin:'10px'}} href={props.code} target="_blank">Source Code</a>
            {props.deployedLink?<a className='btn navbar-btn 'style={{textDecoration:"none",color:'',margin:'10px'}} href={props.deployedLink} target="_blank">View Project</a>:<></>}
            </div>
        </div>
    </div>
  )
}

export default ProjectsCard
