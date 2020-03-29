import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import info from '../info';

const interests = info.interests;

const github = '/assets/github.png';
const githubFilled = '/assets/github-filled.png';
const linkedin = '/assets/linkedin.png';
const linkedinFilled = '/assets/linkedin-filled.png';
const mail = '/assets/mail.png';
const mailFilled = '/assets/mail-filled.png';

class Contact extends Component {
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

    createListItem(listObj) {
        let interest = listObj.interest;
        let idx = listObj.idx;

        return <ListText key={idx}>{interest}</ListText>
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

    renderList(idx){
        let listItems = [];

        let numInterests = interests.length;
        let numLeft = numInterests / 2;
        let numRight = (numInterests - 1) / 2;

        /* left list */
        if (idx === 0) {
            for (let i = 0; i < numLeft; i++) {
                listItems.push({
                    interest: interests[i],
                    idx: i,
                });
            }
        }
        /* right list */
        else {
            for (let j = numLeft; j < numLeft + numRight; j++) {
                listItems.push({
                    interest: interests[j],
                    idx: j,
                });
            }
        }

        return listItems.map(this.createListItem, this);
    }

    render() {
        const {
            githubIcon,
            linkedinIcon,
            mailIcon,
        } = this.state;

        return (
            <ContactContainer>
                <HeaderText>Contact Me!</HeaderText>
                <Divider />
                <BodyContainer>
                    <SubheaderText>If you like any of the below:</SubheaderText>
                    <ListContainer>
                        <Column>
                            <UnorderedList>
                                {this.renderList(0)}
                            </UnorderedList>
                        </Column>
                        <Column>
                            <UnorderedList>
                                {this.renderList(1)}
                            </UnorderedList>
                        </Column>
                    </ListContainer>
                    <SubheaderText>Or if you just want to talk, feel free to reach out via...</SubheaderText>
                    <IconContainer>
                        <IconWrapper>
                            <a href={'mailto: cngai1223@g.ucla.edu'}>
                                <Icon
                                    src={mailIcon}
                                    onMouseEnter={() => this.onIconHover('Mail')}
                                    onMouseLeave={() => this.onIconLeave('Mail')}
                                />
                            </a>
                            <IconText>Email</IconText>
                        </IconWrapper>
                        <IconWrapper>
                            <a href={'https://www.linkedin.com/in/ctngai/'} target='_blank'>
                                <Icon
                                    src={linkedinIcon}
                                    onMouseEnter={() => this.onIconHover('LinkedIn')}
                                    onMouseLeave={() => this.onIconLeave('LinkedIn')}
                                />
                            </a>
                            <IconText>LinkedIn</IconText>
                        </IconWrapper>
                        <IconWrapper>
                            <a href={'https://github.com/cngai'} target='_blank'>
                                <Icon
                                    src={githubIcon}
                                    onMouseEnter={() => this.onIconHover('GitHub')}
                                    onMouseLeave={() => this.onIconLeave('GitHub')}
                                />                   
                            </a>
                            <IconText>GitHub</IconText>
                        </IconWrapper>
                </IconContainer>
                </BodyContainer>
            </ContactContainer>
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

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const BodyContainer = styled.div`
    display: flex;
    width: 640px;
    flex-direction: column;
`;

const Column = styled.div`
    display: flex;
    flex: 1;
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
    height: 50px;
    margin 0 0 5px 0;
`;

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 500px;
    margin-top: 10px;
`;

const IconText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 20px;
    color: #D0E3F4;
    letter-spacing: 2px;
    margin: 0;
`;

const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ListContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const ListText = styled.li`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #000000;
    letter-spacing: 2px;
    line-height: 1.5;
    margin: 0px 0 20px 0;
`;

const SubheaderText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 20px;
    color: #000000;
    letter-spacing: 2px;
    margin: 20px 0 20px 0;
`;

const UnorderedList = styled.ul`
    margin: 0 0 0 0;
    padding-left: 20px;
`;

export default Contact;