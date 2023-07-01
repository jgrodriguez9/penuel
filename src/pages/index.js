import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { charityTheme } from 'common/theme/charity';
import ResetCSS from 'common/assets/css/style';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import Navbar from 'containers/Charity/Navbar';
import DrawerSection from 'containers/Charity/DrawerSection';
import BannerSection from 'containers/Charity/BannerSection';
import FeatureSection from 'containers/Charity/FeatureSection';
import BranchSection from 'containers/Charity/BranchSection';
import WorkSection from 'containers/Charity/WorkSection';
import MilestoneBlock from 'containers/Charity/MilestoneBlock';
import HumanityBlock from 'containers/Charity/HumanityBlock';
import PromotionBlock from 'containers/Charity/PromotionBlock';
import DonateSection from 'containers/Charity/DonateSection';
import MapSection from 'containers/Charity/MapSection';
import FundraiserSection from 'containers/Charity/FundraiserSection';
import BlogSection from 'containers/Charity/BlogSection';
import ClientBlock from 'containers/Charity/ClientBlock';
import Footer from 'containers/Charity/Footer';
import { GlobalStyle, CharityWrapper, ContentWrapper } from 'containers/Charity/charity.style';

const Charity = () => {
  return (
    <ThemeProvider theme={charityTheme}>
      <Fragment>
        {/* Start charity head section */}
        <Head>
          <title>Penuel Counseling</title>
          <meta name="Description" content="Descubra los servicios de terapia y asesoramiento proporcionados por el equipo de Penuel Counseling. 
		  									Nuestra práctica se enfoca en promover el bienestar mental, brindar apoyo a las personas que enfrentan desafíos y 
											facilitar el crecimiento personal. Explore nuestra amplia gama de servicios y dé un paso hacia la mejora de su 
											salud mental hoy" />
		   <meta name="keywords" content="psychologist, therapy, counseling, mental health, coushing, psicologo, terapia, salud mental, entranador" />
    	   <meta name="author" content="Penuel Counseling" />
          <meta name="theme-color" content="#FCF22B" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* Load google fonts */}
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap" rel="stylesheet" />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        {/* End of charity head section */}
        {/* Start charity wrapper section */}
        <CharityWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <Navbar />
          </Sticky>
          <DrawerProvider>
            <DrawerSection />
          </DrawerProvider>
          <ContentWrapper>
            <BannerSection />
			<WorkSection />
			<BranchSection />
			<BlogSection />

            {/* <FeatureSection />            
            <MilestoneBlock />
            <HumanityBlock />
            <PromotionBlock />
            <DonateSection />
            <MapSection />
            <FundraiserSection />            
            <ClientBlock /> */}
          </ContentWrapper>
          <Footer />
        </CharityWrapper>
        {/* End of charity wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};
export default Charity;
