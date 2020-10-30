import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  color: ${({ theme }) => theme.color.black};
  width: 100%;
`;
