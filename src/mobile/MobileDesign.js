import React, { Component } from 'react';
import styled from 'styled-components';
import info from '../info';

const designs = info.designs;

class MobileDesign extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    };

    createGridItem(designObj) {
        const {
            designs,
            idx,
            colNum,
        } = designObj;

        const isActive = (designs !== null);
        let color = null;

        if (colNum === 0) {
            const leftRowIndex = idx / 2;
            color = (leftRowIndex % 2 === 0) ? '#D3D3D3' : '#D0E3F4';
        } else {
            const rightRowIndex = (idx - 1) / 2;
            color = (rightRowIndex % 2 === 1) ? '#D3D3D3' : '#D0E3F4';
        }
        
        return (
            <GridItem key={idx} color={color} >
                {
                    isActive && (
                        <GridText>{designs.title.toUpperCase()}</GridText>
                    )
                }
            </GridItem>
        );
    }

    renderColumn(colNum) {
        let gridItems = [];
        const numCategories = designs.length;
        const numTiles = 6;

        /* left column */
        if (colNum === 0) {
            if (numCategories < 5) {
                let numEmptyLeft = 3 - Math.ceil(numCategories / 2);

                for (let i = 0; i < numCategories; i += 2) {
                    gridItems.push({
                        'designs': designs[i],
                        'idx': i,
                        'colNum': 0,
                    });
                }

                for (let j = numCategories; j < numCategories + numEmptyLeft; j += 2 ) {
                    gridItems.push({
                        'designs': null,
                        'idx': j,
                        'colNum': 0,
                    });
                }
            } else {
                for (let k = 0; k < numTiles; k += 2) {
                    gridItems.push({
                        'designs': designs[k],
                        'idx': k,
                        'colNum': 0,
                    });
                }
            }
        }
        /* right column */
        else {
            if (numCategories < 6) {
                let numEmptyRight = -1;

                if (numCategories > 1) {
                    numEmptyRight = 3 - Math.floor(numCategories / 2);
                } else {
                    numEmptyRight = 3;
                }

                for (let x = 1; x < numCategories; x += 2) {
                    gridItems.push({
                        'designs': designs[x],
                        'idx': x,
                        'colNum': 1,
                    });
                }

                for (let y = numCategories; y < numCategories + numEmptyRight; y += 2) {
                    gridItems.push({
                        'designs': null,
                        'idx': y,
                        'colNum': 1,
                    });
                }
            } else {
                for (let z = 1; z < numTiles; z += 2) {
                    gridItems.push({
                        'designs': designs[z],
                        'idx': z,
                        'colNum': 1,
                    });
                }
            }
        }

        return gridItems.map(this.createGridItem, this);
    }

    render() {
        const { height } = this.props;

        return (
            <DesignContainer height={height} >
                <ContentContainer>
                    <HeaderText>Things I've Designed:</HeaderText>
                    <Divider />
                    <GridContainer>
                        <LeftColumn>
                            {this.renderColumn(0)}
                        </LeftColumn>
                        <RightColumn>
                            {this.renderColumn(1)}
                        </RightColumn>
                    </GridContainer>
                </ContentContainer>
            </DesignContainer>
        );
    }
}

const DesignContainer = styled.div`
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

const GridContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 15px 0 0 0;
`;

const GridItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    width: 100%;
    margin: 0 0 10px 0;
    
    ${({ color }) => `
        background-color: ${color};
    `}
`;

const GridText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 10px;
    color: #FFFFFF;
    letter-spacing: 2px;
    line-height: 1.5;
    margin: 0 0 0 0;
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

const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 0 5px 0 0;
`;

const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 0 0 0 5px;
`;

export default MobileDesign;