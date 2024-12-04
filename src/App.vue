<template>
 <div class="container">
    <h1 class="text-center">Rick and Morty</h1>
    <FilterByStatus/>
    <FilterByName />
    <ListCharacteres/>
 </div>
 </template>

<script>
import FilterByName from './components/FilterByName.vue';
import FilterByStatus from './components/FilterByStatus.vue';
import ListCharacteres from './components/ListCharacteres.vue';



export default {
  name: 'App',
  components: {
    ListCharacteres,
    FilterByStatus,
    FilterByName
  }
}
</script>

<style>

</style>
