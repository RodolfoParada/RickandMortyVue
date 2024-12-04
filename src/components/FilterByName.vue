<template>



<div class="container mt-4">
    <!-- Filtro de búsqueda -->
    <div class="row mb-4">
      <div class="col-12">
        <input
          type="text"
          class="form-control"
          placeholder="Buscar por nombre el personaje"
          v-model="name"
          @keyup="filter()"
        />
      </div>
    </div>
   </div>
</template>

<script>
import {ref} from 'vue'
import {useStore} from 'vuex'
export default{
    setup(){
       const store = useStore() 
       const name = ref('')

       const filter = () => {
        store.dispatch('filterByName', name.value)
       }
       return {
        name, 
        filter
       }
    }

}
</script>