import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:100%;
    height:100%;
    background-color: ${props=>props.bgcolor ? props.bgcolor : "#DEFECD" };
    min-width:10px;
    min-height:10px;
`;

const Content = ({children, bgcolor}) => {
    return <Container bgcolor={bgcolor}> 
        {children}
        </Container>

}


Content.defaultProps = {
    bgcolor : "#DEFECD"
}
export default Content;