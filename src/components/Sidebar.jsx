import styled, { css } from "styled-components"
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";

const SidebarContainer = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: rgb(251, 251, 255);
  /* fixing to the side of the page */
  position: sticky;
  top: 50px;
`;
const SidebarWrapper = styled.div`
  padding: 20px;
  color: #555;
`;
const SidebarMenu = styled.div`
  margin-bottom: 10px;
`;
const SidebarTitle = styled.h3`
  font-size: 13px;
  color: rgb(187, 186, 186);
`;
const SidebarList = styled.ul`
  list-style: none;
  padding: 5px;
`;
const SidebarListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  /* hover */
  &:hover {
    background-color: rgb(240, 240, 255);
  };
  /* styling active li */
  background-color: ${props => props.active ? css`rgb(240, 240, 255)` : 'rgb(251, 251, 255)'};

  /* Tutorial: 30:38 styling icons */
  /* .sidebarIcon{
    margin-right: 5px;
    font-size: 20px !important;
  } */
`;

export default function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarWrapper>

        <SidebarMenu>
          <SidebarTitle>Dashboard</SidebarTitle>
          <SidebarList>

            <SidebarListItem active>
              <LineStyle />
              Home
            </SidebarListItem>

            <SidebarListItem>
              <Timeline />
              Analytics
            </SidebarListItem>

            <SidebarListItem>
              <TrendingUp />
              Sales
            </SidebarListItem>

          </SidebarList>
        </SidebarMenu>

        <SidebarMenu>
          <SidebarTitle>Quick Menu</SidebarTitle>
          <SidebarList>

            <SidebarListItem>
              <PermIdentity />
              Users
            </SidebarListItem>

            <SidebarListItem>
              <Storefront />
              Products
            </SidebarListItem>

            <SidebarListItem>
              <AttachMoney />
              Transactions
            </SidebarListItem>

            <SidebarListItem>
              <BarChart />
              Reports
            </SidebarListItem>

          </SidebarList>
        </SidebarMenu>

        <SidebarMenu>
          <SidebarTitle>Notifications</SidebarTitle>
          <SidebarList>

            <SidebarListItem>
              <MailOutline />
              Mail
            </SidebarListItem>

            <SidebarListItem>
              <DynamicFeed />
              Feedback
            </SidebarListItem>

            <SidebarListItem>
              <ChatBubbleOutline />
              Messages
            </SidebarListItem>

          </SidebarList>
        </SidebarMenu>

        <SidebarMenu>
          <SidebarTitle>Staff</SidebarTitle>
          <SidebarList>

            <SidebarListItem>
              <WorkOutline />
              Manage
            </SidebarListItem>

            <SidebarListItem>
              <Timeline />
              Analytics
            </SidebarListItem>

            <SidebarListItem>
              <Report />
              Reports
            </SidebarListItem>

          </SidebarList>
        </SidebarMenu>

      </SidebarWrapper>
    </SidebarContainer>
  )
}
