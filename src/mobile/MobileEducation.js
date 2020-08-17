import React, { Component } from 'react';
import styled from 'styled-components';

class MobileEducation extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <EducationContainer>
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
`;

export default MobileEducation;