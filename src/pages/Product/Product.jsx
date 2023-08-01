import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

const Product = () => {

  return (
    <div className='product'>
         <div className="producTitleContainer">
            <h1 className="productTiltle"></h1>
            <Link to="/product">
                ]<Button color="default">create</Button>
            </Link>
         </div>
  

    </div>
  )
}

export default Product