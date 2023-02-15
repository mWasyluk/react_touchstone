import DragAndDropImage from 'assets/drag-and-drop.png'
import styled from 'styled-components';

const DragDropContainer = styled.div`
    background-color: #808080;

    display: flex;
    flex-direction: row;
    align-items: center;

    column-gap: 50px;
    padding: 5px 15px;
    opacity: 0.8;

    font-size: 0.9em;

    border-radius: 10px;
    border-style: dashed;
    border-color: #ccc;

    cursor: pointer;
`;

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
        height: 50px;
        padding: 5px;
        padding-right: 15px;
    }
`;

const FeaturedText = styled.span`
    text-decoration: underline;
    font-weight: 600;
`;

function DragDropView({ fileTypes = [] }) {
    return (
        <DragDropContainer>
            <DescriptionContainer>
                <img alt='drag-drop-img' src={DragAndDropImage}></img>
                <span>
                    <FeaturedText>Naciśnij, aby wybrać z dysku</FeaturedText> lub przesuń i upuść plik tutaj
                </span>
            </DescriptionContainer>
            <div>
                {fileTypes.map(type => <span key={type}>{type} </span>)}
            </div>
        </DragDropContainer>
    )
}

export default DragDropView;