import styled from "styled-components";

const StyledHeader = styled.header`

    width: 100%;
    height: 72px;
    background: #151515;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    
    .container{
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .user{
        display: flex;

        background-color: aquamarine;
    }
    font-family: 'Passion One';
    font-style: normal;
    font-weight: 700;
    font-size: 49px;
    color: #FFFFFF;

`;

export {StyledHeader}