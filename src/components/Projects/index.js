import React from 'react';
import styled from "styled-components";
import { useState } from 'react';
import ProjectCard from "../Cards/ProjectCard"
import {projects} from "../../data/constants";


const Container = styled.div`
display: flex;
background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
gap: 12px;
padding: 10px 0px 100px 0;
@media (max-width: 960px) {
    flex-direction: column;
}
`;

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

const Description = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const ToogleGroup = styled.div`
display: flex;
border: 1.5px solid ${({ theme }) => theme.primary};
color: ${({ theme }) => theme.primary};
font-size: 16px;
border-radius: 12px;
font-weight:500;
margin: 22px 0;
@media (max-width: 768px) {
        font-size: 12px;
    }
`;

const ToggleButton = styled.div`
padding: 8px 18px;
cursor: pointer;
border-radius: 6px;
${({ active, theme }) =>
        active && `
    background: ${theme.primary + 20};
    `
    }
    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`;

const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
`;



const Projects = ({openModal,setOpenModal}) => {
    const [toggle,setToggle] = useState("all");
    return (
    <Container id="projects">
        <Wrapper>
        <Title>Projects</Title>
        <Description>
                I have worked on a wide range of projects. From Full stack development to Machine Learning models. Here are some of mmy projects. 
        </Description>
        <ToogleGroup>
            {toggle === "all" ? 
            <ToggleButton active value="all" onClick={()=> setToggle("all")}>ALL</ToggleButton>:<ToggleButton value="all" onClick={()=> setToggle("all")}>ALL</ToggleButton>}
            <Divider/>
            {toggle==="web app" ? (<ToggleButton active onClick ={()=>setToggle('web app')}>WEB APP'S</ToggleButton>):
            (<ToggleButton onClick ={()=>setToggle('web app')}>WEB APP'S</ToggleButton>)}
            <Divider/>
            { toggle==="machine learning"?(
            <ToggleButton active onClick ={()=>setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>):(<ToggleButton onClick ={()=>setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>)}
        </ToogleGroup>
                <CardContainer>
                    {toggle==="all" && projects.map((project,index)=>(<ProjectCard key={index} project={project} openModal={openModal} setOpenModal={setOpenModal}/>))}
                    {projects.filter((item) => item.category === toggle).map((project)=>(<ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>))}
                    
                </CardContainer>


        </Wrapper>
    </Container>
    )
}

export default Projects;