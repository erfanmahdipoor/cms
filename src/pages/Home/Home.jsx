import React from 'react'
import Featurs from '../../components/features/Featurs'
import './home.css'
import Charts from '../../components/charts/Charts'
import {xAxisData} from '../../datas'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
const Home = () => {
  console.log(xAxisData);
  // console.log(Sale);
  return (
    <div className="home">
      <Featurs/>
      <Charts  grid  title="Month Sale" data={xAxisData} dataKey="Sale"/>
      <div className="homeWidgets">
      <WidgetSm/>
      <WidgetLg/>
      </div>
    </div>
    )
}

export default Home