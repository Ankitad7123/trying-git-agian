import { useState } from 'react'
import React  from 'react'
import Navbar from '../Components/Navbar'
import './Fundraiser.css'

function Fundraiser() {
  const [minimize , setMinimize] = useState(false)
  const [raised, setRaised] = useState(290);
  const goal = 500
  const raisedPercentage = (raised / goal) * 100;
  const remainingPercentage = 100 - raisedPercentage;
  return (
    <div>
        <Navbar/>
       <div className='fund'>
       <div className='fund-sidebar' style={{width:minimize?"5vw":"15vw" }}>
        <div className='category'>
        <img style={{width:minimize?"50px":"30px" }} src='https://t4.ftcdn.net/jpg/03/85/95/63/360_F_385956366_Zih7xDcSLqDxiJRYUfG5ZHNoFCSLMRjm.jpg' alt='cat'/>
        <h3  style={{display:minimize?"none":""}}>Categories</h3>
        
        </div>
        <hr/>
    <div className='f1btn' >
    <img style={{width:minimize?"50px":"30px" }} src='https://static-00.iconduck.com/assets.00/medical-symbol-icon-1024x1024-ejtcncn0.png' alt='mediacl'/>
    <button  style={{display:minimize?"none":""}}className='fbtn'>Medical</button>

    </div>
       <div className="f1btn">
        <img style={{width:minimize?"50px":"30px" }} src='https://classroomclipart.com/image/static7/preview2/illustration-of-science-and-education-symbols-icons-clipart-55040.jpg' alt='edu'/>
         <button  style={{display:minimize?"none":""}} className='fbtn'>Eduction</button>
         </div>
       <div className="f1btn"> 
       <img style={{width:minimize?"50px":"30px" }} src='https://www.pngitem.com/pimgs/m/197-1979886_images-transparent-food-symbol-png-png-download.png' alt='edu'/>
       <button   style={{display:minimize?"none":""}} className='fbtn'>Food</button>
       </div>
       <div className="f1btn">
       <img  style={{width:minimize?"50px":"30px" }} src='https://globalsymbols.com/uploads/production/image/imagefile/3655/13_3655_e6a460ab-448b-490f-bcad-05a0705f111f.svg' alt='edu'/>
         <button   style={{display:minimize?"none":""}}className='fbtn'>Cloths</button>
         </div>
       <div className="f1btn" style={{gap:"15px"}}>  
       <img style={{width:minimize?"50px":"30px" }} src='https://img.freepik.com/free-vector/green-leaf-recycle-sign_78370-845.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1711411200&semt=ais' alt='edu'/>
          <button   style={{display:minimize?"none":""}}className='fbtn'>Enivorment</button>
          </div>
        <div className="f1btn">
        <img style={{width:minimize?"50px":"30px" }} src='https://cdn-icons-png.flaticon.com/128/722/722353.png' alt='edu'/>
               <button  style={{display:minimize?"none":""}} className='fbtn'>Others</button>
               </div>
        <button onClick={()=>{setMinimize(minimize=>!minimize)}} style={{backgroundImage:minimize?"url(https://www.freeiconspng.com/uploads/arrow-icon--myiconfinder-23.png)":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTesrDH4a-wiZIORdQTA2BC93Uj_WHCBf0gB9eKJnCjhHmsMw9dhkWM7p2KRLnzSlqBHrg&usqp=CAU)" , backgroundRepeat:"no-repeat" , height:"35px" , width:"35px" , backgroundPosition:"center" , backgroundSize:"25px" , borderRadius:"50%" , position:"absolute" , left:minimize?"100px":"205px" , top:"385px" , backgroundColor:"rgb(239, 238, 238)" , mixBlendMode:"darken" }}>
       
        </button>

       </div>
        <div className='fundCard' style={{flex:minimize?"95vw":"80vw"}} >
        <div class="card">
        <img src="https://www.childfund.org.au/wp-content/uploads/2019/08/FB-Fundraiser-770x560-760x550.jpg" alt="Fundraiser"  style={{width:"20vw" , borderRadius:"10px"}}/>
       <div class="container">
       <div><h2><b>Fundraiser Title</b></h2></div>
    <p >Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero non mauris ullamcorper, eu consequat odio consequat.</p>
   
   <div >
   <h4 style={{color:"red"}}>Goal: $1000</h4>
    
    <div style={{ height: '20px', backgroundColor: '#f0f0f0', borderRadius: '5px', marginBottom: '10px' , marginTop:"10px" }}>
          <div style={{ height: '100%', width: `${raisedPercentage}%`, backgroundColor: '#4caf50', borderRadius: '5px' , color:"white" , fontFamily:"monospace" }}>raised {raised}</div>
          <div style={{ height: '100%', width: `${remainingPercentage}%`, backgroundColor: 'crimson', borderRadius: '5px' , color:"white" , fontFamily:"monospace"  }}>remaining {goal-raised}</div>
        </div>
   </div>
  </div>
        </div>
        </div>

       </div>
    </div>
  )
}

export default Fundraiser