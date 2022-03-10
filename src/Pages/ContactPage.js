import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import {InnerLayout, MainLayout, } from '../styles/Layout'
import { AiFillCheckCircle} from "react-icons/ai";
import { Box, Grid, Paper } from '@material-ui/core';
import Boxs from '../Components/Box';
import telIcon from '../img/TEL.jpg'
import emailIcon from '../img/EMAIL.png'
import discordIcon from '../img/discord.jpg'
import lineIcon from '../img/line.png'

const ContactPage = () => {

const iconTel = telIcon
const iconEmail = emailIcon
const iconDis = discordIcon
const iconLine = lineIcon
  return (
    <ContactPageStyled>
      <MainLayout>
        <InnerLayout>
          <Title title={'Contact Me'} span={'Contact Me'}/>
          <InnerLayout> 
          <Grid container spacing={1}>
       <Grid item xs={5} md={5}>
         <Box width={'100%'}>
            <Paper className='boxcontact'>
              <img src={iconTel}/><span>Tel. 063-880-4558</span>
            </Paper>
          </Box>
       </Grid>
       <Grid item xs={5} md={5}>
       <Box width={'100%'}>
            <Paper className='boxcontact'>
              <img src={iconEmail}/><span>mu.taweepat_st@tni.ac.th</span>
            </Paper>
          </Box>
       </Grid>
       <Grid item xs={5} md={5}>
       <Box width={'100%'}>
            <Paper className='boxcontact'>
              <img src={iconDis}/><span>FAR#4299</span>
            </Paper>
          </Box>
       </Grid>
       <Grid item xs={5} md={5}>
       <Box width={'100%'}>
            <Paper className='boxcontact'>
              <img src={iconLine}/><span>Vocaloidfa</span>
            </Paper>
          </Box>
       </Grid>
       </Grid>
            </InnerLayout>
        </InnerLayout>
      </MainLayout>
    </ContactPageStyled>
  )
}

const ContactPageStyled = styled.div`
.boxcontact{
  display:flex;
  img{
    width: 100px;
    height: auto;
  }
  span{
    color: black;
    align-self: center;
  }
}
  
`
export default ContactPage