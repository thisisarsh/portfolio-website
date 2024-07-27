import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Featured, Projects, Contact } from '@components';

const GradientBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none; /* Prevents interference with other elements */
  transition: background 0.2s ease;
  z-index: -1; /* Ensure it stays behind other content */
  background: radial-gradient(600px at 0px 0px, rgba(29, 78, 216, 0.15), transparent 80%);
`;

const StyledMainContainer = styled.main`
  counter-reset: section;
  position: relative; /* Ensure children are positioned correctly */
`;

const IndexPage = ({ location }) => {
  useEffect(() => {
    const handleMouseMove = event => {
      const { clientX, clientY } = event;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      const gradientElement = document.querySelector('#gradient-background');
      if (gradientElement) {
        gradientElement.style.background = `radial-gradient(600px at ${x}% ${y}%, rgba(29,78,216,0.15), transparent 80%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Layout location={location}>
      <GradientBackground id="gradient-background" />
      <StyledMainContainer className="fillHeight">
        <Hero />
        <About />
        <Jobs />
        <Featured />
        <Projects />
        <Contact />
      </StyledMainContainer>
    </Layout>
  );
};

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
