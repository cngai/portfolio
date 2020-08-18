import React, { Component } from 'react';
import styled from 'styled-components';

class MobileExperience extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        let { height } = this.props;

        return (
            <ExperienceContainer height={height} >
                <div>Experience</div>
            </ExperienceContainer>
        );
    }
}

const ExperienceContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: red;

    ${({ height }) => `
        height: ${height}px;
    `}
`;

export default MobileExperience;