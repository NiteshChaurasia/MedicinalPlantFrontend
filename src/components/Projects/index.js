import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Portfolio</Title>
        <Desc>
        Revolutionize your understanding of Medicinal Plants with cutting-edge technology
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'SKIN' ?
            <ToggleButton active value="skin" onClick={() => setToggle('web app')}>SKIN</ToggleButton>
            :
            <ToggleButton value="skin" onClick={() => setToggle('web app')}>SKIN</ToggleButton>
          }
          <Divider />
          {toggle === 'COLD & COUGH' ?
            <ToggleButton active value="cold & cough" onClick={() => setToggle('android app')}>COLD & COUGH</ToggleButton>
            :
            <ToggleButton value="cold & cough" onClick={() => setToggle('android app')}>COLD & COUGH</ToggleButton>
          }
          <Divider />
          {toggle === 'DIABETIES' ?
            <ToggleButton active value="diabeties" onClick={() => setToggle('machine learning')}>DIABETIES</ToggleButton>
            :
            <ToggleButton value="diabeties" onClick={() => setToggle('machine learning')}>DIABETIES</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects