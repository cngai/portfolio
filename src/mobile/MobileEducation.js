import React, { Component } from 'react';
import styled from 'styled-components';

class MobileEducation extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        const { height } = this.props;

        return (
            <EducationContainer height={height} >
                <div>Education</div>
            </EducationContainer>
        );
    }
}

const EducationContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: blue;

    ${({ height }) => `
        height: ${height}px;
    `}
`;

export default MobileEducation;