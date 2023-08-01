import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './feature.css'
const Featurs = () => {
  return (
<div className='features'>
    <div className="featureItem">
       <span className="featureTitle">Revanue</span>
       <div className="featureContainer">
          <span className="featureMoney">$2,415</span>
          <span className="featureRate">
            -11,4 <ArrowDownwardIcon className='featureIcon negative'/>
          </span>
    </div>
    <span className='featureSub'>compared to lasy month</span>
  </div>
    <div className="featureItem">
       <span className="featureTitle">sales</span>
       <div className="featureContainer">
          <span className="featureMoney">$2,415</span>
          <span className="featureRate">
            -1,4 <ArrowDownwardIcon className='featureIcon negative'/>
          </span>
    </div>
    <span className='featureSub'>compared to lasy month</span>
  </div>
    <div className="featureItem">
       <span className="featureTitle">cost</span>
       <div className="featureContainer">
          <span className="featureMoney">$2,415</span>
          <span className="featureRate">
            +2,4 <ArrowUpwardIcon className='featureIcon'/>
          </span>
    </div>
    <span className='featureSub'>compared to lasy month</span>
  </div>
</div>
  )
}

export default Featurs