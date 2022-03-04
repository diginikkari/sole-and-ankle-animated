import React from 'react';
import styled from 'styled-components/macro';
import { keyframes } from 'styled-components';

import { QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);

    return (
        <header>
            <SuperHeader />
            <MainHeader>
                <LogoWrapper>
                    <Logo />
                </LogoWrapper>
                <DesktopNav>
                    <NavLink href="/sale">
                        <LinkText className="inactive">Sale</LinkText>
                        <SelectedLinkText className="active">
                            Sale
                        </SelectedLinkText>
                    </NavLink>
                    <NavLink href="/new">
                        <LinkText className="inactive">
                            New&nbsp;Releases
                        </LinkText>
                        <SelectedLinkText className="active">
                            New&nbsp;Releases
                        </SelectedLinkText>
                    </NavLink>
                    <NavLink href="/men">
                        <LinkText className="inactive">Men</LinkText>
                        <SelectedLinkText className="active">
                            Men
                        </SelectedLinkText>
                    </NavLink>
                    <NavLink href="/women">
                        <LinkText className="inactive">Women</LinkText>
                        <SelectedLinkText className="active">
                            Women
                        </SelectedLinkText>
                    </NavLink>
                    <NavLink href="/kids">
                        <LinkText className="inactive">Kids</LinkText>
                        <SelectedLinkText className="active">
                            Kids
                        </SelectedLinkText>
                    </NavLink>
                    <NavLink href="/collections">
                        <LinkText className="inactive">Collections</LinkText>
                        <SelectedLinkText className="active">
                            Collections
                        </SelectedLinkText>
                    </NavLink>
                </DesktopNav>
                <MobileActions>
                    <ShoppingBagButton>
                        <Icon id="shopping-bag" />
                        <VisuallyHidden>Open cart</VisuallyHidden>
                    </ShoppingBagButton>
                    <UnstyledButton>
                        <Icon id="search" />
                        <VisuallyHidden>Search</VisuallyHidden>
                    </UnstyledButton>
                    <UnstyledButton onClick={() => setShowMobileMenu(true)}>
                        <Icon id="menu" />
                        <VisuallyHidden>Open menu</VisuallyHidden>
                    </UnstyledButton>
                </MobileActions>
                <Filler />
            </MainHeader>

            <MobileMenu
                isOpen={showMobileMenu}
                onDismiss={() => setShowMobileMenu(false)}
            />
        </header>
    );
};

const slideIn = keyframes`
  from {
    transform: translateY(100%);
    display: none;
  }
  to {
    transform: translateY(0%);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-100%);
  }
`;

const MainHeader = styled.div`
    display: flex;
    align-items: baseline;
    padding: 18px 32px;
    border-bottom: 1px solid var(--color-gray-300);
    overflow: auto;

    @media ${QUERIES.tabletAndSmaller} {
        justify-content: space-between;
        align-items: center;
        border-top: 4px solid var(--color-gray-900);
    }

    @media ${QUERIES.phoneAndSmaller} {
        padding-left: 16px;
        padding-right: 16px;
    }
`;

const DesktopNav = styled.nav`
    display: flex;
    gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
    margin: 0px 48px;

    @media ${QUERIES.tabletAndSmaller} {
        display: none;
    }
`;

const MobileActions = styled.div`
    display: none;

    @media ${QUERIES.tabletAndSmaller} {
        gap: 32px;
        display: flex;
    }

    @media ${QUERIES.phoneAndSmaller} {
        gap: 16px;
    }
`;

const LogoWrapper = styled.div`
    flex: 1;

    @media ${QUERIES.tabletAndSmaller} {
        flex: revert;
    }
`;

const ShoppingBagButton = styled(UnstyledButton)`
    transform: translateX(-2px);
`;

const Filler = styled.div`
    flex: 1;

    @media ${QUERIES.tabletAndSmaller} {
        display: none;
    }
`;

const NavLink = styled.a`
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--color-gray-900);
    font-weight: ${WEIGHTS.medium};
    position: relative;
    overflow: hidden;

    &:first-of-type {
        color: var(--color-secondary);
    }

    @media (prefers-reduced-motion: no-preference) {
        &:hover .active {
            transform: translateY(0%);
            transition: transform 200ms;
        }

        &:hover .inactive {
            transform: translateY(-100%);
            transition: transform 200ms;
        }
    }
`;

const LinkText = styled.span`
    display: inline-block;
    @media (prefers-reduced-motion: no-preference) {
        transition: transform 500ms;
    }
`;

const SelectedLinkText = styled.span`
    font-weight: bold;
    position: absolute;
    left: 0;
    transform: translateY(100%);
    @media (prefers-reduced-motion: no-preference) {
        transition: transform 500ms;
    }
`;

export default Header;
