// Libraries
import styled from 'styled-components';

// Other Components
import HomeUser from './HomeUser';
import HomeCoinList from './HomeCoinList';

const HomeMain = () => {
  return (
    <Container>
      <HomeUser />
      <HomeCoinList />
    </Container>
  );
};

export default HomeMain;

// Styled Components
const Container = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  gap: 3%;
  padding-bottom: 10%;
`;
