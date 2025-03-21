// Libraries
import styled from 'styled-components';

// Other Components
import TradeInfo from './TradeInfo';
import TradeChart from './TradeChart';

const TradeMain = () => {
  return (
    <Container>
      <TradeInfo
        coinName={'KRW-BTC'}
        currentPrice={500000}
        changeSign={1}
        changeRate={'5.0'}
      />
      <TradeChart />
    </Container>
  );
};

export default TradeMain;

// Styled Components
const Container = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
