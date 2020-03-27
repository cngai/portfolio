import React, { Component } from 'react';
import styled from 'styled-components';

const designs = [
    {
        'title': 'Adobe',
        'photos': [
            {'url': '/assets/designs/adobe/adobe-0.png', 'description': ''}
        ],
    },
    {
        'title': 'Wienerschnitzel',
        'photos': [
            {'url': '/assets/designs/wienerschnitzel/ws-0.png', 'description': ''}
        ],
    },
    {
        'title': 'Ocean Spray',
        'photos': [
            {'url': '/assets/designs/ocean_spray/os-0.png', 'description': ''}
        ],
    },
    {
        'title': 'AdTeam',
        'photos': [
            {'url': '/assets/designs/flyers/flyers-0.png', 'description': ''}
        ],
    },
    {
        'title': 'Misc',
        'photos': [
            {'url': '/assets/designs/misc/misc-0.jpg', 'description': ''}
        ],
    },
];

class Design extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    createGridItem(designObj) {
        let designs = designObj.designs;
        let idx = designObj.idx;
        let color = (idx % 2 === 0) ? '#D3D3D3' : '#D0E3F4';
        let isActive = (designs !== null);

        return (
            <GridItemContainer key={idx} isActive={isActive}>
                <GridItem color={color} isActive={isActive}>
                    {
                        isActive && (
                            <GridText overImage={false}>{designs.title.toUpperCase()}</GridText>
                        )
                    }
                </GridItem>
                {/* keep GridText and GridPhoto separate for purpose of GridPhoto being positioned in reference to GridItemContainer */}
                {
                    isActive && (
                        <GridText overImage={true}>{designs.title.toUpperCase()}</GridText>
                    )
                }
                {
                    isActive && (
                        <GridPhoto src={designs.photos[0].url} />
                    )
                }
            </GridItemContainer>
        );
    }

    renderRow(rowNum) {
        let gridItems = [];
        let numCategories = designs.length;

        /* top row */
        if (rowNum === 0) {
            if (numCategories < 3) {
                let numEmptyTop = 3 - numCategories;

                for (let i = 0; i < numCategories; i++) {
                    gridItems.push({
                        'designs': designs[i],
                        'idx': i,
                    });
                }

                for (let j = numCategories; j < numCategories + numEmptyTop; j++ ) {
                    gridItems.push({
                        'designs': null,
                        'idx': j,
                    });
                }
            } else {
                for (let k = 0; k < 3; k++) {
                    gridItems.push({
                        'designs': designs[k],
                        'idx': k,
                    });
                }
            }
        }
        /* bottom row */
        else {
            if (numCategories < 6) {
                let numEmptyBottom = -1;

                if (numCategories > 3) {
                    numEmptyBottom = 6 - numCategories;
                } else {
                    numEmptyBottom = 3;
                }

                for (let x = 3; x < numCategories; x++) {
                    gridItems.push({
                        'designs': designs[x],
                        'idx': x,
                    });
                }

                for (let y = numCategories; y < numCategories + numEmptyBottom; y++ ) {
                    gridItems.push({
                        'designs': null,
                        'idx': y,
                    });
                }
            } else {
                for (let z = 3; z < 6; z++) {
                    gridItems.push({
                        'designs': designs[z],
                        'idx': z,
                    });
                }
            }
        }

        return gridItems.map(this.createGridItem, this);
    }

    render() {
        return (
            <DesignContainer>
                <HeaderText>Things I've Designed:</HeaderText>
                <Divider />
                <BodyContainer>
                    <GridContainer>
                        <Row>
                            {this.renderRow(0)}
                        </Row>
                        <Row>
                            {this.renderRow(1)}
                        </Row>
                    </GridContainer>
                </BodyContainer>
            </DesignContainer>
        );
    }
}

const DesignContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const BodyContainer = styled.div`
    display: flex;
    width: 640px;
`;

const Divider = styled.div`
	width: 65px;
	height: 0;
	border-top: 10px solid #D0E3F4;
`;

const GridContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 320px;
    width: 639px;
    justify-content: space-between;
    margin-top: 25px;
`;

const GridItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 157px;
    width: 209px;
    position: absolute;
    z-index: 2;
    transition: opacity 0.6s;
    

    ${({ isActive }) => isActive && `
        :hover {
            opacity: 0;
        }
    `}
    
    ${({ color }) => `
        background-color: ${color};
    `}
`;

const GridItemContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 157px;
    width: 209px;

    ${({ isActive }) => isActive && `
        cursor: pointer;
    `}
`;

const GridPhoto = styled.img`
    height: 157px;
    width: 209px;
    position: absolute;
    object-fit: cover;
`;

const GridText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 2px;
    line-height: 1.5;
    margin: 0 0 0 0;
    z-index: 1;

    ${({ overImage }) => overImage && `
        text-shadow: 0px 0px 10px #000000;
    `}
        
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

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 157px;
`;

export default Design;