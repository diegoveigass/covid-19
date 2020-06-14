import styled, { css } from 'styled-components';

interface CardsProps {
  type?: 'deaths' | 'recovered' | 'info';
}

const colorTypeVariations = {
  deaths: css`
    background-color: #c53030;
  `,
  recovered: css`
    background-color: #2e656a;
  `,
  info: css`
    background-color: #63768d;
  `,
};

export const Container = styled.div`
  header {
    display: flex;
    align-items: center;
    justify-content: space-around;

    height: 150px;
    background: #63768d;

    @media (max-width: 900px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    img {
      height: 100px;
    }

    h1 {
      color: #fbfbfb;
    }
  }
`;

export const InputContainer = styled.div`
  flex: 1;

  display: flex;
  margin-top: 30px;
  justify-content: center;
  align-items: center;

  select {
    background: #f0f0f5;
    border-radius: 8px;
    padding: 16px 24px;
    font-size: 16px;
    width: 300px;
    color: #6c6c80;
    border: none;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 52vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  }
`;

export const Card = styled.div<CardsProps>`
  display: block;
  width: 350px;

  padding: 24px;

  ${props => colorTypeVariations[props.type || 'info']}

  border-radius: 10px;

  @media (max-width: 900px) {
    margin-bottom: 30px;
    width: 60%;
  }

  & + div {
    margin-left: 30px;
    @media (max-width: 900px) {
      margin-left: 0;
    }
  }

  h1 {
    font-size: 36px;
    text-align: center;
    color: #fbfbff;
  }

  span {
    display: block;
    font-size: 18px;
    text-align: center;
    color: #fbfbff;

    margin-top: 16px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  border-top: 1px solid #eee;

  justify-content: center;
  align-items: center;

  text-align: center;
  margin-bottom: 32px;

  @media (max-width: 900px) {
    text-align: center;
    margin-bottom: 16px;
  }

  h1 {
    margin-top: 16px;
    color: #fbfbff;
    margin-bottom: 16px;
  }

  h3 {
    color: #fbfbff;
  }
`;

export const Credits = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  padding: 16px;

  /* @media (max-width: 900px) {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  } */

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    font-weight: 500;
    color: #111;
    background-color: #fbfbfb;
    padding: 16px;
    width: 300px;
    border-radius: 10px;
  }
`;
