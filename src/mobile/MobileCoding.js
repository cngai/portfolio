import React, { Component } from 'react';
import styled from 'styled-components';

class MobileCoding extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        let { height } = this.props;

        return (
            <CodingContainer height={height} >
                <div>Coding</div>
            </CodingContainer>
        );
    }
}

const CodingContainer = styled.div`
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

export default MobileCoding;