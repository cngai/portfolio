import React, { Component } from 'react';
import styled from 'styled-components';

const exit = '/assets/cancel.png';
const next = '/assets/next-white.png';
const back = '/assets/back-white.png';

class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
        };

        this.closeModal = this.closeModal.bind(this);
        this.onBack = this.onBack.bind(this);
        this.onNext = this.onNext.bind(this);
    }

    closeModal() {
        const { onClose } = this.props;

        onClose();
    }

    onBack() {
        const { photoIndex } = this.state;

        this.setState({
            photoIndex: photoIndex - 1,
        });
    }

    onNext() {
        const { photoIndex } = this.state;

        this.setState({
            photoIndex: photoIndex + 1,
        });
    }

    render() {
        const { designs } = this.props;
        const { photoIndex } = this.state;

        let photos = designs.photos;

        return (
            <ModalContainer>
                <ButtonContainer>
                    <EmptyDiv />
                    {
                        (photoIndex !== 0) && (
                            <Arrow src={back} onClick={this.onBack} />
                        )
                    }
                    <EmptyDiv />
                </ButtonContainer>
                <InfoContainer>
                    <HeaderText>{designs.title}</HeaderText>
                    <PhotoContainer>
                        <Photo src={photos[photoIndex].url}/>
                    </PhotoContainer>
                    <DescriptionText>{photos[photoIndex].description}</DescriptionText>
                </InfoContainer>
                <ButtonContainer>
                    <Exit
                        src={exit}
                        onClick={this.closeModal}
                    />
                    {
                        (photoIndex !== photos.length - 1) && (
                            <Arrow src={next} onClick={this.onNext}/>
                        )
                    }
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

const Arrow = styled.img`
    height: 50px;
    margin: 20px;
    cursor: pointer;
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

const InfoContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Photo = styled.img`
    max-height: 70vh;
    max-width: 70vw;
    box-shadow: 10px 10px 20px #191919;
`;

const PhotoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    width: 70vw;
`;

export default Modal;