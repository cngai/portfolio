import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import info from '../info';

const selectorOptions = ['favorite', 'challenging', 'creative'];
const classes = info.classes;

class Education extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currOptionIndex: 0,
            selectedOption: selectorOptions[0],
            hasClicked: false,
            selectedClasses: classes[0],
        };

        this.exitPreview = this.exitPreview.bind(this);
        this.nextOption = this.nextOption.bind(this);
        this.nextOptionWait = this.nextOptionWait.bind(this);
        this.updateClasses = this.updateClasses.bind(this);
    }

    exitPreview() {
        const { currOptionIndex, hasClicked } = this.state;

        let tempOptionIndex = currOptionIndex;

        if (!hasClicked) {
            if (currOptionIndex !== 0) {
                tempOptionIndex -= 1;
            } else {
                tempOptionIndex =  2;
            }
        }

        this.setState({
            currOptionIndex: tempOptionIndex,
            selectedOption: selectorOptions[tempOptionIndex],
            isHovered: false,
        });
    }

    nextOption(hasClicked) {
        const { currOptionIndex } = this.state;

        let tempOptionIndex = currOptionIndex;

        if (!hasClicked) {
            if (currOptionIndex !== 2) {
                tempOptionIndex += 1;
            } else {
                tempOptionIndex =  0;
            }
        } else {
            this.updateClasses(tempOptionIndex);
        }

        this.setState({
            currOptionIndex: tempOptionIndex,
            selectedOption: selectorOptions[tempOptionIndex],
            hasClicked,
        });
    }

    nextOptionWait(hasClicked) {
        if (!hasClicked) {
            /* wait half second for transition */
            setTimeout(() => this.nextOption(hasClicked), 200);
        } else {
            this.nextOption(hasClicked);
        }
    }

    updateClasses(index) {
        this.setState({
            selectedClasses: classes[index],
        });
    }

    render() {
        const { selectedOption, selectedClasses } = this.state;

        return (
            <EducationContainer>
                <HeaderText>University of California,<br />Los Angeles</HeaderText>
                <HeaderDetailText>BS, Computer Science & Engineering<br />Expected June 2020</HeaderDetailText>
                <Divider />
                <BodyContainer>
                    <Row>
                        <SubheaderText>Some of my</SubheaderText>
                        <SelectorContainer>
                            <BracketText>{`{`}</BracketText>
                            <SelectorText
                                onMouseEnter={() => this.nextOptionWait(false)}
                                onMouseLeave={this.exitPreview}
                                onClick={() => this.nextOptionWait(true)}
                            >
                                {selectedOption}
                            </SelectorText>
                            <BracketText>{`}`}</BracketText>
                        </SelectorContainer>
                        <SubheaderText>classes:</SubheaderText>
                    </Row>
                    <ListContainer>
                        <Column>
                            <UnorderedList>
                                <ListText>{selectedClasses[0]}</ListText>
                                <ListText>{selectedClasses[1]}</ListText>
                                <ListText>{selectedClasses[2]}</ListText>
                            </UnorderedList>
                        </Column>
                        <Column>
                            <UnorderedList>
                                <ListText>{selectedClasses[3]}</ListText>
                                <ListText>{selectedClasses[4]}</ListText>
                                { selectedClasses.length === 6 &&
                                    (
                                        <ListText>{selectedClasses[5]}</ListText>
                                    )
                                }
                                
                            </UnorderedList>
                        </Column>
                    </ListContainer>
                </BodyContainer>
            </EducationContainer>
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

const fadeOutIn = keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const EducationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const BodyContainer = styled.div`
    width: 640px;
`;

const BracketText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 32px;
    color: #D0E3F4;
    letter-spacing: 2px;
    margin: 20px 5px 0 5px;
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

const HeaderDetailText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-family: 'Roboto', sans-serif;
    font-size: 27px;
    font-style: italic;
    color: #000000;
    letter-spacing: 1px;
    line-height: 1.5;
    margin: 0 0 20px 0;
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
    margin: 20px 0 20px 0;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const SelectorContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 205px;
    align-items: center;
    justify-content: space-between;
`;

const SelectorText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 24px;
    color: #000000;
    letter-spacing: 2px;
    margin: 20px 0 0 0;
    font-style: italic;
    cursor: pointer;

    :hover {
        animation: ${fadeOutIn} ease 0.4s;
    }
`;

const SubheaderText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 24px;
    color: #000000;
    letter-spacing: 2px;
    margin: 20px 0 0 0;
`;

const UnorderedList = styled.ul`
    margin: 0 0 0 0;
    padding-left: 20px;
    height: 215px;
`;

export default Education;