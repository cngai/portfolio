import React, { Component } from 'react';
import styled from 'styled-components';

class MobileNav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: 0,
            welcomeTabWidth: 0,
            educationTabWidth: 0,
            experienceTabWidth: 0,
            codingTabWidth: 0,
            designTabWidth: 0,
            contactTabWidth: 0,
            tapeOffset: 0,
        };

        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);

        const welcomeTab = document.getElementById('WelcomeTab');
        const educationTab = document.getElementById('EducationTab');
        const experienceTab = document.getElementById('ExperienceTab');
        const codingTab = document.getElementById('CodingTab');
        const designTab = document.getElementById('DesignTab');
        const contactTab = document.getElementById('ContactTab');

        this.setState({
            welcomeTabWidth: welcomeTab.offsetWidth,
            educationTabWidth: educationTab.offsetWidth,
            experienceTabWidth: experienceTab.offsetWidth,
            codingTabWidth: codingTab.offsetWidth,
            designTabWidth: designTab.offsetWidth,
            contactTabWidth: contactTab.offsetWidth,
        });
	}
	
	componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    computeTabContainerMargins() {
        const {
            welcomeTabWidth,
            contactTabWidth,
            width,
        } = this.state;

        const marginWidth = 40;
        let leftPadding = (width - (welcomeTabWidth + marginWidth)) / 2;
        let rightPadding = (width - (contactTabWidth + marginWidth)) / 2;

        return ({
            'leftPadding': leftPadding,
            'rightPadding': rightPadding,
        });
    }

    computeTapeOffset(currTabIndex) {
        const {
            welcomeTabWidth,
            educationTabWidth,
            experienceTabWidth,
            codingTabWidth,
            designTabWidth,
            contactTabWidth,
        } = this.state;

        const marginWidth = 40;
        const educationOffset = marginWidth + 0.5 * (welcomeTabWidth + educationTabWidth);
        const experienceOffset = marginWidth + educationOffset + 0.5 * (educationTabWidth + experienceTabWidth);
        const codingOffset = marginWidth + experienceOffset + 0.5 * (experienceTabWidth + codingTabWidth);
        const designOffset = marginWidth + codingOffset + 0.5 * (codingTabWidth + designTabWidth);
        const contactOffset = marginWidth + designOffset + 0.5 * (designTabWidth + contactTabWidth);

        const offsetArr = [0, educationOffset, experienceOffset, codingOffset, designOffset, contactOffset];

        return offsetArr[currTabIndex];
    }

    handleResize() {
        this.setState({
            width: window.innerWidth,
        });
    }

    updateTabWidths() {
        const welcomeTab = document.getElementById('WelcomeTab');
        const educationTab = document.getElementById('EducationTab');
        const experienceTab = document.getElementById('ExperienceTab');
        const codingTab = document.getElementById('CodingTab');
        const designTab = document.getElementById('DesignTab');
        const contactTab = document.getElementById('ContactTab');

        this.setState({
            welcomeTabWidth: welcomeTab.offsetWidth,
            educationTabWidth: educationTab.offsetWidth,
            experienceTabWidth: experienceTab.offsetWidth,
            codingTabWidth: codingTab.offsetWidth,
            designTabWidth: designTab.offsetWidth,
            contactTabWidth: contactTab.offsetWidth,
        });
    }

    render() {
        const { currTabIndex } = this.props;

        const leftPadding = this.computeTabContainerMargins().leftPadding;
        const rightPadding = this.computeTabContainerMargins().rightPadding;
        let tapeOffset = this.computeTapeOffset(currTabIndex);

        return (
            <NavContainer>
                <NavTape
                    paddingLeft={leftPadding}
                    paddingRight={rightPadding}
                    offset={tapeOffset}
                >
                    <NavText
                        id='WelcomeTab'
                        currOpacity={currTabIndex === 0 ? 1.0 : 0.4}
                        currFontSize={currTabIndex === 0 ? 30 : 30}
                    >
                        welcome
                    </NavText>
                    <NavText
                        id='EducationTab'
                        currOpacity={currTabIndex === 1 ? 1.0 : 0.4}
                        currFontSize={currTabIndex === 1 ? 30 : 30}
                    >
                        education
                    </NavText>
                    <NavText
                        id='ExperienceTab'
                        currOpacity={currTabIndex === 2 ? 1.0 : 0.4}
                        currFontSize={currTabIndex === 2 ? 30 : 30}
                    >
                        experience
                    </NavText>
                    <NavText
                        id='CodingTab'
                        currOpacity={currTabIndex === 3 ? 1.0 : 0.4}
                        currFontSize={currTabIndex === 3 ? 30 : 30}
                    >
                        coding
                    </NavText>
                    <NavText
                        id='DesignTab'
                        currOpacity={currTabIndex === 4 ? 1.0 : 0.4}
                        currFontSize={currTabIndex === 4 ? 30 : 30}
                    >
                        design
                    </NavText>
                    <NavText
                        id='ContactTab'
                        currOpacity={currTabIndex === 5 ? 1.0 : 0.4}
                        currFontSize={currTabIndex === 5 ? 30 : 30}
                    >
                        contact
                    </NavText>
                </NavTape>
            </NavContainer>
        );
    }
}

const NavContainer = styled.div`
    display: flex;
    width: 100vw;
    background-color: #D3D3D3;
    align-items: center;
    overflow-x: hidden;
    position: fixed;
    height: 75px;
`;

const NavTape = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    transition: left 1s;
    justify-content: center;
    align-items: center;
    
    ${({ offset, paddingLeft, paddingRight }) => `
        left: -${offset}px;
        padding: 0 ${paddingRight}px 0 ${paddingLeft}px;
    `}
`;

const NavText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    color: #FFFFFF;
    letter-spacing: 5px;
    margin: 0 20px 0 20px;
    transition: opacity 1s, font-size 1s;

    ${({ currOpacity, currFontSize }) => `
        opacity: ${currOpacity};
        font-size: ${currFontSize}px;
    `}
`;

export default MobileNav;