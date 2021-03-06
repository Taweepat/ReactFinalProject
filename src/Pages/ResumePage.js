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
import Resume from '../Components/Resume'


const ResumePage = () => {
  return (
    <div>
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
      <Title title={'Education'} span={'Education'} />
      <Resume/>
    </MainLayout>
  </div>   
  )
}

const ResumeStyled = styled.div`  
.Boxs{
   backgroundColor: var( --primary-color-light)
}
`


export default ResumePage