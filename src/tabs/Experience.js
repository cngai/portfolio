import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import info from '../info';

const experiences = info.experiences;

class Experience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab: 'Accenture',
            sliderHeight: 0,
        };

        this.changeTab = this.changeTab.bind(this);
    }

    changeTab(selectedTab) {
        let currIndex = this.tabToIndex(selectedTab);
        let sliderHeight = currIndex * 36;  /* each tab is 36px in height */

        this.setState({
            selectedTab,
            sliderHeight,
        });
    }

    createBullet(descObj) {
        let description = descObj.description;
        let idx = descObj.idx;
        return (<DescriptionText key={idx}>{description}</DescriptionText>);
    }

    renderDescription() {
        const { selectedTab } = this.state;

        let currIndex = this.tabToIndex(selectedTab);
        let selectedExp = experiences[currIndex];

        let bullets = [];

        for (let i = 0; i < selectedExp.description.length; i++) {
            bullets.push({
                'description': selectedExp.description[i],
                'idx': i,
            });
        }

        return bullets.map(this.createBullet, this);
    }

    /* converts tab name to index number */
    tabToIndex(tabName) {
        let index = -1;

        if (tabName === 'Accenture') {
            index = 0;
        } else if (tabName === 'Modern Animal') {
            index = 1;
        } else if (tabName === 'CEC') {
            index = 2;
        } else if (tabName === 'Bruin AdTeam') {
            index = 3;
        } else if (tabName === 'Creative Labs') {
            index = 4;
        }

        return index;
    }

    render() {
        const { selectedTab, sliderHeight } = this.state;

        let currIndex = this.tabToIndex(selectedTab);
        let selectedExp = experiences[currIndex];

        return (
            <ExperienceContainer>
                <HeaderText>Places I've Worked:</HeaderText>
                <Divider />
                <BodyContainer>
                    <FilterContainer>
                        <Sidebar offset={sliderHeight} />
                        <Tab
                            selected={selectedTab === 'Accenture'}
                            onClick={() => this.changeTab('Accenture')}
                        >
                            <TabText selected={selectedTab === 'Accenture'}>accenture</TabText>
                        </Tab>
                        <Tab
                            selected={selectedTab === 'Modern Animal'}
                            onClick={() => this.changeTab('Modern Animal')}
                        >
                            <TabText selected={selectedTab === 'Modern Animal'}>modern animal</TabText>
                        </Tab>
                        <Tab
                            selected={selectedTab === 'CEC'}
                            onClick={() => this.changeTab('CEC')}
                        >
                            <TabText selected={selectedTab === 'CEC'}>cec</TabText>
                        </Tab>
                        <Tab
                            selected={selectedTab === 'Bruin AdTeam'}
                            onClick={() => this.changeTab('Bruin AdTeam')}
                        >
                            <TabText selected={selectedTab === 'Bruin AdTeam'}>bruin adteam</TabText>
                        </Tab>
                        <Tab
                            selected={selectedTab === 'Creative Labs'}
                            onClick={() => this.changeTab('Creative Labs')}
                        >
                            <TabText selected={selectedTab === 'Creative Labs'}>creative labs</TabText>
                        </Tab>
                    </FilterContainer>
                    <InfoContainer>
                        <SubheaderText>
                            {`${selectedExp.position} @`}
                            <br />
                            <Link href={selectedExp.link} target='_blank'>
                                <CompanyText>
                                    {selectedTab}
                                </CompanyText>
                            </Link>
                        </SubheaderText>
                        <DateText>
                            {selectedExp.time}
                        </DateText>
                        <UnorderedList>
                            {this.renderDescription()}
                        </UnorderedList>
                    </InfoContainer>
                </BodyContainer>
            </ExperienceContainer>
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

const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const BodyContainer = styled.div`
    display: flex;
    width: 640px;
    flex-direction: row;
    margin-top: 25px;
`;

const DescriptionText = styled.li`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #000000;
    letter-spacing: 2px;
    line-height: 1.5;
    margin: 0 0 0 0;
`;

const CompanyText = styled.span`
    font-style: italic;
`;

const DateText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-style: italic;
    color: #000000;
    letter-spacing: 2px;
    margin: 0 0 10px 0;
`;

const Divider = styled.div`
	width: 65px;
	height: 0;
	border-top: 10px solid #D0E3F4;
    animation: ${extendDivider} ease 0.4s;
`;

const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-left: 2px solid #D3D3D3;
    position: relative;
    height: 180px;
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

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 20px;
    height: 276px;
`;

const Link = styled.a`
    text-decoration: none;
    color: #000000;

    :hover {
        color: #D3D3D3;
    }
`

const Sidebar = styled.div`
    width: 0px;
	height: 36px;
	border-left: 2px solid #000000;
    position: absolute;
    left: -2px; /* make sure it lines up with border of FilterContainer */
    transition: top 0.2s;

    ${({ offset }) => `
        top: ${offset}px;
    `}
`;

const SubheaderText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 20px;
    color: #000000;
    letter-spacing: 2px;
    margin: 0 0 10px 0;
`;

const Tab = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    width: 144.81px;

    :hover {
        background-color: #D0E3F4;
    }

    ${({ selected }) => selected && `
        background-color: #D0E3F4;
    `}
`;

const TabText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: #D3D3D3;
    letter-spacing: 1px;
    padding: 9px; /* use padding so hover activates on entire div */
    margin: 0 0 0 0;
    width: 144.81px;

    :hover {
        color: #FFFFFF;
    }

    ${({ selected }) => selected && `
        color: #FFFFFF;
    `}
`;

const UnorderedList = styled.ul`
    margin: 0 0 0 0;
    padding-left: 20px;
`;

export default Experience;