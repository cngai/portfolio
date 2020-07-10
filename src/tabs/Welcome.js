import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const github = '/assets/github.png';
const githubFilled = '/assets/github-filled.png';
const linkedin = '/assets/linkedin.png';
const linkedinFilled = '/assets/linkedin-filled.png';
const mail = '/assets/mail.png';
const mailFilled = '/assets/mail-filled.png';

class Welcome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            githubIcon: github,
            linkedinIcon: linkedin,
            mailIcon: mail,
        };

        this.onIconHover = this.onIconHover.bind(this);
        this.onIconLeave = this.onIconLeave.bind(this);
    }

    /* when mouse hovered over icon */
    onIconHover(iconName) {
        if (iconName === 'Mail') {
            this.setState({
                mailIcon: mailFilled,
            });
        } else if (iconName === 'LinkedIn') {
            this.setState({
                linkedinIcon: linkedinFilled,
            });
        } else if (iconName === 'GitHub') {
            this.setState({
                githubIcon: githubFilled,
            });
        }
    }

    /* when mouse leaves icon */
    onIconLeave(iconName) {
        if (iconName === 'Mail') {
            this.setState({
                mailIcon: mail,
            });
        } else if (iconName === 'LinkedIn') {
            this.setState({
                linkedinIcon: linkedin,
            });
        } else if (iconName === 'GitHub') {
            this.setState({
                githubIcon: github,
            });
        }
    }

    render() {
        const {
            githubIcon,
            linkedinIcon,
            mailIcon,
        } = this.state;

        return (
            <WelcomeContainer>
                <HeaderText>Hi, my name is <br /> Christopher Ngai.</HeaderText>
                <Divider />
                <BodyContainer>
                    <BodyText>
                        I’m a UCLA alumnus with a degree in computer science & engineering. 
                        I’m a strong advocate of interdisciplinary pursuits. For me, that’s combining 
                        engineering, art, and business. Still trying to get the hang of it though.
                    </BodyText>
                </BodyContainer>
                <IconContainer>
                    <a href={'mailto: cngai1223@gmail.com'}>
                        <Icon
                            src={mailIcon}
                            onMouseEnter={() => this.onIconHover('Mail')}
                            onMouseLeave={() => this.onIconLeave('Mail')}
                        />
                    </a>
                    <a href={'https://www.linkedin.com/in/ctngai/'} target='_blank'>
                        <Icon
                            src={linkedinIcon}
                            onMouseEnter={() => this.onIconHover('LinkedIn')}
                            onMouseLeave={() => this.onIconLeave('LinkedIn')}
                        />
                    </a>
                    <a href={'https://github.com/cngai'} target='_blank'>
                        <Icon
                            src={githubIcon}
                            onMouseEnter={() => this.onIconHover('GitHub')}
                            onMouseLeave={() => this.onIconLeave('GitHub')}
                        />                   
                    </a>
                </IconContainer>
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
    flex-direction: column;
    align-items: flex-start;
`;

const BodyContainer = styled.div`
    width: 640px;
`;

const BodyText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: #000000;
    letter-spacing: 2px;
    line-height: 1.5;
    margin: 20px 0 20px 0;
`;

const Divider = styled.div`
	width: 65px;
	height: 0;
	border-top: 10px solid #D0E3F4;
    animation: ${extendDivider} ease 0.4s;
`;

const HeaderText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    font-size: 48px;
    color: #000000;
    letter-spacing: 2px;
    margin: 20px 0 20px 0;
`;

const Icon = styled.img`
    height: 35px;
    margin: 0 40px 0 0;
`;

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0 0 0;
`;

export default Welcome;