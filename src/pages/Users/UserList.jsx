import React from 'react'
import { useState } from 'react'
import { userRows } from '../../datas'
import { DataGrid} from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import './userlist.css'
import { DeleteOutline } from '@mui/icons-material';
const UserList = () => {
  const [userData,setUserData]=useState(userRows)
  const userDelet=(userId)=>{
    setUserData(userData.filter(user=> user.id !== userId))
  }
  const columns =[
    {field:"id",
      headerName:"ID",
        width:90,
        
      },
    {field:"userName",
      headerName:"User",
        width:200,
      renderCell:(params)=>{
        console.log(params);
      return <>
      <Link>
      <div className="userListUser">
        <img src={params.row.avatar} className='userListImg'/>
      {params.row.userName}
      </div>
      </Link>
      </>

    }
    
      },
      {
        field:"email",
        headerName:"email",
        width:200,



      },
  
      {
        field:"status",
        headerName:"status",
        width:200,



      },
      {
        field:"transaction",
        headerName:"transaction",
        width:160,
        
        
        
      },
      
      {
        field:"action",
        headerName:"action",
        width:150,
        renderCell:(params)=>{
          return (
            <>
            <Link to={`/user/${params.row.id}`}>
              <button className='userListEdit'>edit</button>
            </Link> 
              <DeleteOutline className='userListDelet' onClick={()=>userDelet(params.row.id)}/>
            </>
          )
        }



      },
  ]
  return (
    <div className='userList'>
  <DataGrid 
    rows={userData}
    columns={columns}
    pageSize={4}
    disableRowSelectionOnClick
  
  />
    



    </div>
  )
}

export default UserList