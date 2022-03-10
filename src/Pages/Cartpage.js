import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import { MainLayout , InnerLayout } from '../styles/Layout'
import { useSelector } from 'react-redux'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Cartpage = () => {
    const cart = useSelector((state)=> state.cartReducer.cart)
  return (
    <>
    <MainLayout>
      <InnerLayout>
       <Title title={'Cart'} span={'Cart'} />
      </InnerLayout>
      
        <TableContainer component={Paper} sx={{width:'95%' , backgroundColor:'#D3D3D3' , marginLeft:5}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    
                 
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>ProductID</TableCell>
                <TableCell>ProductName</TableCell>
                <TableCell>ProductPrice</TableCell>
                <TableCell>qty</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {

                cart.map((c, index) => {
                    return (
                        <TableRow key={c.id}>
                            <TableCell>{++index}</TableCell>
                            <TableCell>{c.id}</TableCell>
                            <TableCell>{c.name}</TableCell>
                            <TableCell>{c.price}</TableCell>
                            <TableCell>{c.qty}</TableCell>
                            <TableCell>{c.price * c.qty}</TableCell>

                        </TableRow>
                    )

                })
            }
            </TableBody>
            </Table>
              </TableContainer>
    
    </MainLayout>
    </>
  )
}

export default Cartpage