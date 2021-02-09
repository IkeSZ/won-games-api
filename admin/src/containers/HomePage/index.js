import React, { memo } from 'react';

import { Container } from './components';

import logoImg from '../../assets/images/won-games-wallpaper.png';

const HomePage = () => {
  return (
    <>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <img src={logoImg} alt="Imagem de um controle e WON escrito ao lado direito" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);
