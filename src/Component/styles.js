import styled from 'styled-components';

export const FluidContainer = styled.div`
  background-color: #F0F5F9;
  min-height: 100vh;
`;

export const Spinner = styled.div`
  border: 8px solid #e8e8e8;
  border-top: 8px solid #37A0FF;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const SectionContainer = styled.div`
  border: 1px solid #37A0FF;
  border-radius: 0.24rem;
  padding-bottom: 1.44rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  max-width: 1440px;
  background-color: #F0F5F9;
  margin: 0 auto;
  padding: 1.44rem;
  & > ${SectionContainer}:first-child {
    margin-bottom: 1.44rem;
    height: 106px;
  }

  @media only screen and (max-width: 991.92px) {
    padding: 1rem;
    & > ${SectionContainer}:first-child {
      height: 160px;
    }
  }
`;

export const SectionHeading = styled.div`
  text-transform: capitalize;
  font-weight: bold;
  letter-spacing: 0.8px;
  background-color: #37A0FF;
  color: #FFFFFF;
  margin-bottom: 1.44rem;
  padding: 1rem;
`;

export const Input = styled.input`
  height: 32px;
  padding: 0 0.72rem;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  letter-spacing: 0.4px;
  &::placeholder {
    font-size: 14px;
    letter-spacing: 0.4px;
  };
  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.6px;
  height: 32px;
  margin-left: 1.44rem;
  color: #FFFFFF;
  letter-spacing: 0.4px;
  background-color: #37A0FF;
  border: none;
  border-radius: 4px;
  padding: 0 1rem;
  transition: background-color 0.2s ease-in;
  &:hover {
    cursor: pointer;
    background-color: #0078e6;
  }
  &:focus {
    outline: none;
  }

  @media only screen and (max-width: 991.92px) {
    margin-left: 0;
    margin-top: 1.44rem;
  }
`;

export const SearchDiv = styled.div`
  display: flex;
  padding: 0 1rem;
  transition: all 0.1s linear;
  @media only screen and (max-width: 991.92px) {
    flex-direction: column;
    padding: 0 1rem;
  }
`;

export const CardContent = styled.div`
  padding: 1.44rem 1.44rem 0 1.44rem;

  @media only screen and (max-width: 991.92px) {
    padding: 1rem 1rem 0 1rem;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const ViewRepoButton = styled.a`
  display: block;
  text-decoration: none;
  letter-spacing: 0.6px;
  color: #000000;
  font-weight: 600;
  padding: 1.44rem;
  text-transform: uppercase;
  text-align: center;
  background-color: #FFFFFF;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
  };
  & span {
    padding: 1.44rem 0;
    box-shadow: inset 0px 7px 3px -8px #9b9b9b;
  };
`;

export const RepoCardContainer = styled.div`
  flex-basis: 31%;
  margin-bottom: 1.44rem;
  background-color: #FFFFFF;
  box-shadow: 0 0 1px rgba(0,0,0,0.02);
  &:hover {
    cursor: pointer;
  }
  &:hover ${ViewRepoButton}{
    background-color: #37A0FF;
    & span {
      box-shadow: none;
      color: #FFFFFF;
    }
  }

  @media only screen and (max-width: 991.92px) {
    flex-basis: 100%;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > ${RepoCardContainer}:nth-child(3n+2) {
    margin-right: 1.44rem;
    margin-left: 1.44rem;
  }

  @media only screen and (max-width: 991.92px) {
    & > ${RepoCardContainer}:nth-child(3n+2) {
      margin-right: 0;
      margin-left: 0;
    }
  }
`;


export const Avatar = styled.div`
  height: 8rem;
  width: 8rem;
  margin: 0 auto;
  border-radius: 50%;
  box-shadow: 0px 0px 25px -12px rgba(0,0,0,0.8);
  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }
`;

export const RepoName = styled.div`
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0.6px;
  margin: 2rem 0 1.44rem 0;
  text-align: center;
`;

export const Pill = styled.div`
  padding: 0.24rem 0.4rem;
  border: 1px solid #d9d9d9;
  border-radius: 1rem;
  font-weight: 500;
  svg {
    height: 0.72rem;
    width: 0.72rem;
    position: relative;
    top: 1px;
  }
  & > span:nth-child(2) {
    padding: 0 0.24rem;
  }

  @media only screen and (max-width: 991.92px) {
    padding: 0.4rem 0.4rem;
    flex-basis: 100%;  
  }
`;

export const PillsContainer = styled.div`
  letter-spacing: 0.2px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  & > ${Pill}:nth-child(2) {
    margin-left: 0.48rem;
    margin-right: 0.48rem;
  }
  @media only screen and (max-width: 1280px) {
    font-size: 13px;
  }

  @media only screen and (max-width: 991.92px) {
    flex-wrap: wrap; 
    text-align: center;
    & > ${Pill}:not(:last-child) {
      flex-basis: 42%;  
    }
    & > ${Pill}:nth-child(2) {
      margin-left: 0.48rem;
      margin-right: 0;
    }
    & > ${Pill}:last-child {
      margin-top: 1rem;
    }
  }
`;


export const RepoDescription = styled.div`
  letter-spacing: 0.4px;
  margin-bottom: 2rem;
  line-height: 1.5;
`;

export const CardContainerDiv = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 991.92px) {
    padding: 0 1rem;
  }
`;

export const NonDataMsg = styled.div`
  font-weight: bold;
  letter-spacing: 0.8px;
  color: #bfbfbf;
`;
