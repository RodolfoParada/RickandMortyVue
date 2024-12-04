<template>
        <div class="card">
            <img :src="character.image" alt="character.name" class="card-img-top">
                <div class="card-body" >
                    <h5 class="card-title">{{ character.name }}</h5>
                    <p class="card-text">{{ character.status }} - {{ character.specie }}</p>
                    <p class="card-text">Origin: {{ character.origin.name }}</p>
                    <p class="card-text">Location: {{ character.location.name }}</p>
                </div>
        </div>
  </template>

<script>

export default{
    props: ['character']
}

</script>