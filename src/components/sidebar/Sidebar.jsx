import React from 'react'
import './sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BarChartIcon from '@mui/icons-material/BarChart';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MessageIcon from '@mui/icons-material/Message';
import ReportIcon from '@mui/icons-material/Report';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <>
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className='link'>
            <li className="sidebarListItem active">
              <LineStyleIcon className='sidebarIcon'/>
              Home
            </li>
            </Link>
           
            <li className="sidebarListItem">
              <TimelineIcon className='sidebarIcon'/>
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon className='sidebarIcon'/>
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick menu</h3>
          <ul className="sidebarList">
            <Link to='/users' className='link' >
            <li className="sidebarListItem active">
              <PermIdentityIcon className='sidebarIcon'/>
              Users
            </li>
            </Link>
            <Link to="/newUser" className='link'>

            <li className="sidebarListItem">
              <AddBusinessIcon className='sidebarIcon'/>
              New user
            </li>
            </Link> 
            <Link to="/products" className='link'>
                 <li className="sidebarListItem">
              <AttachMoneyIcon className='sidebarIcon'/>
              
              Products
            </li>
            </Link>
            <li className="sidebarListItem">
              <BarChartIcon className='sidebarIcon'/>
              Transaction
            </li>
            <li className="sidebarListItem">
              <MailOutlineIcon className='sidebarIcon'/>
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">notification</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <DynamicFeedIcon className='sidebarIcon'/>
              Mail
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutlineIcon className='sidebarIcon'/>
              Feedback
            </li>
            <li className="sidebarListItem">
              <MessageIcon className='sidebarIcon'/>
              Messages
            </li>
           
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <MessageIcon className='sidebarIcon'/>
              Manage
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className='sidebarIcon'/>
              Analyties
            </li>
            <li className="sidebarListItem">
              <ReportIcon className='sidebarIcon'/>
              Reports
            </li>
           
          </ul>
        </div>
      </div>
    </div>
    
    
    </>
  )
}

export default Sidebar