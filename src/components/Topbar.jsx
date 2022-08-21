import styled from 'styled-components';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

const TopbarContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  /* topbar fixed position */
  position: sticky;
  top: 0;
  z-index: 999;
`;
const TopbarWrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TopLeftContainer = styled.div``;
const Logo = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: darkblue;
  cursor: pointer;
`;
const TopRightContainer = styled.div`
  display: flex;
  align-items: center;
`;
const TopbarIconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 10px;
  color: #555;
`;
const TopbarIconBadge = styled.span`
  width: 15px;
  height: 15px;
  position: absolute;
  top: -5px;
  right: 0px;
  background-color: red;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;
const TopAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

export default function Topbar() {
  return (
    <TopbarContainer>
      <TopbarWrapper>

        <TopLeftContainer>
          <Logo>sfMove Admin</Logo>
        </TopLeftContainer>

        <TopRightContainer>
          <TopbarIconContainer>
            <NotificationsNone></NotificationsNone>
            <TopbarIconBadge>2</TopbarIconBadge>
          </TopbarIconContainer>

          <TopbarIconContainer>
            <Language></Language>
            <TopbarIconBadge>2</TopbarIconBadge>
          </TopbarIconContainer>

          <TopbarIconContainer>
            <Settings></Settings>
          </TopbarIconContainer>

          <TopAvatar src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""></TopAvatar>

        </TopRightContainer>
      </TopbarWrapper>
    </TopbarContainer>
  )
}
