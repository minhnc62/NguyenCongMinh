import { useState } from 'react';
import { BoldOutlined, ItalicOutlined, UnderlineOutlined } from '@ant-design/icons'
//import { Row, Col, Divider} from 'antd';
import styled from "styled-components"

const Toolbar = () => {
    const [isShowBold, setIsShowaBold] = useState(false);
    const [isShowItalic, setIsShowbItalic] = useState(false);
    const [isShowUnderline, setIsShowUnderline] = useState(false);

    const showBold = () => {
        setIsShowaBold(!isShowBold);
        console.log(" Chữ viết đã in đậm");
    }
    const showItalic = () => {
        setIsShowbItalic(!isShowItalic);
        console.log(" Chữ viết đã in nghiêng");
    }
    const showUnderline = () => {
        setIsShowUnderline(!isShowUnderline);
        console.log(" Chữ viết đã Gạch chân");
    }

    const AppTollbar = styled.div`
  font-family: "Font Awesome 5 Free";
  
  `;
    const Heading = styled.h1`
  color: #414141;
  font-size: 26px;
  `;

    const Toolbar = styled.div`
  background:#efefef;

  
  `;
    const Button = styled.button`
  
  color: black;
  cursor: pointer;
  font-size: 16px;
  margin: 4px;
  padding: 6px 10px;
  border: 2px solid #efefef;
  &:hover{
      border: 2px solid #515c67
  }
    `;
    return <AppTollbar >
        <Heading className="heading">Tool bar</Heading>
        <Toolbar >
            <Button onClick={() => showBold()}>
                <BoldOutlined />
            </Button>
            <Button onClick={() => showItalic()}>
                <ItalicOutlined />
            </Button>
            <Button onClick={() => showUnderline()} ><UnderlineOutlined /></Button>
        </Toolbar>
        <div className="text">
            <span> {isShowBold ? " Chữ viết đã in đậm" : ""}</span>
            <span> {isShowItalic ? "Chữ viết đã in nghiêng" : ""}</span>
            <span> {isShowUnderline ? "Chữ viết đã gạch chân" : ""}</span>
        </div>
    </AppTollbar>
};

export default Toolbar;