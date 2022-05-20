<template>
  <div class="w-full h-screen bg-gray-300 py-6 mx-auto flex flex-col">
    <div class="max-w-xl mt-10 mx-auto">
      <Card :title="poke.title" :subTitle="''" :image="poke .image">
        <template #image="{ image }">
          <img class="mx-auto w-36 h-36" :src="image" alt="" />
        </template>
      </Card>
      <div class=" mt-10">
        <GroupList class="max-w-sm rounded-lg border border-gray-200 bg-white shadow-md">
          <template v-for="(item, id) in listAbility" :key="id">
            <ItemList :description="item.effect" />
          </template>
        </GroupList>
      </div>
    </div>
    <div class="max-w-xl mx-auto mt-5 text-right">
      <button type="button" @click="$router.push('/')"
        class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Voltar</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import ServicePokemon from './../services/service'
import Card from '../components/Card.vue'
import GroupList from '../components/GroupList.vue'
import ItemList from '../components/ItemList.vue'
const route = useRoute()
const ability = ref()
const listAbility = ref();
const poke = ref({
  title: '',
  subTitle: '',
  image: ''
})
const getPokemon = async () => {
  const id = route.params.id;
  ability.value = await ServicePokemon.getById(id)
  listAbility.value = ability.value.effect_entries;
  return pokemonShow(ability.value)
}
const pokemonShow = (ability: any) => {
  const imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/' + ability.id + '.png'
  let obj = {
    id: ability.id,
    subTitle: ability.id,
    title: ability.name,
    image: imgUrl,
  }
  return obj
}

onMounted(async () => {  
  poke.value = await getPokemon()
})
</script>
