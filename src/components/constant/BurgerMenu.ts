import styled from 'styled-components';
import { rgba } from 'polished';
import { colors } from './Colors';

export const OpenBurger = styled.div`
  &.burger-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 9;
    opacity: 0;
    transform: opacity 0.3s ease-in-out 0s, transform 0s ease-in-out 0.3s;
    transform: translate3d(100%, 0, 0);

    &.open-wrap {
      opacity: 1;
      transition: opacity 0.3s ease-in-out 0s !important;
      transform: translateZ(0) !important;
    }
  }
`;

export const MenuIcon = styled.div`
  width: 35px;
  height: 35px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  z-index: 9999;
  margin-left: 20px;
  @media screen and (min-width: 768px) {
    display: none;
    margin-left: 0;
  }
  .menu-icon {
    width: 30px;
    height: 3px;
    background: ${colors.primary};
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    &:before,
    &:after {
      content: '';
      position: absolute;
      right: 0;
      width: 25px;
      height: 3px;
      background: ${colors.primary};
      border-radius: 5px;
      transition: all 0.2s ease-in-out;
    }

    &:before {
      transform: translateY(-8px);
    }

    &:after {
      transform: translateY(8px);
    }
  }
`;
