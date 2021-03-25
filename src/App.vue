<template>
  <main id="app">
    <router-view/>
  </main>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  background: #171711;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

a {
  color: lightgreen;
}

button {
  background: none;
  border: solid 3px white;
  border-radius: .5rem;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  padding: .5rem;
  transition: all .3s;
}

button:hover {
  background: white;
  color: #2c3e50;
}

#challenge-info-container {
  border-top: solid 1px white;
  margin: auto;
  max-width: 40rem;
}

@media all and (max-width: 560px) {
  #challenge-info-container {
    max-width: 90%;
  }
}

</style>
