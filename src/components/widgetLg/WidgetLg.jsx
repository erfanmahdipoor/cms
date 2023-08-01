import React from 'react'
import './widgetLg.css'
import { transaction } from '../../datas'
const WidgetLg = () => {
    const Button =({type})=>{
        return <button className={'widgetLgButton'+type}>{type}</button>
    }
  return (
    <div className='widgetLg'>
 <h3 className='widgetLgTitle'>lastest transaction</h3>
 <table className="widgetLgTable">
    <tr className="widgetLgTr">
        <th className="widgetLgTh">customer</th>
        <th className="widgetLgTh">date</th>
        <th className="widgetLgTh">amount</th>
        <th className="widgetLgTh">status</th>
    </tr>
    {transaction.map((action)=>{
    return(
    <tr key={action.id}  className="widgetLgTr">
    <td className="widgetLgUser">
        <img src={action.img} alt="user" className='widgetLgImg'/>
        <apan className="widgetLgName">{action.customer}</apan>
    </td>
    <td className='widgetLgDate'>{action.date}</td>
    <td className='widgetLgAmount'>{action.amount}</td>
    <td className='widgetLgStauts'>
        <Button type={action.status}/>
    </td>
</tr>
)


    })}
    
 </table>


    </div>
  )
}

export default WidgetLg