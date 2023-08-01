import React from 'react'
import './topbar.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
const Topbar = () => {
  return (
    <div className='topbar'>
  <div className='topbarWrapper'>
    <div className="topLeft">
      <span className='logo'>erfanmhdipoor💚</span>
    </div>
    <din className="topRight">
      <div className="topbarIconContainer">
              <NotificationsIcon/>
             <span className="topIconBadge">2</span>
      </div>
      <div className="topbarIconContainer">
              <LanguageIcon/>
             <span className="topIconBadge">1</span>
      </div>
      <div className="topbarIconContainer">
              <SettingsIcon/>
             <span className="topIconBadge">2</span>
      </div>
      <img src="images/1.jpg" alt="seo"  className='topAvatar' />
    </din>
  </div>
    </div>
  )
}

export default Topbar