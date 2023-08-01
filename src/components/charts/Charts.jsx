import React from 'react'
import { ResponsiveContainer,
  LineChart,
  Line, 
  XAxis,
  CartesianGrid,
  Tooltip

} from 'recharts'
import './charts.css'
const Charts = ({title,data,dataKey,grid}) => {
  console.log(data);
  console.log(dataKey);
  return (
   <div className="charts">
     <h3 className="chartTitle">{title}</h3>
         <ResponsiveContainer width="100%" aspect={4} >
            <LineChart data={data}>
                <XAxis dataKey="name" stroke='#5550bd'/>
                <Line type="monotone" datakey={dataKey} stroke='#5550bd' />
                <Tooltip />
               {grid && <CartesianGrid strok="#e0dfdf" strokeDasharray="10" /> }
            </LineChart>
        </ResponsiveContainer>
      
   </div>
  )
}

export default Charts