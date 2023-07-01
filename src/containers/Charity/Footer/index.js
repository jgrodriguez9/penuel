import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Logo from 'common/components/UIElements/Logo';
import Container from 'common/components/UI/Container';
import { Icon } from 'react-icons-kit'
import {phone} from 'react-icons-kit/fa/phone'
import FooterWrapper, {
  List,
  ListItem,
  CopyrightText,
  SocialList,
  SelectWrapper,
} from './footer.style';

import LogoImage from 'common/assets/image/charity/logoPenuel.png';
import { menuWidgets, socialLinks } from 'common/data/Charity';
import { PhoneWrapper } from 'common/components/Common/Phone';

const Footer = ({ row, col, colOne, colTwo }) => {
  return (
    <FooterWrapper>
      <Container width="1260px">
        <Box className="row" {...row} justifyContent={'space-between'}>
          <div style={{
            width: '200px',
          }}>
            <Logo
              className="logo"
              href="/"
              logoSrc={LogoImage}
              title="Penuel Counseling"
            />
          </div>
          <div> 
            <h3>Reserva una cita con nosotros</h3>
            <PhoneWrapper>
              <a href={`tel:9984565525`}>
                  <Icon icon={phone} /> 998-4565-525
              </a>
            </PhoneWrapper>
          </div>
        </Box>
        {/* End of widgets row */}
        <Box className="row copyright" {...row}>
          <CopyrightText>
            <Text
              className="text"
              content="© 2023 Penuel Counseling. All Rights Reserved"
            />
          </CopyrightText>
          {/* <SocialList>
            {socialLinks.map((item) => (
              <li className={item.name} key={`social__link-key${item.id}`}>
                <Link href={item.link}>
                  <a aria-label="social share link">{item.icon}</a>
                </Link>
              </li>
            ))}
          </SocialList> */}
        </Box>
        {/* End of copyright row */}
      </Container>
    </FooterWrapper>
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // Footer col one style
  colOne: {
    width: ['100%', '30%', '35%', '30%'],
    mt: [0, '13px', '0'],
    mb: ['30px', 0],
    pl: ['15px', 0],
    pr: ['15px', '15px', 0],
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '70%', '65%', '70%'],
    flexBox: true,
    flexWrap: 'wrap',
  },
  // Footer col default style
  col: {
    width: ['100%', '50%', '50%', '33.33%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
};

export default Footer;
