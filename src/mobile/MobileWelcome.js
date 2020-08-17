import React, { Component } from 'react';
import styled from 'styled-components';

class MobileWelcome extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        let { height } = this.props;

        return (
            <WelcomeContainer height={height} >
                <div>Welcome</div>
            </WelcomeContainer>
        );
    }
}

const WelcomeContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: red;
`;

export default MobileWelcome;