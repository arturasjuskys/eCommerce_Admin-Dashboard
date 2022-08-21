import styled from "styled-components";
import { Visibility } from "@material-ui/icons";

const Container = styled.div`
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  flex: 1;
  padding: 20px;
  margin-right: 20px;
`;
const WidgetSmallTitle = styled.span`
  font-size: 22px;
  font-weight: 600;
`;
const WidgetSmallList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const WidgetSmallListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`;
const WidgetSmallImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
const WidgetSmallUser = styled.div`
  display: flex;
  flex-direction: column;
`;
const WidgetSmallUserName = styled.span`
  font-weight: 600;
`;
const WidgetSmallUserTitle = styled.span`
  font-weight: 300;
`;
const WidgetSmallButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;
`;

export default function WidgetSmall() {
  return (
    <Container>
      <WidgetSmallTitle>New Members</WidgetSmallTitle>
      <WidgetSmallList>

        <WidgetSmallListItem>
          <WidgetSmallImg src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
          <WidgetSmallUser>
            <WidgetSmallUserName>Anna Keller</WidgetSmallUserName>
            <WidgetSmallUserTitle>Software Engineer</WidgetSmallUserTitle>
          </WidgetSmallUser>
          <WidgetSmallButton>
            <Visibility className="widgetSmIcon" />
            Display
          </WidgetSmallButton>
        </WidgetSmallListItem>

        <WidgetSmallListItem>
          <WidgetSmallImg src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
          <WidgetSmallUser>
            <WidgetSmallUserName>Anna Keller</WidgetSmallUserName>
            <WidgetSmallUserTitle>Software Engineer</WidgetSmallUserTitle>
          </WidgetSmallUser>
          <WidgetSmallButton>
            <Visibility className="widgetSmIcon" />
            Display
          </WidgetSmallButton>
        </WidgetSmallListItem>

        <WidgetSmallListItem>
          <WidgetSmallImg src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
          <WidgetSmallUser>
            <WidgetSmallUserName>Anna Keller</WidgetSmallUserName>
            <WidgetSmallUserTitle>Software Engineer</WidgetSmallUserTitle>
          </WidgetSmallUser>
          <WidgetSmallButton>
            <Visibility className="widgetSmIcon" />
            Display
          </WidgetSmallButton>
        </WidgetSmallListItem>

        <WidgetSmallListItem>
          <WidgetSmallImg src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
          <WidgetSmallUser>
            <WidgetSmallUserName>Anna Keller</WidgetSmallUserName>
            <WidgetSmallUserTitle>Software Engineer</WidgetSmallUserTitle>
          </WidgetSmallUser>
          <WidgetSmallButton>
            <Visibility className="widgetSmIcon" />
            Display
          </WidgetSmallButton>
        </WidgetSmallListItem>

        <WidgetSmallListItem>
          <WidgetSmallImg src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
          <WidgetSmallUser>
            <WidgetSmallUserName>Anna Keller</WidgetSmallUserName>
            <WidgetSmallUserTitle>Software Engineer</WidgetSmallUserTitle>
          </WidgetSmallUser>
          <WidgetSmallButton>
            <Visibility className="widgetSmIcon" />
            Display
          </WidgetSmallButton>
        </WidgetSmallListItem>

      </WidgetSmallList>
    </Container>
  )
}
