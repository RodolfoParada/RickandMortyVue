<template>
    <div class="container mt-4">
      <div class="row">
        <!-- Iteramos sobre los personajes para mostrar cada tarjeta -->
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
          v-for="character in characters"
          :key="character.id"
        >
          <CardCharacter :character="character" />
        </div>
      </div>
    </div>
  </template>


<script>
import {onMounted, computed} from 'vue';
import { useStore } from 'vuex';
import CardCharacter from './CardCharacter.vue';

export default{
    components:{
 CardCharacter
},
    setup(){
        
const store = useStore()
const characters = computed(()=>{
 return store.state.charactersFilter
})
onMounted(() =>{
    store.dispatch('getCharacters')
})
return {
   characters 
}

}

}

</script>
