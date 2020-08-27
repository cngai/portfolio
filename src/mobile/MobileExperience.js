import React, { Component } from 'react';
import styled from 'styled-components';
import Swipe from 'react-easy-swipe';
import info from '../info';

const experiences = info.experiences;

class MobileExperience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currSelectorIndex: 0,
            contentContainerWidth: 0,
            infoTapeHeight: 0,
        };

        this.createExperienceSection = this.createExperienceSection.bind(this);
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

    createBullet(descObj) {
        let description = descObj.description;
        let idx = descObj.idx;

        return (<DescriptionText key={idx}>{description}</DescriptionText>);
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

    createExperienceSection(idx) {
        const { contentContainerWidth } = this.state;

        let currExperience = experiences[idx];

        return (
            <InfoSlide key={idx} width={contentContainerWidth}>
                <SubheaderText>
                    {`${currExperience.position} @`}
                    <br />
                    <CompanyText>{currExperience.company_name}</CompanyText>
                </SubheaderText>
                <DateText>{currExperience.time}</DateText>
                <UnorderedList>
                    {this.renderDescription(currExperience)}
                </UnorderedList>
            </InfoSlide>
        );
    }

    getTapeContainerHeight() {
        const infoTape = document.getElementById('InfoTape');
        
        /* infoTape is null if not mobile */
        if (infoTape) {
            this.setState({
                infoTapeHeight: infoTape.offsetHeight,
            });
        }
    }

    onSwipeLeft() {
        const { currSelectorIndex } = this.state;

        if ((currSelectorIndex + 1) <= (experiences.length - 1)) {
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

    renderDescription(currExperience) {
        let bullets = [];

        for (let i = 0; i < currExperience.description.length; i++) {
            bullets.push({
                'description': currExperience.description[i],
                'idx': i,
            });
        }

        return bullets.map(this.createBullet, this);
    }

    renderDots() {
        const { currSelectorIndex } = this.state;

        let dots = [];

        for (let i = 0; i < experiences.length; i++) {
            let isFilled = currSelectorIndex === i;
            dots.push({
                'filled': isFilled,
                'idx': i, 
            });
        }

        return dots.map(this.createDot, this);
    }

    renderInfoTape() {
        let experienceSections = [];

        for (let i = 0; i < experiences.length; i++) {
            experienceSections.push(i);
        }

        return experienceSections.map(this.createExperienceSection, this);
    }

    render() {
        const { currSelectorIndex, contentContainerWidth, infoTapeHeight } = this.state;
        const { height } = this.props;

        const infoTapeOffset = currSelectorIndex * contentContainerWidth;

        return (
            <ExperienceContainer height={height} >
                <ContentContainer id='ContentContainer'>
                    <HeaderText>Places I've Worked:</HeaderText>
                    <Divider />
                    <BodyContainer>
                        <Swipe
                            onSwipeLeft={this.onSwipeLeft}
                            onSwipeRight={this.onSwipeRight}
                        >
                            <InfoContainer width={contentContainerWidth} height={infoTapeHeight}>
                                <InfoTape offset={infoTapeOffset} id='InfoTape'>
                                    {this.renderInfoTape()}
                                </InfoTape>
                            </InfoContainer>
                        </Swipe>
                        <DotsContainer>
                            {this.renderDots()}
                        </DotsContainer>
                    </BodyContainer>
                </ContentContainer>
            </ExperienceContainer>
        );
    }
}

const ExperienceContainer = styled.div`
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

const CompanyText = styled.span`
    font-style: italic;
`;

const ContentContainer = styled.div`
    display: flex;
    width: 80%;
    flex-direction: column;
`;

const DateText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-style: italic;
    color: #000000;
    letter-spacing: 2px;
    margin: 0 0 10px 0;
`;

const DescriptionText = styled.li`
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

const SubheaderText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 14px;
    color: #000000;
    letter-spacing: 2px;
    margin: 0 0 10px 0;
`;

const UnorderedList = styled.ul`
    margin: 0 0 0 0;
    padding-left: 20px;
`;

export default MobileExperience;