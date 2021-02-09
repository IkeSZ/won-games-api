import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: auto;
    width: 41.6rem;
    padding: 20px 30px 25px 30px;
    border-radius: ${theme.main.sizes.borderRadius};
    border-top: 2px solid ${theme.main.colors.mediumBlue};
    background-color: ${theme.main.colors.won.blueLight};
    box-shadow: 0 2px 4px 0 ${theme.main.colors.darkGrey};
    border-color: ${theme.main.colors.won.orangeLight};

    label {
      color: #eee;
    }

    button {
      background: ${theme.main.colors.won.orangeLight};
      border-color: ${theme.main.colors.won.orangeLight};
    }
  `}
`;

export default Wrapper;
