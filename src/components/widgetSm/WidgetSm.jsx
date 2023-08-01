import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import {newMembers} from './../../datas'
import './widgetSm.css'
const WidgetSm = () => {
console.log(newMembers);

  return (
    <div className='widgetSm'>
   <span className="widgetTitle">new join member</span>
   <ul className="widgetSmList">
    {newMembers.map((user)=>{
    
   return (<li key={user.id} className="widgetSmListItem">
    <img src={user.img}alt="UserPic" className="widgetImg" />
    <div className="widgetSmUser">
        <span className="widgetSmUserName">{user.userName}</span>
        <span className="widgetSmUserTitle">{user.title}</span>
    </div>
    <button className='widgetSmBtn'>
        <VisibilityIcon className='widgetSmIcone'/>
    </button>
   </li>)
    
    
    })}
   
   
   </ul>
    </div>
  )
}

export default WidgetSm