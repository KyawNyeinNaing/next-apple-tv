import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import tw from 'tailwind-styled-components';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';

// project imports
import { MenuIcon } from '@/components/constant';
import { Image, Text, Button, Dropdown, Responsive } from '@/components/common';
import useStyledTheme from '@/hooks/useStyled';
import useStickyHeader from '@/hooks/useStickyHeader';
import useResponsive from '@/hooks/useMediaQuery';

// module imports
import { menuOpen } from '@/store/modules/emitModule';
import { useAppSelector } from '@/store';
import { getToken } from '@/services/Auth';
import { getLocalStorageData } from '@/services/Auth';
import { logout } from '@/services/Auth';

type HeaderStyledProps = {
  sticky?: boolean;
  openMenu?: boolean;
  spMenuOpen?: boolean;
  ismobile: string;
};

const Header = () => {
  const { isMenuOpen } = useAppSelector(state => state.emit);

  const theme = useStyledTheme();
  const { isNavShowing } = useStickyHeader();
  const { isMobile } = useResponsive();
  const getUser = getLocalStorageData();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(menuOpen(!isMenuOpen));
  };

  return (
    <>
      <Close onClick={handleOpen} openMenu={isMenuOpen} className="fixed top-0 left-0 opacity-0 invisible" />
      <TWHeader sticky={!isMobile && isNavShowing} ismobile={isMobile?.toString()}>
        <Responsive query={{ minWidth: 768 }}>
          <div className="col-start-2 col-span-10">
            <div className={`flex items-center justify-between transition-all h-[88px]`}>
              <div className="flex items-center justify-between">
                <LinkStyled href="/" className="mr-[100px]">
                  Apple TV+
                </LinkStyled>
                <div className="flex items-center justify-start gap-x-[20px]">
                  <Link
                    href="/player"
                    className={`inline-block px-[16px] py-[8px] ${router.pathname === '/career' ? 'active' : ''}`}
                  >
                    <Text className="menu" size="md" weight="semilg" color="white">
                      Players
                    </Text>
                  </Link>
                </div>

                <div className="flex items-center justify-start gap-x-[20px]">
                  <Link
                    href="/player"
                    className={`inline-block px-[16px] py-[8px] ${router.pathname === '/career' ? 'active' : ''}`}
                  >
                    <Text className="menu" size="md" weight="semilg" color="white">
                      Store
                    </Text>
                  </Link>
                </div>

                <div className="flex items-center justify-start gap-x-[20px]">
                  <Link
                    href="/player"
                    className={`inline-block px-[16px] py-[8px] ${router.pathname === '/career' ? 'active' : ''}`}
                  >
                    <Text className="menu" size="md" weight="semilg" color="white">
                      Mac
                    </Text>
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-between lang">
                <Dropdown
                  name={getUser.userName}
                  className={`text-[#fff] hover:bg-[${theme.sky600}] hover:text-[${theme.white}] hover:rounded-[6px] ${
                    router.pathname === '/our-portfolio' ? 'active' : ''
                  }`}
                  panelClassName="w-[220px] bg-white"
                  mouseEnter={true}
                >
                  <p
                    className="cursor-pointer"
                    onClick={() => {
                      logout();
                      router.push('/login');
                    }}
                  >
                    Logout
                  </p>
                </Dropdown>
              </div>
            </div>
          </div>
        </Responsive>
        <Responsive query={{ maxWidth: 768 }}>
          <div className="col-span-12">
            <div className={`flex items-center justify-between transition-all h-[60px] px-[16px]`}>
              <Link href="/">
                <Image imageType="image" src="/vercel.svg" className="w-[50px] h-[50px]" alt="logo" />
              </Link>

              <MenuIcon onClick={handleOpen}>
                <div className="menu-icon" />
              </MenuIcon>
            </div>
          </div>
        </Responsive>
      </TWHeader>

      {/* onlu show in mobile view */}
      <TWMobileHeader $spMenuOpen={isMenuOpen} ismobile={isMobile?.toString()}>
        <Link href="/player" className="inline-block">
          <Text size="semilg" weight="lg" color="primary-100" onClick={handleOpen}>
            Players
          </Text>
        </Link>
        <Link href="/player" className="inline-block">
          <Text size="semilg" weight="lg" color="primary-100" onClick={handleOpen}>
            Store
          </Text>
        </Link>
        <Link href="/player" className="inline-block">
          <Text size="semilg" weight="lg" color="primary-100" onClick={handleOpen}>
            Mac
          </Text>
        </Link>
      </TWMobileHeader>
    </>
  );
};

export default Header;

const HeaderStyled = styled.header<HeaderStyledProps>`
  position: fixed;
  top: 0;
  background-color: ${props => props.ismobile === 'true' ? '#fff' : '#111'};
  z-index: 9;
  ${props => {
    return (
      props &&
      css`
        box-shadow: 0 2px 8px 0 rgba(16, 7, 104, 0.07);
        border-bottom-color: rgba(0, 0, 0, 0.05);
      `
    );
  }}
  & .active {
    background-color: ${props => props.theme.sky100};
    border-radius: 0.4rem;
    & .menu {
      color: ${props => props.theme.primary};
    }
  }
  & .lang {
    & .left:before {
      content: '';
      width: 1px;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      background: ${props => props.theme.primary['100']};
    }
  }
`;

const TWHeader = tw(props => <HeaderStyled {...props} />)<{ sticky?: boolean; ismobile: string; children: React.ReactNode }>`
  w-full
  transform
  ${props => (props.sticky ? '-translate-y-[100%]' : 'translate-y-0')}
  transition
  grid
  grid-cols-12
  z-[9]
  left-0
`;

const TWMobileHeader = tw(props => <HeaderStyled {...props} />)<{ $spMenuOpen?: any; ismobile: string; children: React.ReactNode }>`
  transform
  ${props => (props.$spMenuOpen ? 'translate-x-[0]' : 'translate-x-[100%]')}
  h-full
  transition-transform
  w-[70%]
  right-0
  flex flex-col space-y-[25px]
  p-[25px]
`;

const Close = styled.div<{ openMenu?: any }>`
  width: 30%;
  height: 100%;
  /* background-color: ${props => rgba(props.theme.gray['900'], 0.6)}; */
  position: fixed;
  z-index: 99;
  transition: opacity 0.15s ease, visibility 0.15s ease;
  ${({ openMenu }) =>
    openMenu &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;

const LinkStyled = styled(Link)`
  font-family: -apple-system, SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 21px;
  line-height: 1.14286;
  font-weight: 600;
  letter-spacing: 0.011em;
  color: #ffffff;
`;
