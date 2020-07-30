import React from 'react';
import Menu from '../../componentes/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../componentes/components/BannerMain';
import Carousel from '../../componentes/components/Carousel';
import Footer from '../../componentes/components/Footer';

function Home() {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="Esse vídeo é a minha busca em entender quais extensões VSCode vão me ajudar a programar mais rápido e ser mais produtivo. O bom é que este compilado serve para qualquer linguagem de programação, então se você está na busca de qual a melhor ide para programar ou qual melhor editor de código, o VS Code criado pela Microsoft vai ser uma ótima alternativa open source."
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        category={dadosIniciais.categorias[5]}
      />

      <Footer />

    </div>
  );
}

export default Home;
