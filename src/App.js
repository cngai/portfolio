import React, { Component } from 'react';
import styled from 'styled-components';

import Nav from './components/Nav';
import Welcome from './tabs/Welcome';
import Education from './tabs/Education';
import Experience from './tabs/Experience';
import Coding from './tabs/Coding';
import Design from './tabs/Design';
import Contact from './tabs/Contact';

import MobileNav from './mobile/MobileNav';
import MobileWelcome from './mobile/MobileWelcome';
import MobileEducation from './mobile/MobileEducation';
import MobileExperience from './mobile/MobileExperience';
import MobileCoding from './mobile/MobileCoding';
import MobileDesign from './mobile/MobileDesign';
import MobileContact from './mobile/MobileContact';

const MOBILE_WIDTH = 1034;

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currTab: 'Welcome',
			width: 0,
		}

		this.changeTab = this.changeTab.bind(this);
		this.handleResize = this.handleResize.bind(this);
	}

	componentDidMount() {
        this.handleResize();
		window.addEventListener('resize', this.handleResize);
	}
	
	componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

	/* function triggered when new tab is selected */
	changeTab(selectedTab) {
		this.setState({
			currTab: selectedTab,
		});
	}

	handleResize() {
        this.setState({
            width: window.innerWidth,
        });
    }

	render() {
		const { currTab, width } = this.state;

		const isMobile = width < MOBILE_WIDTH;

		return (
			<div>
				{
					isMobile ? (
						<MobileContainer>
							<MobileNav />
							<MobileContent>
								<MobileWelcome />
								<MobileEducation />
								<MobileExperience />
								<MobileCoding />
								<MobileDesign />
								<MobileContact />
							</MobileContent>
						</MobileContainer>
					) : (
						<Container>
							<NavContainer>
								<Nav onChangeTab={this.changeTab} />
							</NavContainer>
							<InfoContainer>
								<InfoSubcontainer>
									{
										currTab === 'Welcome' && (
											<Welcome />
										)
									}
									{
										currTab === 'Education' && (
											<Education />
										)
									}
									{
										currTab === 'Experience' && (
											<Experience />
										)
									}
									{
										currTab === 'Coding' && (
											<Coding />
										)
									}
									{
										currTab === 'Design' && (
											<Design />
										)
									}
									{
										currTab === 'Contact' && (
											<Contact />
										)
									}
								</InfoSubcontainer>
							</InfoContainer>
						</Container>
					)
				}
			</div>
		  );
	}
}

const Container = styled.div`
	display: flex;
	flex-direction: row;
	height: 100vh;
`;

const InfoContainer = styled.div`
	display: flex;
	flex: 3;
	justify-content: flex-start;
	align-items: center;
`;

const InfoSubcontainer = styled.div`
	margin: 0 0 0 100px;
`;

const MobileContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

const MobileContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
	align-items: center;
`;

const NavContainer = styled.div`
	display: flex;
  	background-color: #D3D3D3;
	flex: 2;
	justify-content: flex-end;
	align-items: center;
`;

export default App;
