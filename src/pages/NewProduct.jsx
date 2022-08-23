import styled from 'styled-components';

const Container = styled.div`
  flex: 4;
`;
const PageTitle = styled.h1``;
const Form = styled.form`
  margin-top: 10px;
`;
const FormItem = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  /* label selector */
  > label {
    color: gray;
    font-weight: 600;
    margin-bottom: 10px;
  }
  /* input selector */
  > input {
    padding: 10px;
  }
  /* select selector */
  > select {
    padding: 10px;
  }
`;
const CreateButton = styled.button`
  margin-top: 10px;
  padding: 7px 10px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

export default function NewProduct() {
  return (
    <Container>
      <PageTitle>New Product</PageTitle>
      <Form>
        <FormItem>
          <label>Image</label>
          <input type="file" id="file" />
        </FormItem>
        <FormItem>
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </FormItem>
        <FormItem>
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </FormItem>
        <FormItem>
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </FormItem>
        <CreateButton>Create</CreateButton>
      </Form>
    </Container>
  )
}
