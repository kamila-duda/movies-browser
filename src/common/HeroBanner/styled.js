import styled from "styled-components";


export const MovieBanner = styled.section`
  max-width:100%;
  margin-top:80px;
  padding:10px;
  font-style: normal;
  background-color:${({ theme }) => theme.color.black};
  color:${({ theme }) => theme.color.white};
  display:flex;
  justify-content:center;
`;

export const Container = styled.div`
  margin-top:30px;
  position:relative;
  padding-left:20px;
  padding-right:20px;
`;

export const StyledImage = styled.img`
  max-width:100%;
`;

export const MovieHeader = styled.header`
  position:absolute;
  left: -1%;
  bottom:0px;
  margin-left:10px;
`;

export const MovieTitle = styled.h1`
  margin-bottom:24px;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.xxxLarge};

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.xlarge};
    margin-bottom:4px;
			}
  
`;

export const RatingHeader = styled.header`
  display:flex;
  flex-direction:column;
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSize.normal};

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-direction:row;
    align-items:center;
    font-size: ${({ theme }) => theme.fontSize.xxSmall};
    margin-bottom:4px;
			}
`;

export const StyledStarImage = styled.img`
  height:40px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height:16px;
			}
`;

export const Rating = styled.span`
  margin-left:8px;
  margin-right:8px;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.xxlarge};

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-left:4px;
    margin-right:4px;
    font-size: ${({ theme }) => theme.fontSize.small};
			}
`;

export const Votes = styled.span`
  margin-top:14px;
  font-size: ${({ theme }) => theme.fontSize.normal};


  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.xxSmall};
    margin-top:5px;
    margin-left:5px;
			}
`;