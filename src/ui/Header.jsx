import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { logout, selectAuth } from "../features/authentication/authSlice"; // Adjust the path as necessary

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 2.8rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.span`
  margin-right: 1rem;
  font-size: 1.2rem;
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--color-grey-300);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: var(--color-grey-700);
  margin-right: 1rem;
`;

const LogoutButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: var(--color-primary);
  color: #000000;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-primary-dark);
  }
`;

function Header() {
  const dispatch = useDispatch();
  const { isAuthenticated, user, loading, error } = useSelector(selectAuth);

  console.log('Auth State:', { isAuthenticated, user, loading, error }); // Debugging line

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <StyledHeader>
      <HeaderTitle></HeaderTitle>
      
        <UserSection>
          <UserName>{user?.name || "User"}</UserName>
          <UserAvatar>{user?.name?.charAt(0).toUpperCase() || "U"}</UserAvatar>
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </UserSection>
      
    </StyledHeader>
  );
}

export default Header;
