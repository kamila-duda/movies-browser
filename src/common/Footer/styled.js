import styled from "styled-components";

export const StyledFooterContainer=styled.footer`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
padding: 20px 20px 10px;
margin-top: 10px;
color: ${({theme})=>theme.color.white};
background-color: ${({theme})=>theme.color.black};
`;
export const StyledCredits=styled.p`
font-size: 12px;
margin: 0;
padding:0;
`;
export const StyledAuthorsInfo=styled.p`
font-size: 12px;
margin: 0;
padding:0;
`;
export const StyledLink=styled.a`
text-decoration: none;
color: ${({theme})=>theme.color.blue};
`;