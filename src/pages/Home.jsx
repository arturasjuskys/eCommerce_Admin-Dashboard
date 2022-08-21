import styled from 'styled-components';
import Chart from '../components/Chart';
import FeaturedInfo from '../components/FeaturedInfo';
import WidgetLarge from '../components/WidgetLarge';
import WidgetSmall from '../components/WidgetSmall';
import { userData } from '../dummyData';

const Container = styled.div`
  flex: 4;
`;
const HomeWidget = styled.div`
  display: flex;
  margin: 20px;
`;

export default function Home() {
  return (
    <Container>
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
      <HomeWidget>
        <WidgetSmall />
        <WidgetLarge />
      </HomeWidget>
    </Container>
  )
}
