import styled from "styled-components";
import media from "styled-media-query";

interface ContainerProps {
  isBlack: boolean;
}

export const Container = styled.header<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  z-index: 10;
  width: 100%;
  padding: 20px 40px;
  position: fixed;
  background: #141414;

  transition: background 0.8s;

  ${media.lessThan("medium")`
    padding: 20px 10px;
  `}
`;

export const RoutesMenu = styled.div`
  display: flex;
  align-items: center;

  img {
    width: auto;
    height: 30px;
    margin-right: 15px;
  }

  ul {
    list-style: none;

    display: flex;
    align-items: center;
    margin-left: 100px;

    li {
      font-size: 14px;
      color: #FFF;
      font-weight: 400;

      & + li {
        margin-left: 40px;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }
  ${media.lessThan("medium")`
    ul {
      display: none;
    }
  `}
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > svg {
    width: 22px;
    height: 22px;
    color: #FFF;
    margin-right: 30px;
  }

  button {
    display: flex;
    align-items: center;
    background: #FFFFFF;
    outline: none;
    padding: 10px;
    border-radius: 50px;

  }

  button p {
    background-color: #FFF;
  }

  ${media.lessThan("medium")`
    > svg {
      width: 20px;
      height: 20px;
      margin-right: 24px;
    }
    button {
      margin-right: 18px;
    }
  `}
`;
