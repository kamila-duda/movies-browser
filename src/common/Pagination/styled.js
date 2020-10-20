import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ButtonWrapper = styled.div`
    max-width:525px;
    margin-top:40px;
    margin-left:auto;
    margin-right:auto;
    display:flex;
    justify-content:center;
		align-items:center;
`;

export const StyledButton = styled.button`
    margin: 0px 12px 0px 0px;
    background-color:${({ theme }) => theme.color.lightBlue};
    color:${({ theme }) => theme.color.black};
    padding:10px 16px;
    border-radius: 5px;
    border:none;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    display:flex;
    justify-content:center;
    align-items:center;

    &:hover{
        cursor:pointer;
        background-color:${({ theme }) => theme.color.spindle};
    }

    ${({ disabled }) => disabled && css`
        background-color:${({ theme }) => theme.color.gray};

        &:hover{
        cursor:default;
        background-color:${({ theme }) => theme.color.gray};
    }
    `}

    ${({ last }) => last && css`
        margin-right:0px;
		`}
		
		@media (max-width: ${({ theme }) => theme.media.mobile}) {
			margin: 0px 8px 0px 0px;
			padding:8px 12px;
			}
`;

export const PageCounter = styled.p`
    margin-left:12px;
    margin-right:4px;
    color:${({ theme }) => theme.color.darkedGray};
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
		
		@media (max-width: ${({ theme }) => theme.media.mobile}) {
			margin: 0px 4px 0px 0px;
			}
`;

export const Quantity = styled.span`
    color:${({ theme }) => theme.color.black};
    margin-left:8px;
    margin-right:8px;
    font-weight: 600;
    font-size: 16px;
		line-height: 150%;
		
		@media (max-width: ${({ theme }) => theme.media.mobile}) {
			margin-left:2px;
    	margin-right:2px;
			}
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    margin-right:8px;
    font-size:20px;
    font-weight:600;
    color:${({ theme }) => theme.color.blue};

    ${({ disabled }) => disabled && css`
        color:${({ theme }) => theme.color.darkedGray};
		`}

		${({ formobile }) => formobile && css`
        display:none;
		`}

		@media (max-width: ${({ theme }) => theme.media.mobile}) {
			margin-right:0px;

			${({ disabled }) => disabled && css`
        color:${({ theme }) => theme.color.darkedGray};
		`}
			${({ formobile }) => formobile && css`
        display:inline;
		`}
			}
`;

export const PaginationText = styled.span`
		@media (max-width: ${({ theme }) => theme.media.mobile}) {
				display:none;
			}
`;