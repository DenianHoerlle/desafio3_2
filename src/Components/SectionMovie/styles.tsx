import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px 0;

  position: relative;
  /* Corta o conteúdo quando ele estourar as bordas do componente */
  overflow-x: hidden;
  overflow-y: hidden;

  h1 {
    z-index: 7;
    color: #FFF;
  }

  > button {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
    z-index: 6;
    background: rgba(20, 20, 20, 0.8);
    border: 0;

    svg {
      width: 40px;
      height: 40px;
      color: #ffffff;
    }

    visibility: visible;
  }

  ${media.lessThan("medium")`
    padding: 10px 20px 0;

    /* overflow: scroll;
    -webkit-overflow-scrolling: touch; */
    h1 {
      font-size: 28px;
    }
    > button {
      svg {
        width: 25px;
        height: 25px;
        color: #FFFFFF;
      }

      &:hover {
        svg {
          width: 30px;
          height: 30px;
        }
      }
    }
  `}
`;

export const ContentMovies = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;

  transition: margin-left 1s;
`;

export const Movie = styled.div`
  position: relative;
  height: auto;
  width: 200px;

  img {
    position: relative;
    z-index: 5;
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.6s;
  }

  &:hover {
    cursor: pointer;
  }
  p{
    color: #FFF;
    padding: 0 10px;
  }
`;

export const ButtonLetf = styled.button`
  left: 0;
`;

export const ButtonRight = styled.button`
  right: 0;
`;