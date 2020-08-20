import React, { Component } from 'react';
import styled from 'styled-components';
import Swipe from 'react-easy-swipe';
import info from '../info';

const classes = info.classes;

class MobileEducation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currSelectorIndex: 0,
            contentContainerWidth: 0,
        };

        this.onSwipeLeft = this.onSwipeLeft.bind(this);
        this.onSwipeRight = this.onSwipeRight.bind(this);
    }

    componentDidMount() {
        let contentContainer = document.getElementById('ContentContainer');

        this.setState({
            contentContainerWidth: contentContainer.offsetWidth,
        });
    }

    createDot(dotObj) {
        let isFilled = dotObj.filled;
        let idx = dotObj.idx;

        return (
            isFilled ?
            <DotFilled key={idx} />
            :
            <Dot key={idx} />
        );
    }

    onSwipeLeft() {
        const { currSelectorIndex } = this.state;

        if ((currSelectorIndex + 1) <= (classes.length - 1)) {
            this.setState({
                currSelectorIndex: currSelectorIndex + 1,
            });
        }
    }

    onSwipeRight() {
        const { currSelectorIndex } = this.state;

        if ((currSelectorIndex - 1) >= 0) {
            this.setState({
                currSelectorIndex: currSelectorIndex - 1,
            });
        }
    }

    renderDots() {
        const { currSelectorIndex } = this.state;

        let dots = [];

        for (let i = 0; i < classes.length; i++) {
            let isFilled = currSelectorIndex === i;
            dots.push({
                'filled': isFilled,
                'idx': i, 
            });
        }

        return dots.map(this.createDot, this);
    }

    render() {
        const { currSelectorIndex, contentContainerWidth } = this.state;
        const { height } = this.props;

        const classList = classes[currSelectorIndex];
        const tapeContainerWidth = 90;
        const selectorTapeOffset = currSelectorIndex * tapeContainerWidth;
        const listTapeOffset = currSelectorIndex * contentContainerWidth;

        return (
            <EducationContainer height={height} >
                <ContentContainer id='ContentContainer'>
                    <HeaderText>University of California,<br />Los Angeles</HeaderText>
                    <HeaderDetailText>BS, Computer Science & Engineering<br />Graduated June 2020</HeaderDetailText>
                    <Divider />
                    <BodyContainer>
                        <Row>
                            <SubheaderText>Some of my</SubheaderText>
                            <SelectorContainer>
                                <BracketText>{`{`}</BracketText>
                                <TapeContainer>
                                    <SelectorTape offset={selectorTapeOffset}>
                                        <SelectorText>favorite</SelectorText>
                                        <SelectorText>challenging</SelectorText>
                                        <SelectorText>creative</SelectorText>
                                    </SelectorTape>
                                </TapeContainer>
                                <BracketText>{`}`}</BracketText>
                            </SelectorContainer>
                            <SubheaderText>classes:</SubheaderText>
                        </Row>
                        <Swipe
                            onSwipeLeft={this.onSwipeLeft}
                            onSwipeRight={this.onSwipeRight}
                        >
                            <ListContainer width={contentContainerWidth}>
                                <ListTape offset={listTapeOffset}>
                                    <ListSlide width={contentContainerWidth}>
                                        <UnorderedList>
                                            <ListText>{classList[0]}</ListText>
                                            <ListText>{classList[1]}</ListText>
                                            <ListText>{classList[2]}</ListText>
                                            <ListText>{classList[3]}</ListText>
                                            <ListText>{classList[4]}</ListText>
                                            { classList.length === 6 &&
                                                (
                                                    <ListText>{classList[5]}</ListText>
                                                )
                                            }
                                        </UnorderedList>
                                    </ListSlide>
                                    <ListSlide width={contentContainerWidth}>
                                        <UnorderedList>
                                                <ListText>{classList[0]}</ListText>
                                                <ListText>{classList[1]}</ListText>
                                                <ListText>{classList[2]}</ListText>
                                                <ListText>{classList[3]}</ListText>
                                                <ListText>{classList[4]}</ListText>
                                                { classList.length === 6 &&
                                                    (
                                                        <ListText>{classList[5]}</ListText>
                                                    )
                                                }
                                        </UnorderedList>
                                    </ListSlide>
                                    <ListSlide width={contentContainerWidth}>
                                        <UnorderedList>
                                            <ListText>{classList[0]}</ListText>
                                            <ListText>{classList[1]}</ListText>
                                            <ListText>{classList[2]}</ListText>
                                            <ListText>{classList[3]}</ListText>
                                            <ListText>{classList[4]}</ListText>
                                            { classList.length === 6 &&
                                                (
                                                    <ListText>{classList[5]}</ListText>
                                                )
                                            }
                                        </UnorderedList>
                                    </ListSlide>
                                </ListTape>
                            </ListContainer>
                        </Swipe>
                    </BodyContainer>
                    <DotsContainer>
                        {this.renderDots()}
                    </DotsContainer>
                </ContentContainer>
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
    background-color: #ffffff;

    ${({ height }) => `
        height: ${height}px;
    `}
`;

const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const BracketText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 20px;
    color: #D0E3F4;
    letter-spacing: 2px;
    margin: 15px 5px 0 5px;
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

const Dot = styled.div`
    height: 5px;
    width: 5px;
    border-radius: 5px;
    margin: 0 5px 0 5px;
    border: 1px solid #D0E3F4;
`;

const DotFilled = styled.div`
    height: 5px;
    width: 5px;
    border-radius: 5px;
    border: 1px solid #D0E3F4;
    background-color: #D0E3F4;
    margin: 0 5px 0 5px;
`;

const DotsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 15px 0 0 0;
`;

const HeaderText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    font-size: 25px;
    color: #000000;
    letter-spacing: 2px;
    margin: 15px 0 15px 0;
`;

const HeaderDetailText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    font-style: italic;
    color: #000000;
    letter-spacing: 1px;
    line-height: 1.5;
    margin: 0 0 15px 0;
`;

const ListContainer = styled.div`
    display: flex;
    position: relative;
    overflow: hidden;
    height: 120px;
    
    ${({ width }) => `
        width: ${width}px;
    `}
`;

const ListSlide = styled.div`
    display: flex;
    flex-direction: column;

    ${({ width }) => `
        width: ${width}px;
    `}
`;

const ListTape = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    transition: left 0.4s;

    ${({ offset }) => `
        left: -${offset}px;
    `}
`;

const ListText = styled.li`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
    color: #000000;
    letter-spacing: 2px;
    line-height: 2.0;
    margin: 0;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const SelectorContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 130px;
    align-items: center;
    justify-content: space-between;
`;

const SelectorTape = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    transition: left 0.4s;

    ${({ offset }) => `
        left: -${offset}px;
    `}
`;

const SelectorText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 12px;
    color: #000000;
    letter-spacing: 2px;
    margin: 0;
    font-style: italic;
    width: 90px;
    text-align: center;
`;

const SubheaderText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 12px;
    color: #000000;
    letter-spacing: 2px;
    margin: 15px 0 0 0;
`;

const TapeContainer = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 29px;
    overflow: hidden;
    margin: 15px 0 0 0;
    align-items: center;
`;

const UnorderedList = styled.ul`
    margin: 0 0 0 0;
    padding-left: 20px;
`;

export default MobileEducation;