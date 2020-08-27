import React, { Component } from 'react';
import styled from 'styled-components';
import Swipe from 'react-easy-swipe';
import info from '../info';

const github = '/assets/github-filled.png';
const link = '/assets/out.png';

const projects = info.projects;

class MobileCoding extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currSelectorIndex: 0,
            contentContainerWidth: 0,
            infoTapeHeight: 0,
        };

        this.createProjectSection = this.createProjectSection.bind(this);
        this.getTapeContainerHeight = this.getTapeContainerHeight.bind(this);
        this.onSwipeLeft = this.onSwipeLeft.bind(this);
        this.onSwipeRight = this.onSwipeRight.bind(this);
    }

    componentDidMount() {
        const contentContainer = document.getElementById('ContentContainer');
        setTimeout(this.getTapeContainerHeight, 1); /* need to set timeout because offsetHeight is inaccurate immediately upon mounting */

        this.setState({
            contentContainerWidth: contentContainer.offsetWidth,
        });
    }

    createDot(dotObj) {
        let isFilled = dotObj.filled;
        let idx = dotObj.idx;

        return (
            isFilled ?
            <DotFilled key={idx} />
            :
            <Dot key={idx} />
        );
    }

    createProjectSection(idx) {
        const { contentContainerWidth } = this.state;

        let currProject = projects[idx];

        return (
            <InfoSlide key={idx} width={contentContainerWidth} id={`InfoSlide${idx}`}>
                <SlideContainer>
                    <SubheaderText>{currProject.title}</SubheaderText>
                    <DescriptionText>{currProject.description}</DescriptionText>
                </SlideContainer>
                <SlideContainer>
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
                </SlideContainer>
            </InfoSlide>
        );
    }

    getTapeContainerHeight() {
        const infoTape = document.getElementById('InfoSlide0'); /* have to use InfoSlide0 instead of InfoTape b/c offsetHeight is incorrect for some reason */
        
        /* infoTape is null if not mobile */
        if (infoTape) {
            this.setState({
                infoTapeHeight: infoTape.offsetHeight,
            });
        }
    }

    onSwipeLeft() {
        const { currSelectorIndex } = this.state;

        if ((currSelectorIndex + 1) <= (projects.length - 1)) {
            this.setState({
                currSelectorIndex: currSelectorIndex + 1,
            });
        }
    }

    onSwipeRight() {
        const { currSelectorIndex } = this.state;

        if ((currSelectorIndex - 1) >= 0) {
            this.setState({
                currSelectorIndex: currSelectorIndex - 1,
            });
        }
    }

    renderDots() {
        const { currSelectorIndex } = this.state;

        let dots = [];

        for (let i = 0; i < projects.length; i++) {
            let isFilled = currSelectorIndex === i;
            dots.push({
                'filled': isFilled,
                'idx': i, 
            });
        }

        return dots.map(this.createDot, this);
    }

    renderInfoTape() {
        let projectsSections = [];

        for (let i = 0; i < projects.length; i++) {
            projectsSections.push(i);
        }

        return projectsSections.map(this.createProjectSection, this);
    }

    render() {
        const {
            currSelectorIndex,
            contentContainerWidth,
            infoTapeHeight,
        } = this.state;
        const { height } = this.props;

        const infoTapeOffset = currSelectorIndex * contentContainerWidth;

        return (
            <CodingContainer height={height} >
                <ContentContainer id='ContentContainer'>
                    <HeaderText>Projects I've Built:</HeaderText>
                    <Divider />
                    <BodyContainer>
                        <Swipe
                            onSwipeLeft={this.onSwipeLeft}
                            onSwipeRight={this.onSwipeRight}
                        >
                            <InfoContainer
                                width={contentContainerWidth}
                                height={infoTapeHeight}
                            >
                                <InfoTape offset={infoTapeOffset} id='InfoTape'>
                                    {this.renderInfoTape()}
                                </InfoTape>
                            </InfoContainer>
                        </Swipe>
                    </BodyContainer>
                    <DotsContainer>
                        {this.renderDots()}
                    </DotsContainer>
                </ContentContainer>
            </CodingContainer>
        );
    }
}

const CodingContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${({ height }) => `
        height: ${height}px;
    `}
`;

const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px 0 0 0;
`;

const ContentContainer = styled.div`
    display: flex;
    width: 80%;
    flex-direction: column;
`;

const DescriptionText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    color: #000000;
    letter-spacing: 2px;
    line-height: 1.5;
    margin: 0 0 0 0;
`;

const Divider = styled.div`
	width: 65px;
	height: 0;
	border-top: 5px solid #D0E3F4;
`;

const Dot = styled.div`
    height: 5px;
    width: 5px;
    border-radius: 5px;
    margin: 0 5px 0 5px;
    border: 1px solid #D0E3F4;
`;

const DotFilled = styled.div`
    height: 5px;
    width: 5px;
    border-radius: 5px;
    border: 1px solid #D0E3F4;
    background-color: #D0E3F4;
    margin: 0 5px 0 5px;
`;

const DotsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 15px 0 0 0;
`;

const HeaderText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    color: #000000;
    letter-spacing: 2px;
    margin: 15px 0 15px 0;
`;

const Icon = styled.img`
    height: 20px;
    margin: 0 15px 0 0;
`;

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 23px;
`;

const InfoContainer = styled.div`
    display: flex;
    position: relative;
    overflow: hidden;
    
    ${({ width, height }) => `
        width: ${width}px;
        height: ${height}px;
    `}
`;

const InfoSlide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${({ width }) => `
        width: ${width}px;
    `}
`;

const InfoTape = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    transition: left 0.4s;

    ${({ offset }) => `
        left: -${offset}px;
    `}
`;

const SlideContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const SubheaderText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 14px;
    color: #000000;
    letter-spacing: 2px;
    margin: 0 0 10px 0;
`;

const TechText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-family: 'Roboto', sans-serif;
    font-style: italic;
    font-size: 10px;
    color: #D3D3D3;
    letter-spacing: 2px;
    margin: 15px 0 15px 0;
`;

export default MobileCoding;