import styled from 'styled-components';
import Chart from '../components/Chart';
import FeaturedInfo from '../components/FeaturedInfo';
import { userData } from '../dummyData';

const Container = styled.div`
  flex: 4;
`;

export default function Home() {
  return (
    <Container>
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
    </Container>
  )
}
