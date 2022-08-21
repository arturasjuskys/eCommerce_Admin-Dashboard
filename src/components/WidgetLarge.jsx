import styled from "styled-components"

const Container = styled.div`
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  flex: 2;
  padding: 20px;
`;
const WidgetLargeTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;
const WidgetLargeTable = styled.table`
  width: 100%;
  border-spacing: 20px;
`;
const WidgetLargeTr = styled.tr``;
const WidgetLargeTh = styled.th`
  text-align: left;
`;
const WidgetLargeUser = styled.td`
  display: flex;
  align-items: center;
  font-weight: 600;
`;
const WidgetLargeImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
const WidgetLargeName = styled.span``;
const WidgetLargeDate = styled.td`
  font-weight: 300;
`;
const WidgetLargeAmount = styled.td`
  font-weight: 300;
`;
const WidgetLargeStatus = styled.td``;
const WidgetLargeButton = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 10px;
`;

export default function WidgetLarge() {
  const Button = ({type}) => {
    return <WidgetLargeButton className={'widgetLgButton ' + type}>{type}</WidgetLargeButton>
  };
  return (
    <Container>
      <WidgetLargeTitle>Lastest Transactions</WidgetLargeTitle>
      <WidgetLargeTable>
        <WidgetLargeTr>
          <WidgetLargeTh>Customer</WidgetLargeTh>
          <WidgetLargeTh>Data</WidgetLargeTh>
          <WidgetLargeTh>Amount</WidgetLargeTh>
          <WidgetLargeTh>Status</WidgetLargeTh>
        </WidgetLargeTr>

        <WidgetLargeTr>
          <WidgetLargeUser>
            <WidgetLargeImg src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <WidgetLargeName>Susan Carol</WidgetLargeName>
          </WidgetLargeUser>
          <WidgetLargeDate>2 Jun 2022</WidgetLargeDate>
          <WidgetLargeAmount>£122.00</WidgetLargeAmount>
          <WidgetLargeStatus>
            <Button type="Approved"></Button>
          </WidgetLargeStatus>
        </WidgetLargeTr>

        <WidgetLargeTr>
          <WidgetLargeUser>
            <WidgetLargeImg src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <WidgetLargeName>Susan Carol</WidgetLargeName>
          </WidgetLargeUser>
          <WidgetLargeDate>2 Jun 2022</WidgetLargeDate>
          <WidgetLargeAmount>£122.00</WidgetLargeAmount>
          <WidgetLargeStatus>
            <Button type="Pending"></Button>
          </WidgetLargeStatus>
        </WidgetLargeTr>

        <WidgetLargeTr>
          <WidgetLargeUser>
            <WidgetLargeImg src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <WidgetLargeName>Susan Carol</WidgetLargeName>
          </WidgetLargeUser>
          <WidgetLargeDate>2 Jun 2022</WidgetLargeDate>
          <WidgetLargeAmount>£122.00</WidgetLargeAmount>
          <WidgetLargeStatus>
            <Button type="Declined"></Button>
          </WidgetLargeStatus>
        </WidgetLargeTr>

        <WidgetLargeTr>
          <WidgetLargeUser>
            <WidgetLargeImg src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <WidgetLargeName>Susan Carol</WidgetLargeName>
          </WidgetLargeUser>
          <WidgetLargeDate>2 Jun 2022</WidgetLargeDate>
          <WidgetLargeAmount>£122.00</WidgetLargeAmount>
          <WidgetLargeStatus>
            <Button type="Approved"></Button>
          </WidgetLargeStatus>
        </WidgetLargeTr>

      </WidgetLargeTable>
    </Container>
  )
}
