import { useState } from 'react';
import "./toolbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faItalic, faUnderline } from "@fortawesome/free-solid-svg-icons"
//import styled from "styled-components"
import Button from '../button/Button';
const Toolbar = ({ showBold, showItalic, showUnderline }) => {



    //     const Heading = styled.h1`
    //   color: #414141;
    //   font-size: 26px;
    //   `;

    //     const Toolbar = styled.div`
    //   background:#efefef;


    //   `;
    //     const Button = styled.button`

    //   color: black;
    //   cursor: pointer;
    //   font-size: 16px;
    //   margin: 4px;
    //   padding: 6px 10px;
    //   border: 2px solid #efefef;
    //   &:hover{
    //       border: 2px solid #515c67
    //   }
    //     `;
    return <div className='app-toolbar' >
        <div className="heading">Tool bar</div>
        <div className='toolbar' >
            <div>
                <Button icon={faBold} handleClick={showBold}>

                </Button>
                <Button icon={faItalic} handleClick={showItalic}>
                </Button>
                <Button icon={faUnderline} handleClick={showUnderline} >
                </Button>
            </div>
            <div>
                <Button icon={faBold} handleClick={showBold}>

                </Button>
                <Button icon={faItalic} handleClick={showItalic}>
                </Button>
                
            </div>

        </div>


    </div>
};

export default Toolbar;