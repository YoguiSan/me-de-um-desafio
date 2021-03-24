<template>
  <article id="assetto-corsa">
    <h1>Me dê um desafio - Assetto Corsa</h1>
    <button
      type="button"
      v-on:click="() => obterAleatorios()"
    >
      Aleatório
    </button>
    <section>
      <h2>Circuito</h2>
      <p>{{ circuito || 'Não selecionado' }}</p>

      <h2>Carro</h2>
      <p>{{ carro || 'Não selecionado' }}</p>
    </section>
  </article>
</template>

<script>
import { obterElementoAleatorioArray } from 'formatadores';

// import { readXlsx } from '../utils/excel';
// import AssettoSheet from '../assets/xls/RANDOM ASSETO.xlsx';

import ListaCircuitos from '../utils/json/lista-circuitos.json';
import ListaCarros from '../utils/json/lista-carros.json';

export default {
  name: 'AssettoCorsa',
  data() {
    return {
      circuito: null,
      carro: null,
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
      this.circuito = this.obterCircuitoAleatorio();
      this.carro = this.obterCarroAleatorio();
    },
  },
};
</script>

