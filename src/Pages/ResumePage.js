import React from 'react'
import styled from 'styled-components'
import { MainLayout , InnerLayout } from '../styles/Layout'
import Title from '../Components/Title'
import Skills from '../Components/Skills'
import Boxs from '../Components/Box'
import { Grid } from '@material-ui/core'
import visualimg from '../img/visual-studio.png'
import eclipseimg from '../img/eclipse.png'
import Photoshopimg from '../img/Photoshop.png'
import twofellow from '../img/2fellows.jpg'


const ResumePage = () => {
  return (
    <>
    <MainLayout>
      <Title title={'My Skills'} span={'my skills'} />
      <InnerLayout>
      <Skills btitle={"HTML5"} bsize={"50%"} btext={"Basic"}/>
      <Skills btitle={"JAVA"} bsize={"50%"} btext={"Basic"}/>
      <Skills btitle={"CSS"} bsize={"50%"} btext={"Basic"}/>
      <Skills btitle={"React"} bsize={"50%"} btext={"Basic"}/>
      <Skills btitle={"Material-UI"} bsize={"50%"} btext={"Basic"}/>
      </InnerLayout>
      <Title title={'Software Skill'} span={'Software Skill'} />
      <InnerLayout>
      <Grid container spacing={2}>
       <Grid item xs={4} md={3}>
          <Boxs img={visualimg} text={'Visual Studio Code'}/>
       </Grid>
       <Grid item xs={4} md={3}>
          <Boxs  img={eclipseimg} text={'Eclipse'}/>
       </Grid>
       <Grid item xs={4} md={3}>
          <Boxs img={Photoshopimg} text={'Photoshop'}/>
       </Grid>
       </Grid>
      </InnerLayout>
      <Title title={'Work Experience'} span={'Work Experience'} />
      <InnerLayout>
      <Grid container spacing={2}>
       <Grid item xs={4} md={3}>
          <Boxs img={twofellow} text={'2Fellows Network and Design Co., Ltd'}/>
       </Grid>
       </Grid>
      </InnerLayout>
    </MainLayout>
  </>   
  )
}

const ResumeStyled = styled.div`  
`
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign:'center'
};


export default ResumePage