<template>
  <div class="container text-center mt-4">
    <div class="filter d-flex justify-content-center">
      <div class="item d-inline-block mx-3 py-2 px-4 rounded cursor-pointer bg-light text-dark" @click="filter('')">
      All
      </div>
      <div class="item mx-3 py-2 px-4 rounded cursor-pointer bg-light text-dark" @click="filter('Alive')">
      Alive
      </div>
      <div class="item mx-3 py-2 px-4 rounded cursor-pointer bg-light text-dark" @click="filter('Dead')">
      Dead
      </div>
      <div class="item mx-3 py-2 px-4 rounded cursor-pointer bg-light text-dark" @click="filter('unknown')">
      Unknown
      </div>
    </div>

  </div>

</template>

<script>
import {useStore} from 'vuex'
export default {
setup(){
    const store = useStore()
    
    const filter = ((status) =>{
        store.dispatch('filterByStatus', status)
    })
    return {
        filter
    }
}

}
</script>

<style scoped>
.item {
  cursor: pointer; /* Cambia el cursor cuando se pasa sobre los items */
  transition: all 0.3s ease; /* Añade una animación para la transición de colores */
}

.item:hover {
  transform: scale(1.1); /* Aumenta ligeramente el tamaño al pasar el mouse */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Efecto de sombra al hacer hover */
}
</style>