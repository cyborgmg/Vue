<template>
  <div>
    <h1 >{{titulo}}</h1>
    <ul>
      <li v-for="foto of fotos">
        <img :src="foto.url" :alt="foto.titulo">
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  data(){
    return{
      titulo: 'Alurapic', 
      fotos: [
        {
        url: 'https://www.anda.jor.br/wp-content/uploads/2016/12/entenda-o-que-significam-os-sons-e-linguagens-corporais-dos-cachorros.jpg',
        titulo: 'cachorro'
        },
        {
          url: 'https://www.anda.jor.br/wp-content/uploads/2016/12/entenda-o-que-significam-os-sons-e-linguagens-corporais-dos-cachorros.jpg',
          titulo: 'cachorrao'
        }
      ]
      
    }
  }
}
</script>

<style>

</style>
