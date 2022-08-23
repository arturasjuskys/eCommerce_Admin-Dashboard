import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Publish } from "@material-ui/icons";
import Chart from '../components/Chart';
import { productData } from '../dummyData';

const Container = styled.div`
  flex: 4;
  padding: 20px;
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ProductTitle = styled.h1``;
const AddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;
const ProductTop = styled.div`
  display: flex;
`;
const TopLeft = styled.div`
  flex: 1;
`;
const TopRight = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const InfoTop = styled.div`
  display: flex;
  align-items: center;
`;
const InfoImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;
const ProductName = styled.span`
  font-weight: 600;
`;
const InfoBottom = styled.div`
  margin-top: 10px;
`;
const InfoItem = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;
const InfoKey = styled.span``;
const InfoValue = styled.span`
  font-weight: 300;
`;
const ProductBottom = styled.div`
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;
const FormLeft = styled.div`
  display: flex;
  flex-direction: column;
  /* label selector */
  > label {
    margin-bottom: 10px;
    color: gray;
  }
  /* input selector */
  > input {
    margin-bottom: 10px;
    border: none;
    padding: 5px;
    border-bottom: 1px solid gray;
  }
  /* select selector */
  > select {
    margin-bottom: 10px;
  }
`;
const FormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Upload = styled.div`
  display: flex;
  align-items: center;
`;
const UploadImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;
const UpdateButton = styled.button`
  border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: darkblue;
  color:white;
  font-weight: 600;
  cursor: pointer;
`;

export default function Product() {
  return (
    <Container>
      <TitleContainer>
        <ProductTitle>Product</ProductTitle>
        <Link to="/newproduct">
          <AddButton>Create</AddButton>
        </Link>
      </TitleContainer>

      <ProductTop>
        <TopLeft>
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </TopLeft>
        <TopRight>
          <InfoTop>
            <InfoImg src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            <ProductName>Apple Airpods</ProductName>
          </InfoTop>
          <InfoBottom>
            <InfoItem>
              <InfoKey>id:</InfoKey>
              <InfoValue>123</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoKey>sales:</InfoKey>
              <InfoValue>5123</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoKey>active:</InfoKey>
              <InfoValue>yes</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoKey>in stock:</InfoKey>
              <InfoValue>no</InfoValue>
            </InfoItem>
          </InfoBottom>
        </TopRight>
      </ProductTop>

      <ProductBottom>
        <Form>
          <FormLeft>
            <label>Product Name</label>
            <input type="text" placeholder='Apple Airpods' />
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </FormLeft>
          <FormRight>
            <Upload>
              <UploadImg src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: 'none' }} />
            </Upload>
            <UpdateButton>Update</UpdateButton>
          </FormRight>
        </Form>
      </ProductBottom>
    </Container>
  )
}
