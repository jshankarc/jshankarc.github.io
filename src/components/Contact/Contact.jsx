import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { networks } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="social-links">
            {networks &&
              networks.map((network) => {
                const { id, name, url } = network;
                return (
                  <a
                    key={id}
                    href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                  rel="noopener noreferrer"
                    target="_blank"
                    aria-label={name}
                  >
                    <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                  </a>
                );
              })}
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
