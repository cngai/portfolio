import React, { Component } from 'react';
import styled from 'styled-components';

class MobileContact extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <ContactContainer>
                <div>Contact</div>
            </ContactContainer>
        );
    }
}

const ContactContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: blue;
`;

export default MobileContact;