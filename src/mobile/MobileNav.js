import React, { Component } from 'react';
import styled from 'styled-components';

class MobileNav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currTab: 'Welcome',
            width: 0,
            welcomeTabWidth: 0,
            contactTabWidth: 0,
        };

        this.adjustScrollOffset = this.adjustScrollOffset.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);

        let welcomeTab = document.getElementById('WelcomeTab');
        let welcomeTabWidth = welcomeTab.offsetWidth;
        let contactTab = document.getElementById('ContactTab');
        let contactTabWidth = contactTab.offsetWidth;

        this.setState({
            welcomeTabWidth,
            contactTabWidth,
        });
	}
	
	componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    /* automatically scroll to specific offset so NavText is centered */
    adjustScrollOffset() {
        console.log('hello');
        const { welcomeTabWidth, width } = this.state;

        let tabContainer = document.getElementById('TabContainer');
        let educationTab = document.getElementById('EducationTab');
        let experienceTab = document.getElementById('ExperienceTab');
        let codingTab = document.getElementById('CodingTab');
        let designTab = document.getElementById('DesignTab');

        const leftMargin = this.computeTabContainerMargins().leftMargin;

        let marginWidth = 40;
        let educationInterval = leftMargin + (welcomeTabWidth + marginWidth);   // marks the beginning of the education interval
        let experienceInterval = educationInterval + educationTab.offsetWidth + marginWidth;
        let codingInterval = experienceInterval + experienceTab.offsetWidth + marginWidth;
        let designInterval = codingInterval + codingTab.offsetWidth + marginWidth;
        let contactInterval = designInterval + designTab.offsetWidth + marginWidth;
        
        let centerLine = tabContainer.scrollLeft + (width / 2);
        if (centerLine < educationInterval) {
            console.log('Welcome');
        } else if (centerLine >= educationInterval && centerLine < experienceInterval) {
            console.log('Education');
        } else if (centerLine >= experienceInterval && centerLine < codingInterval) {
            console.log('Experience');
        } else if (centerLine >= codingInterval && centerLine < designInterval) {
            console.log('Coding');
        } else if (centerLine >= designInterval && centerLine < contactInterval) {
            console.log('Design');
        } else {
            console.log('Contact');
        }
    }

    computeTabContainerMargins() {
        const {
            welcomeTabWidth,
            contactTabWidth,
            width,
        } = this.state;

        let marginWidth = 40;
        let leftMargin = (width - (welcomeTabWidth + marginWidth)) / 2;
        let rightMargin = (width - (contactTabWidth + marginWidth)) / 2;

        return ({
            'leftMargin': leftMargin,
            'rightMargin': rightMargin,
        });
    }

    handleResize() {
        this.setState({
            width: window.innerWidth,
        });
    }

    render() {
        const leftMargin = this.computeTabContainerMargins().leftMargin;
        const rightMargin = this.computeTabContainerMargins().rightMargin;

        return (
            <NavContainer
                onScroll={this.adjustScrollOffset}
                id='TabContainer'
            >
                <TabContainer
                    leftMargin={leftMargin}
                    rightMargin={rightMargin}
                >
                    <NavText id='WelcomeTab'> welcome </NavText>
                    <NavText id='EducationTab'> education </NavText>
                    <NavText id='ExperienceTab'> experience </NavText>
                    <NavText id='CodingTab'> coding </NavText>
                    <NavText id='DesignTab'> design </NavText>
                    <NavText id='ContactTab'> contact </NavText>
                </TabContainer>
            </NavContainer>
        );
    }
}

const NavContainer = styled.div`
    display: flex;
    width: 100vw;
    background-color: #D3D3D3;
    align-items: center;
    overflow-x: scroll;
`;

const NavText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    color: #FFFFFF;
    letter-spacing: 5px;
    cursor: pointer;
    margin: 0 20px 0 20px;
`;

const TabContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 20px 0 20px 0;

    ${({ leftMargin, rightMargin }) => `
        padding: 0 ${rightMargin}px 0 ${leftMargin}px;
    `}
`;

export default MobileNav;