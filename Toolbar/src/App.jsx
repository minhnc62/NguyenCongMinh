import { useState } from 'react';
import './App.css';
import { Row, Col, Divider, Button } from 'antd';
import styled from "styled-components"
function App() {
  const [isShowa, setIsShowa] = useState(false);
  const [isShowb, setIsShowb] = useState(false);

  const showa = () => {
    setIsShowa(!isShowa);
  }
  const showb = () => {
    setIsShowb(!isShowb);
  }
  const Heading = styled.h1`
  color: red;
  `;
  const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  cursor: pointer;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
    `;
    // tạo nút mới kế thừa các thuộc tính từ đối tượng trong ngoặc tròn và thêm, sửa
    const ButtonLink = styled(Button) `
    background:palevioletred;
    color:blue;
    `;
  return (
    <div className="App">
      <Heading className="heading">Tool bar</Heading>

      <div className="toolbar">
        <Button onClick={() => showa()}>
          a
        </Button>
        <Button primary onClick={() => showb()}>
          b
        </Button>
        <ButtonLink  type="link">Link Button</ButtonLink>
      </div>
      <div className="text">
        <span> {isShowa ? "Hello a" : ""}</span>
        <span> {isShowb ? "Hello b" : ""}</span>

        <Divider orientation='left' > vidu row</Divider>
        <Row justify='center'>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
        </Row>


      </div>


    </div>
  )
}

export default App
