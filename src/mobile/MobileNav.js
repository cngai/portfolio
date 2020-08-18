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

        let welcomeTab = document.getElementById('WelcomeTab');
        let educationTab = document.getElementById('EducationTab');
        let experienceTab = document.getElementById('ExperienceTab');
        let codingTab = document.getElementById('CodingTab');
        let designTab = document.getElementById('DesignTab');
        let contactTab = document.getElementById('ContactTab');

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

    computeTapeOffset(currTab) {
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

        let offsetDict = {
            'Welcome': 0,
            'Education': educationOffset,
            'Experience': experienceOffset,
            'Coding': codingOffset,
            'Design': designOffset,
            'Contact': contactOffset,
        };

        return offsetDict[currTab];
    }

    handleResize() {
        this.setState({
            width: window.innerWidth,
        });
    }

    render() {
        const { currTab } = this.props;

        const leftPadding = this.computeTabContainerMargins().leftPadding;
        const rightPadding = this.computeTabContainerMargins().rightPadding;
        let tapeOffset = this.computeTapeOffset(currTab);

        return (
            <NavContainer>
                <NavTape
                    paddingLeft={leftPadding}
                    paddingRight={rightPadding}
                    offset={tapeOffset}
                >
                    <NavText
                        id='WelcomeTab'
                        currOpacity={currTab === 'Welcome' ? 1.0 : 0.4}
                        currFontSize={currTab === 'Welcome' ? 30 : 20}
                    >
                        welcome
                    </NavText>
                    <NavText
                        id='EducationTab'
                        currOpacity={currTab === 'Education' ? 1.0 : 0.4}
                        currFontSize={currTab === 'Education' ? 30 : 20}
                    >
                        education
                    </NavText>
                    <NavText
                        id='ExperienceTab'
                        currOpacity={currTab === 'Experience' ? 1.0 : 0.4}
                        currFontSize={currTab === 'Experience' ? 30 : 20}
                    >
                        experience
                    </NavText>
                    <NavText
                        id='CodingTab'
                        currOpacity={currTab === 'Coding' ? 1.0 : 0.4}
                        currFontSize={currTab === 'Coding' ? 30 : 20}
                    >
                        coding
                    </NavText>
                    <NavText
                        id='DesignTab'
                        currOpacity={currTab === 'Design' ? 1.0 : 0.4}
                        currFontSize={currTab === 'Design' ? 30 : 20}
                    >
                        design
                    </NavText>
                    <NavText
                        id='ContactTab'
                        currOpacity={currTab === 'Contact' ? 1.0 : 0.4}
                        currFontSize={currTab === 'Contact' ? 30 : 20}
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