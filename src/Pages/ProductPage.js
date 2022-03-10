import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import { MainLayout , InnerLayout } from '../styles/Layout'
import { Image,Badge,Spinner,Button } from "react-bootstrap";
import axios from "axios";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { addToCart } from '../Redux/Actions/cartAction';
import { useDispatch , useSelector} from 'react-redux';


function ProductPage() {
  const [product, setProduct] = React.useState([]);
  const [loading, setloading] = React.useState(false);
  const [error, seterror] = React.useState(null);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  const total = useSelector((state) => state.cartReducer.total);


  const getData = async () => {
    try 
    {
        setloading(true)
        const resp = await axios.get(
            "https://api.codingthailand.com/api/course"
          );
          //console.log(resp.data)
          setProduct(resp.data.data)
    } 
    catch (error) 
    {
        seterror(error)
    } 
    finally 
    {
        setloading(false)
    }
    //setProduct(resp.data);
  };

  React.useEffect(() => {
    getData();
  }, []);
  if (loading === true){
    return(
        <div className="text-center mt-5">
      <Spinner animation="border" variant="danger" />
      </div>
    )
}

if (error){
    return(
        <div className="text-center mt-5 text-danger">
            <h4>Error from API, Plese try again</h4>
            <p>{error.response.data.message}</p>
        </div>
    )
}
const addCart = (p) => {const product = {id: p.id, name: p.title , price: p.view , qty: 1}

      dispatch(addToCart(product, cart))

}
  return (
    <>
    <MainLayout>
       <Title title={'PRODUCT'} span={'PRODUCT'} />
      <InnerLayout>

      <TableContainer component={Paper} sx={{ width:'95%' , marginLeft:5}}> 
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <Table striped bordered hover>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Detail</TableCell>
                <TableCell>Create Date</TableCell>
                <TableCell>View</TableCell>
                <TableCell>Picture</TableCell>
                <TableCell>Detail</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {
              
              product.map((p, index) => {
                return (
                  <TableRow key={p.id}>
                            <TableCell>{p.id}</TableCell>
                            <TableCell>{p.title}</TableCell>
                            <TableCell>{p.detail}</TableCell>
                            <TableCell>{p.date}</TableCell>
                            <TableCell><Badge variant="primary">{p.view}</Badge></TableCell>
                            <TableCell><Image src={p.picture} rounded width={60}/></TableCell>
                            <TableCell><Button  variant="dark" onClick={() =>addCart(p)}>Buy<AiOutlineShoppingCart/> </Button></TableCell>
                        </TableRow>
                    )
                    
                  })
                }
            </TableBody>
          </Table>
      </Table>
    </TableContainer>
    </InnerLayout>
    </MainLayout>
                

    </>
  )
}

export default ProductPage