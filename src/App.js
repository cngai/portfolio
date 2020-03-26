import React, { Component } from 'react';
import styled from 'styled-components';

import Nav from './components/Nav';

import Welcome from './tabs/Welcome';
import Education from './tabs/Education';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currTab: 'Welcome',
		}

		this.changeTab = this.changeTab.bind(this);
	}

	/* function triggered when new tab is selected */
	changeTab(selectedTab) {
		this.setState({
			currTab: selectedTab,
		});
	}

	render() {
		const { currTab } = this.state;

		return (
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
					</InfoSubcontainer>
				</InfoContainer>
			</Container>
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

const NavContainer = styled.div`
	display: flex;
  	background-color: #D3D3D3;
	flex: 2;
	justify-content: flex-end;
	align-items: center;
`;

export default App;
