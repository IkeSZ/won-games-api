import styled from 'styled-components';

const Wrapper = styled.div`
  margin: auto;
  width: 41.6rem;
  padding: 20px 30px 25px 30px;
  border-radius: ${({ theme }) => theme.main.sizes.borderRadius};
  border-top: 2px solid ${({ theme }) => theme.main.colors.mediumBlue};
  background-color: #0A0D27;
  background-image: linear-gradient(to right, #0A0D27 , #0A0D30);
  box-shadow: 0 2px 4px 0 ${({ theme }) => theme.main.colors.darkGrey};
  border-color: #ff725f;

  label {
    color: #eee;
  }

  button {
    background: #ff725f;
    border-color: #ff725f;
  }
`;

export default Wrapper;
