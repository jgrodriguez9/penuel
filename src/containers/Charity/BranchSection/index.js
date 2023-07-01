import React from 'react';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Tab, { Panel } from 'common/components/Tabs';
import SectionWrapper, { ContentWrapper } from './branchSection.style';

import { branchData } from 'common/data/Charity';

const BranchSection = () => {
  const title = (text) => {
    return { __html: text };
  };

  return (
    <SectionWrapper id="branch">
        {branchData.map((item) => (
          <div key={`about-${item.id}`}>
            <ContentWrapper>
              <Fade>
                <div className="image">
                  <Image src={item.image?.src} alt="Charity Landing" />
                </div>
              </Fade>
              <div className="content">
                <Heading as="h4" content={item.slogan} />
                <h2 dangerouslySetInnerHTML={title(item.title)} />
                <Text  dangerouslySetInnerHTML={title(item.description)} />
                {/* <Link href={item.linkUrl}>
                  <a className="learn__more-btn">
                    <span className="hyphen" />
                    <span className="btn_text">{item.linkText}</span>
                  </a>
                </Link> */}
              </div>
            </ContentWrapper>
          </div>
        ))}
    </SectionWrapper>
  );
};

export default BranchSection;
