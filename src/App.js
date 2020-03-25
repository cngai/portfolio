import React, { Component } from 'react';
import styled from 'styled-components';

import Nav from './components/Nav';

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
					<p>{currTab}</p>
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

const NavContainer = styled.div`
	display: flex;
  	background-color: #D3D3D3;
	flex: 2;
	justify-content: flex-end;
	align-items: center;
`;

const InfoContainer = styled.div`
	display: flex;
	flex: 3;
	justify-content: center;
	align-items: center;
`;

export default App;
