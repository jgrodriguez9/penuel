import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo from 'common/components/UIElements/Logo';
import Image from 'common/components/Image';
import Container from 'common/components/UI/Container';
import { Icon } from 'react-icons-kit'
import {phone} from 'react-icons-kit/fa/phone'
import NavbarWrapper, { MenuWrapper, Button } from './navbar.style';

import logoImage from 'common/assets/image/charity/logoPenuel.png';
import { width } from 'styled-system';
//import heartImage from 'common/assets/image/charity/heart-red.png';

const Navbar = () => {
  return (
    <NavbarWrapper className="navbar">
      <Container fullWidth={true}>
        <Logo
          href="/"
          logoSrc={logoImage}
          className="logo"
          title="Penuel Counseling"
        />
        <MenuWrapper>         
          <Button>
            <span className="text">
              <Icon icon={phone} /> 998-4565-525
            </span>
            {/* <Image src={heartImage?.src} alt="Charity Landing" /> */}
          </Button>
        </MenuWrapper>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
