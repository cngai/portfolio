import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const githubFilled = '/assets/github-filled.png';
const linkedinFilled = '/assets/linkedin-filled.png';
const mailFilled = '/assets/mail-filled.png';

class MobileWelcome extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        const { height } = this.props;

        return (
            <WelcomeContainer height={height}>
                <ContentContainer>
                    <HeaderText>Hi, my name is <br /> Christopher Ngai.</HeaderText>
                    <Divider />
                    <BodyText>
                        I’m a UCLA alumnus with a degree in computer science & engineering. 
                        I’m a strong advocate of interdisciplinary pursuits. For me, that’s combining 
                        engineering, art, and business. Still trying to get the hang of it though.
                    </BodyText>
                    <IconContainer>
                        <a href={'mailto: cngai1223@gmail.com'}>
                            <Icon src={mailFilled} />
                        </a>
                        <a href={'https://www.linkedin.com/in/ctngai/'} target='_blank'>
                            <Icon src={linkedinFilled} />
                        </a>
                        <a href={'https://github.com/cngai'} target='_blank'>
                            <Icon src={githubFilled} />                   
                        </a>
                    </IconContainer>
                </ContentContainer>
            </WelcomeContainer>
        );
    }
}

const extendDivider = keyframes`
    0% {
        width: 0px;
    }
    100% {
        width: 65px;
    }
`;

const WelcomeContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;

    ${({ height }) => `
        height: ${height}px;
    `}
`;

const BodyText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    color: #000000;
    letter-spacing: 2px;
    line-height: 1.5;
    margin: 15px 0 15px 0;
`;

const ContentContainer = styled.div`
    display: flex;
    width: 80%;
    flex-direction: column;
`;

const Divider = styled.div`
	width: 65px;
	height: 0;
	border-top: 5px solid #D0E3F4;
    animation: ${extendDivider} ease 0.4s;
`;

const HeaderText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    color: #000000;
    letter-spacing: 2px;
    margin: 15px 0 15px 0;
`;

const Icon = styled.img`
    height: 30px;
    margin: 0 40px 0 0;
`;

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 15px 0 0 0;
`;

export default MobileWelcome;