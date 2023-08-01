import React from 'react'
import { useState } from 'react'
import { products } from '../../datas'
import { DataGrid} from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import './products.css'
import { DeleteOutline } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
const UserList = () => {
  const [productsData,setProductData]=useState(products)
  const productDelet=(productId)=>{
    setProductData(productsData.filter(product=> product.id !== productId))
  }
  const navigate= useNavigate()
  console.log(navigate);
  const columns =[
    {field:"id",
      headerName:"ID",
        width:90,
        
      },
    {field:"title",
      headerName:"name",
        width:200,
      renderCell:(params)=>{
        // console.log(params);
      return <>
      <Link>
      <div className="userListUser">
        <img src={params.row.avatar} className='userListImg'/>
      {params.row.title}
      </div>
      </Link>
      </>

    }
    
      },
      {
        field:"price",
        headerName:"price",
        width:200,



      },
  
  
    
      
      {
        field:"action",
        headerName:"action",
        width:150,
        renderCell:(params)=>{
          return (
            <>
            <Link to={`/product/${params.row.id}`}>
              <button className='userListEdit'>edit</button>
            </Link> 
              <DeleteOutline className='userListDelet' onClick={()=>productDelet(params.row.id)}/>
            </>
          )
        }



      },
  ]
  return (
    <div className='userList'>
  <DataGrid 
    rows={productsData}
    columns={columns}
    pageSize={4}
    disableRowSelectionOnClick
  
  />
    



    </div>
  )
}

export default UserList