import React, { Component } from 'react';
import styled from 'styled-components';
import info from '../info';

const interests = info.interests;

const githubFilled = '/assets/github-filled.png';
const linkedinFilled = '/assets/linkedin-filled.png';
const mailFilled = '/assets/mail-filled.png';

class MobileContact extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    createListItem(listObj) {
        const interest = listObj.interest;
        const idx = listObj.idx;

        return <ListText key={idx}>{interest}</ListText>
    }

    renderList(){
        let listItems = [];

        for (let i = 0; i < interests.length; i++) {
            listItems.push({
                interest: interests[i],
                idx: i,
            });
        }

        return listItems.map(this.createListItem, this);
    }

    render() {
        const { height } = this.props;
        
        return (
            <ContactContainer height={height} >
                <ContentContainer>
                    <HeaderText>Contact Me!</HeaderText>
                    <Divider />
                    <SubheaderText>If you like any of the below:</SubheaderText>
                    <UnorderedList>
                        {this.renderList()}
                    </UnorderedList>
                    <SubheaderText>Or if you just want to talk, feel free to reach out via...</SubheaderText>
                    <IconContainer>
                        <IconWrapper>
                            <a href={'mailto: cngai1223@gmail.com'}>
                                <Icon src={mailFilled} />
                            </a>
                            <IconText>Email</IconText>
                        </IconWrapper>
                        <IconWrapper>
                            <a href={'https://www.linkedin.com/in/ctngai/'} target='_blank'>
                                <Icon src={linkedinFilled} />
                            </a>
                            <IconText>LinkedIn</IconText>
                        </IconWrapper>
                        <IconWrapper>
                            <a href={'https://github.com/cngai'} target='_blank'>
                                <Icon src={githubFilled} />                   
                            </a>
                            <IconText>GitHub</IconText>
                        </IconWrapper>
                </IconContainer>
                </ContentContainer>
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

    ${({ height }) => `
        height: ${height}px;
    `}
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
    margin 0 0 5px 0;
`;

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    margin-top: 5px;
`;

const IconText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 12px;
    color: #D0E3F4;
    letter-spacing: 2px;
    margin: 0;
`;

const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ListText = styled.li`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    color: #000000;
    letter-spacing: 2px;
    line-height: 2.0;
    margin: 0;
`;

const SubheaderText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 14px;
    color: #000000;
    letter-spacing: 2px;
    margin: 15px 0 15px 0;
`;

const UnorderedList = styled.ul`
    margin: 0 0 0 0;
    padding-left: 20px;
`;

export default MobileContact;