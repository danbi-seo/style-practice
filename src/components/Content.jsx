import styled, { css } from 'styled-components';
import { flexContainer, mixinFont } from './mixin';

const colorYellow = '#d7fa00';
const colorGray = 'rgb(160, 160, 160)';

const ContentContainer = styled.div`
  ${flexContainer(
    'flex',
    'flex-start', 
    'flex-start', 
    'column',
    '5px',
    'nowrap', 
    0
    )}
    flex-grow: 1;
`;

const ContentImage = styled.img`
  width: 300px;
  border-radius: 10px;
  margin-bottom: 3px;
`;


const ContentSpan = styled.span`
  ${flexContainer(
    'flex',
    'flex-start', 
    'stretch', 
    'column',
    '0',
    'nowrap', 
    '4px 5px'
    )}
  ${mixinFont('12px', '400')}
  color: ${colorYellow};
  border: 1px solid ${colorYellow};
  border-radius: 3px;
`;


const ContentTitle = styled.div`
  ${mixinFont('18px', '600')}

`;

const ContentSubtitle = styled.p`
  ${mixinFont('12px', '400')} 
  color: ${colorGray};
`;



const Content = ({ content }) => {
  return (
    <ContentContainer>
      <ContentImage 
      // className="content-container"
      src={content.img} alt={content.title} />
      <ContentSpan>모집중</ContentSpan>
      <ContentTitle>{content.title}</ContentTitle>
      <ContentSubtitle>{content.subtitle}</ContentSubtitle>
    </ContentContainer>
  );
};

export default Content;