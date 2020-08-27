import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Swipe from 'react-easy-swipe';

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
			currMobileTabIndex: 0,
			width: 0,
			height: 0,
			allowVerticalSwipe: false,
		}

		this.changeTab = this.changeTab.bind(this);
		this.handleResize = this.handleResize.bind(this);
		this.onSwipeMove = this.onSwipeMove.bind(this);
		this.onSwipeDown = this.onSwipeDown.bind(this);
		this.onSwipeUp = this.onSwipeUp.bind(this);
		this.scrollToTop = this.scrollToTop.bind(this);
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
			height: window.innerHeight,
        });
	}

	/* only allow vertical swipe if the vertical dispositon is greater than the verticalSwipeSensitivity value */
	onSwipeMove(position) {
		const verticalSwipeSensitivity = 20; // defines the vertical disposition leeway (in pixels)
		const amountScrolled = Math.abs(position.y);
		
		if (amountScrolled >= verticalSwipeSensitivity) {
			this.setState({
				allowVerticalSwipe: true,
			});
		}
	}

	onSwipeDown() {
		const { currMobileTabIndex, allowVerticalSwipe } = this.state;

		if (allowVerticalSwipe && currMobileTabIndex > 0) {
			this.setState({
				currMobileTabIndex: currMobileTabIndex - 1,
				allowVerticalSwipe: false,
			});
		}
	}
	
	onSwipeUp() {
		const { currMobileTabIndex, allowVerticalSwipe } = this.state;

		if (allowVerticalSwipe && currMobileTabIndex < 5) {
			this.setState({
				currMobileTabIndex: currMobileTabIndex + 1,
				allowVerticalSwipe: false,
			});
		}
	}

	scrollToTop() {
		this.setState({
			currMobileTabIndex: 0,
		});
	}

	render() {
		const {
			currTab,
			currMobileTabIndex,
			width,
			height
		} = this.state;

		const isMobile = width < MOBILE_WIDTH;
		const mobileNavHeight = 75;
		const pageHeight = height - mobileNavHeight;
		const mobileTapeOffset = currMobileTabIndex * pageHeight;

		return (
			<div>
				{
					isMobile ? (
						<MobileContainer>
							<MobileNav currTabIndex={currMobileTabIndex} />
							<Swipe
								onSwipeUp={this.onSwipeUp}
								onSwipeDown={this.onSwipeDown}
								onSwipeMove={this.onSwipeMove}
								allowMouseEvents={true}
							>
								<MobileContent height={pageHeight}>
									<MobileTape offset={mobileTapeOffset}>
										<MobileWelcome height={pageHeight} />
										<MobileEducation height={pageHeight} />
										<MobileExperience height={pageHeight} />
										<MobileCoding height={pageHeight} />
										<MobileDesign height={pageHeight} />
										<MobileContact height={pageHeight} />
									</MobileTape>
								</MobileContent>
							</Swipe>
							<div>
								{
									currMobileTabIndex !== 0 && (
										<BackToTopContainer onClick={this.scrollToTop}>
											<BackToTopText>back<br />to top</BackToTopText>
										</BackToTopContainer>
									)
								}
							</div>
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

const fadeIn = keyframes`
    0% { opacity: 0; }
	100% { opacity: 1; }
`;

const Container = styled.div`
	display: flex;
	flex-direction: row;
	height: 100vh;
`;

const BackToTopContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: cente;r
	width: 90px;
	position: fixed;
	background-color: #D0E3F4;
	right: 0px;
	bottom: 15px;
	padding: 10px 0 10px 10px;
	box-shadow: 5px 0px 20px 5px grey;
	-webkit-animation: ${fadeIn} ease 0.4s;
	animation: ${fadeIn} ease 0.4s;
`;

const BackToTopText = styled.p`
	@import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
	font-size: 12px;
    color: #FFFFFF;
    letter-spacing: 3px;
    margin: 0 10px 0 0;
	text-align: right;
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
`;

const MobileContent = styled.div`
	display: flex;
	flex: 1;
	width: 100%;
	margin: 75px 0 0 0;		/* MobileNav component is 75px tall */
	position: relative;
	overflow: hidden;

	${({ height }) => `
        height: ${height}px;
    `}
`;

const MobileTape = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: flex-start;
	align-items: center;
	position: absolute;
	transition: top 0.4s;

	${({ offset }) => `
        top: -${offset}px;
    `}
`;

const NavContainer = styled.div`
	display: flex;
  	background-color: #D3D3D3;
	flex: 2;
	justify-content: flex-end;
	align-items: center;
`;

export default App;
