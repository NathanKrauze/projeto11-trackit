import styled from "styled-components";

export const PageContainer = styled.div`
    margin-top: 70px;
`
export const Day = styled.h1`
    margin: 98px 0 0 17px;
    font-size: 23px;
    color: #126BA5;
`

export const ProgressText=styled.h2`
    margin: 6px 0 28px 17px;
    font-size: 18px;
    color: ${props => !props.progress ? "#BABABA" : "#8FC549"};
`