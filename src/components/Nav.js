import React, { Component } from 'react';
import styled from 'styled-components';


class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currTab: 'Welcome',
            welcomeOpacity: 1,
            educationOpacity: 0.75,
            experienceOpacity: 0.6,
            codingOpacity: 0.5,
            designOpacity: 0.4,
            contactOpacity: 0.3,
            navContainerHeight: 0,
            sliderHeight: 46.5,
        };

        this.getSliderHeight = this.getSliderHeight.bind(this);
        this.selectTab = this.selectTab.bind(this);
        this.updateOpacities = this.updateOpacities.bind(this);
    }

    componentDidMount() {
        let navContainer = document.getElementById('NavContainer');
        let navContainerHeight = navContainer.offsetHeight;

        this.setState({
            navContainerHeight,
        });
    }

    /* get height of slider to match up with current tab */
    getSliderHeight(currTab) {
        const { navContainerHeight } = this.state;

        let currTabIndex = this.tabToIndex(currTab);
        let tabHeight = navContainerHeight / 6;
        let sliderHeight = (tabHeight * currTabIndex) + (tabHeight / 2.0 - 10); // subtract 10 because height of slider is 20
        
        return sliderHeight;
    }

    selectTab(selectedTab) {
        const { onChangeTab } = this.props;

        /* get height of slider */
        let sliderHeight = this.getSliderHeight(selectedTab);

        /* change navText opacities */
        this.updateOpacities(selectedTab);

        /* update state in parent component */
        onChangeTab(selectedTab);

        this.setState({
            currTab: selectedTab,
            sliderHeight,
        });
    }

    /* converts tab name to index number */
    tabToIndex(tabName) {
        let index = -1;

        if (tabName === 'Welcome') {
            index = 0;
        } else if (tabName === 'Education') {
            index = 1;
        } else if (tabName === 'Experience') {
            index = 2;
        } else if (tabName === 'Coding') {
            index = 3;
        } else if (tabName === 'Design') {
            index = 4;
        } else if (tabName === 'Contact') {
            index = 5;
        }

        return index;
    }

    updateOpacities(currTab) {
        let currTabIndex = this.tabToIndex(currTab);
        let opacityVals = [1, 0.75, 0.6, 0.5, 0.4, 0.3];

        /* welcome opacity */
        let welcomeDiff = Math.abs(0 - currTabIndex);
        let welcomeOpacity = opacityVals[welcomeDiff];

        /* education opacity */
        let educationDiff = Math.abs(1 - currTabIndex);
        let educationOpacity = opacityVals[educationDiff];

        /* experience opacity */
        let experienceDiff = Math.abs(2 - currTabIndex);
        let experienceOpacity = opacityVals[experienceDiff];

        /* coding opacity */
        let codingDiff = Math.abs(3 - currTabIndex);
        let codingOpacity = opacityVals[codingDiff];

        /* design opacity */
        let designDiff = Math.abs(4 - currTabIndex);
        let designOpacity = opacityVals[designDiff];

        /* contact opacity */
        let contactDiff = Math.abs(5 - currTabIndex);
        let contactOpacity = opacityVals[contactDiff];

        this.setState({
            welcomeOpacity,
            educationOpacity,
            experienceOpacity,
            codingOpacity,
            designOpacity,
            contactOpacity,
        });
    }

    render () {
        const {
            welcomeOpacity,
            educationOpacity,
            experienceOpacity,
            codingOpacity,
            designOpacity,
            contactOpacity,
            sliderHeight
        } = this.state;

        console.log(welcomeOpacity);
        console.log(sliderHeight);

        return (
        <NavContainer id='NavContainer'>
                <Slider offset={sliderHeight}/>
                <NavText
                    onClick={() => this.selectTab('Welcome')}
                    currOpacity={welcomeOpacity}
                >
                    welcome
                </NavText>
                <NavText
                    onClick={() => this.selectTab('Education')}
                    currOpacity={educationOpacity}
                >
                    education
                </NavText>
                <NavText
                    onClick={() => this.selectTab('Experience')}
                    currOpacity={experienceOpacity}
                >
                    experience
                </NavText>
                <NavText
                    onClick={() => this.selectTab('Coding')}
                    currOpacity={codingOpacity}
                >
                    coding
                </NavText>
                <NavText
                    onClick={() => this.selectTab('Design')}
                    currOpacity={designOpacity}
                >
                    design
                </NavText>
                <NavText
                    onClick={() => this.selectTab('Contact')}
                    currOpacity={contactOpacity}
                >
                    contact
                </NavText>
            </NavContainer>
        );
    }
}

const NavContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
`;

const NavText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    font-size: 72px;
    color: #FFFFFF;
    margin: 15px 50px 15px 0;
    letter-spacing: 5px;
    cursor: pointer;
    transition: opacity 0.2s;
    &:hover {
        opacity: 1;
    }

    ${({ currOpacity }) => `
        opacity: ${currOpacity};
    `}
`;

const Slider = styled.div`
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-right: 20px solid #FFFFFF;
    border-bottom: 15px solid transparent;
    position: absolute;
    transition: top 0.2s;

    ${({ offset }) => `
        top: ${offset}px;
    `}
`;

export default Nav;
