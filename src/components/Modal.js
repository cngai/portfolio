import React, { Component } from 'react';
import styled from 'styled-components';

const exit = '/assets/cancel.png';
const next = '/assets/next-white.png';

class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
        };

        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        const { onClose } = this.props;

        onClose();
    }

    render() {
        const { designs } = this.props;
        const { photoIndex } = this.state;

        let photos = designs.photos;

        return (
            <ModalContainer>
                <ButtonContainer>
                </ButtonContainer>
                <PhotoContainer>
                    <HeaderText>{designs.title}</HeaderText>
                    <Photo src={photos[photoIndex].url}/>
                    <DescriptionText>{photos[photoIndex].description}</DescriptionText>
                </PhotoContainer>
                <ButtonContainer>
                    <Exit
                        src={exit}
                        onClick={this.closeModal}
                    />
                    <Next src={next} />
                    <EmptyDiv />
                </ButtonContainer>
            </ModalContainer>
        );
    }
}

const ModalContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.75);
    height: 100vh;
    width: 100vw;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 90px;
    height: 100vh;
`;

const DescriptionText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 2px;
    line-height: 1.5;
    margin: 20px 0 20px 0;
`;

const EmptyDiv = styled.div`
    height: 31px;
    width: 31px;
    margin: 20px;
`;

const Exit = styled.img`
    height: 31px;
    width: 31px;
    margin: 20px;
    cursor: pointer;
`;

const HeaderText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    font-size: 48px;
    color: #FFFFFF;
    letter-spacing: 2px;
    margin: 20px 0 20px 0;
`;

const Next = styled.img`
    height: 50px;
    margin: 20px;
    cursor: pointer;
`;

const Photo = styled.img`
    height: 400px;
`;

const PhotoContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export default Modal;