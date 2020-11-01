import styled from "styled-components";

export const MovieBanner = styled.section`
  max-width: 100%;
  margin-top: 60px;
  padding: 10px;
  padding-top: 0px;
  padding-bottom: 0px;
  font-style: normal;
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-top: 108px;
  }
`;

export const Container = styled.div`
  margin-top: 0px;
  max-width: 1368px;
  position: relative;
  padding-left: 20px;
  padding-right: 20px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0px 0px 54px 74px rgba(0, 0, 0, 1);

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      box-shadow: inset 0px 0px 18px 30px rgba(0, 0, 0, 1);
    }

    @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
      box-shadow: inset 0px 0px 10px 20px rgba(0, 0, 0, 1);
    }
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MovieHeader = styled.header`
  position: absolute;
  left: 30px;
  bottom: 0px;
  z-index: 10;
`;

export const MovieTitle = styled.h1`
  margin-bottom: 24px;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.xxxLarge};

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    margin-bottom: 10px;
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.xlarge};
    margin-bottom: 4px;
  }
`;

export const RatingHeader = styled.header`
  display: flex;
  flex-direction: column;
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSize.normal};

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-direction: row;
    height: 50px;
    font-size: ${({ theme }) => theme.fontSize.xxSmall};
    margin-bottom: 4px;
  }
`;

export const StyledStarImage = styled.img`
  height: 40px;
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    height: 16px;
  }
`;

export const Rating = styled.span`
  margin-left: 8px;
  margin-right: 8px;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.xxlarge};
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: ${({ theme }) => theme.fontSize.normal};
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-left: 4px;
    margin-right: 4px;
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

export const Votes = styled.span`
  margin-top: 14px;
  margin-bottom: 56px;
  font-size: ${({ theme }) => theme.fontSize.normal};

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.xxSmall};
    margin-top: 6px;
    margin-left: 5px;
  }
`;
