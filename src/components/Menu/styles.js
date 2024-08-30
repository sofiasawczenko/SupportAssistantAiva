import styled from 'styled-components';

export const MenuWrapper = styled.div`
  width: 25px;
  display: flex;
  flex-direction: column;
  background-color: #1B1B1B; 
  padding: 16px;
  position: fixed; 
  top: 0;
  right: 0;
  height: 100vh; 
`;

export const IconWrapper = styled.div`
  margin-bottom: 16px;
  cursor: pointer;

  .sidebar-icon {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    transition: transform 0.3s ease, color 0.3s ease;
  }

  &:hover .sidebar-icon {
    color: #40A2FF;
    transform: scale(1.2);
  }
`;


export const MenuTopIcons = styled.div`
  margin-bottom: 25rem;
  color: #0066CC;
`;