import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import info from '../info';

const rightArrow = '/assets/next.png';
const leftArrow = '/assets/back.png';
const github = '/assets/github-filled.png';
const link = '/assets/out.png';

const projects = info.projects;

class Coding extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currProjectIndex: 0,
        };

        this.changeProject = this.changeProject.bind(this);
        this.nextProject = this.nextProject.bind(this);
        this.prevProject = this.prevProject.bind(this);
    }

    changeProject(projIndex) {
        this.setState({
            currProjectIndex: projIndex,
        });
    }

    createDot(dotObj) {
        let isFilled = dotObj.filled;
        let idx = dotObj.idx;

        return (
            isFilled ?
            <DotFilled key={idx} />
            :
            <Dot key={idx} onClick={() => this.changeProject(idx)} />
        );
    }

    createProjectSection(idx) {
        let currProject = projects[idx];

        return (
            <ProjectSection key={idx}>
                <SubheaderText>{currProject.title}</SubheaderText>
                <TextContainer>
                    <DescriptionText>{currProject.description}</DescriptionText>
                </TextContainer>
                <TechText>{currProject.tech}</TechText>
                <IconContainer>
                    {
                        currProject.external_link && (
                            <a href={currProject.external_link} target='_blank'>
                                <Icon src={link} />
                            </a>
                        )
                    }
                    {
                        currProject.github_link && (
                            <a href={currProject.github_link} target='_blank'>
                                <Icon src={github} />
                            </a>
                        )
                    }
                </IconContainer>
            </ProjectSection>
        );
    }

    nextProject() {
        const { currProjectIndex } = this.state;

        let nextIndex = -1;
        if (currProjectIndex !== projects.length - 1) {
            nextIndex = currProjectIndex + 1;
        } else {
            nextIndex = 0;
        }
        

        this.setState({
            currProjectIndex: nextIndex,
        });
    }

    prevProject() {
        const { currProjectIndex } = this.state;

        let nextIndex = -1;
        if (currProjectIndex !== 0) {
            nextIndex = currProjectIndex - 1;
        } else {
            nextIndex = projects.length - 1;
        }
        

        this.setState({
            currProjectIndex: nextIndex,
        });
    }

    renderDots() {
        const { currProjectIndex } = this.state;

        let dots = [];

        for (let i = 0; i < projects.length; i++) {
            let isFilled = currProjectIndex === i;
            dots.push({
                'filled': isFilled,
                'idx': i, 
            });
        }

        return dots.map(this.createDot, this);
    }

    renderProjectTape() {
        let projectSections = [];

        for (let i = 0; i < projects.length; i++) {
            projectSections.push(i);
        }

        return projectSections.map(this.createProjectSection, this);
    }

    render() {
        const { currProjectIndex } = this.state;

        let tapeOffset = currProjectIndex * 571; // multiply by 571 because each project section is 571px wide

        return (
            <CodingContainer>
                <HeaderText>Projects I've Built:</HeaderText>
                <Divider />
                <BodyContainer>
                    <DescriptionContainer>
                        <LeftArrowContainer>
                            {
                                currProjectIndex !== 0 && (
                                    <LeftArrow
                                        src={leftArrow}
                                        onClick={this.prevProject}
                                    />
                                )
                            }
                        </LeftArrowContainer>
                        <InfoContainer>
                            <ProjectTape offset={tapeOffset}>
                                {this.renderProjectTape()}
                            </ProjectTape>
                        </InfoContainer>
                        <RightArrowContainer>
                            {
                                currProjectIndex !== projects.length - 1 && (
                                    <RightArrow
                                        src={rightArrow}
                                        onClick={this.nextProject}
                                    />
                                )
                            }
                        </RightArrowContainer>
                    </DescriptionContainer>
                    <DotsContainer>
                        {this.renderDots()}
                    </DotsContainer>
                </BodyContainer>
            </CodingContainer>
        );
    }
}

const extendDivider = keyframes`
    0% {
        width: 0px;
    }
    100% {
        width: 65px;
    }
`;

const CodingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const BodyContainer = styled.div`
    display: flex;
    width: 640px;
    flex-direction: column;
`;

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
`

const DescriptionText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #000000;
    letter-spacing: 2px;
    line-height: 1.5;
    margin: 0 0 0 0;
`;

const Divider = styled.div`
	width: 65px;
	height: 0;
	border-top: 10px solid #D0E3F4;
    animation: ${extendDivider} ease 0.4s;
`;

const Dot = styled.div`
    height: 5px;
    width: 5px;
    border-radius: 5px;
    margin: 0 5px 0 5px;
    border: 1px solid #D0E3F4;
    cursor: pointer;
`;

const DotFilled = styled.div`
    height: 5px;
    width: 5px;
    border-radius: 5px;
    border: 1px solid #D0E3F4;
    background-color: #D0E3F4;
    margin: 0 5px 0 5px;
    cursor: pointer;
`;

const DotsContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 571px;
`;

const HeaderText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    font-size: 48px;
    color: #000000;
    letter-spacing: 2px;
    margin: 20px 0 20px 0;
`;

const Icon = styled.img`
    height: 20px;
    margin: 0 20px 0 0;
`;

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 23px;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    height: 286px;
    width: 571px;
`;

const LeftArrow = styled.img`
    height: 29px;
    margin-right: 40px;
    cursor: pointer;
`

const LeftArrowContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    height: 144px;
    left: -69px;
    margin-top: 63px;
`;

const ProjectSection = styled.div`
    height: 286;
    width: 571px;
`;

const ProjectTape = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    transition: left 0.4s;
    
    ${({ offset }) => `
        left: -${offset}px;
    `}
`;

const RightArrow = styled.img`
    height: 29px;
    margin-left: 40px;
    cursor: pointer;
`

const RightArrowContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 144px;
    margin-top: 63px;
`;

const SubheaderText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 20px;
    color: #000000;
    letter-spacing: 2px;
    margin: 20px 0 20px 0;
`;

const TechText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-family: 'Roboto', sans-serif;
    font-style: italic;
    font-size: 14px;
    color: #D3D3D3;
    letter-spacing: 2px;
    margin: 20px 0 20px 0;
`;

const TextContainer = styled.div`
    height: 144px;
`;

export default Coding;