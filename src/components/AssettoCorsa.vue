<template>
  <article id="assetto-corsa">
    <h1>Me dê um desafio - Assetto Corsa</h1>
    <button
      id="button-get-challenge"
      type="button"
      v-on:click="() => obterAleatorios()"
    >
      {{ circuito && carro ? 'Outra vez' : 'Sortear' }}
    </button>
    <section
      id="challenge-info-container"
      v-if="circuito && carro"
    >
      <figure>
        <h2>Circuito</h2>
        <img
          :src="imgCircuito.length > 0
            ? require(`../assets/img/circuitos/${imgCircuito}`)
            : defaultImage
          "
        >
        <p>{{ circuito || 'Não selecionado' }}</p>
      </figure>

      <figure>
        <h2>Carro</h2>
        <img
          :src="imgCarro.length > 0
            ? require(`../assets/img/carros/${imgCarro}`)
            : defaultImage
          "
        >
        <p>{{ carro || 'Não selecionado' }}</p>
      </figure>
    </section>
  </article>
</template>

<script>
import { obterElementoAleatorioArray } from 'formatadores';

// import { readXlsx } from '../utils/excel';
// import AssettoSheet from '../assets/xls/RANDOM ASSETO.xlsx';

import ListaCircuitos from '../utils/json/lista-circuitos.json';
import ListaCarros from '../utils/json/lista-carros.json';

import DefaultImage from '../assets/img/No-image-found.jpg';

export default {
  name: 'AssettoCorsa',
  data() {
    return {
      circuito: null,
      carro: null,
      defaultImage: DefaultImage,
      imgCircuito: null,
      imgCarro: null,
    };
  },
  methods: {
    obterCircuitoAleatorio: function obterCircuitoAleatorio() {
      return obterElementoAleatorioArray(ListaCircuitos);
    },
    obterCarroAleatorio: function obterCarroAleatorio() {
      return obterElementoAleatorioArray(ListaCarros);
    },
    obterAleatorios: function obterAleatorios() {
      this.circuito = this.obterCircuitoAleatorio().nome;
      this.carro = this.obterCarroAleatorio().nome;
      this.imgCircuito = this.obterCircuitoAleatorio().urlImagem;
      this.imgCarro = this.obterCarroAleatorio().urlImagem;
    },
  },
};
</script>

<style>
#button-get-challenge {
  margin-bottom: 1rem;
}

#challenge-info-container {
  display: flex;
}

figure {
  width: 50%;
}

figure > img {
  margin: auto;
  width: 100%;
}

figure > p {
  background: white;
  color: black;
  display: block;
  margin: 0;
  padding: 1rem;
  width: 100%;
}

</style>
