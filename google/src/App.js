import React from 'react';
import styled from 'styled-components';

const AppContainer = styled.body`
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #202124;
    color: white;
  `

const GooglePage = styled.div`
  text-align: center;
  padding: 50px 20px;
`;

const TopRightMenu = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
  align-items: center;
`;

const TopRightLink = styled.a`
  margin: 0 15px;
  color: #e8eaed;
  text-decoration: none;
  transition: text-decoration 0.2s ease-in-out;

  &:hover {
    text-decoration: underline;
  }
`;

const LoginButton = styled.button`
  background-color: #4285f4;
  border: none;
  border-radius: 8px;
  color: white;
  padding: 10px;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

const MainContent = styled.main`
  margin-top: 100px;
`;

const GoogleLogo = styled.img`
  width: 272px;
`;

const SearchBar = styled.div`
  margin-top: 20px;
`;

const SearchInput = styled.input`
  width: 500px;
  padding: 15px;
  border-radius: 30px;
  border: 1px solid #5f6368;
  background-color: #303134;
  color: white;
`;

const SearchButtons = styled.div`
  margin-top: 20px;
`;

const SearchButton = styled.button`
  margin: 10px;
  padding: 10px 20px;
  background-color: #303134;
  border: none;
  border-radius: 5px;
  color: #e8eaed;
  cursor: pointer;

  &:hover {
    background-color: #3c4043;
  }
`;

function App() {
  return (
    <AppContainer>
      <GooglePage>
        <TopRightMenu>
          <TopRightLink href="#">Gmail</TopRightLink>
          <TopRightLink href="#">이미지</TopRightLink>
          <LoginButton>로그인</LoginButton>
        </TopRightMenu>

        <MainContent>
          <GoogleLogo
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
            alt="Google Logo"
          />

          <SearchBar>
            <SearchInput type="text" />
            <SearchButtons>
              <SearchButton>Google 검색</SearchButton>
              <SearchButton>I'm Feeling Lucky</SearchButton>
            </SearchButtons>
          </SearchBar>
        </MainContent>
      </GooglePage>
    </AppContainer>
  );
}



export default App;
