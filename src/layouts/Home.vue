<template>
  <div class="w-full min-h-screen mx-auto bg-gray-300">
    <div class="h-auto w-full sm:w-2/3 py-6 mx-auto">
      <div class="w-full mx-auto">
        <Input v-model="search" @on-clear="clearSearch" />
        <div class="mt-12 w-full mx-auto">
          <ListCard>
            <template v-for="(pokemon, index) in pokes" :key="index" @click="routerDetalhar(pokemon.id)">
              <Card :title="pokemon.title" :sub-title="'Cód: ' + pokemon.subTitle" :image="pokemon.image" @on-click="$router.push(`/detalhar/${pokemon.id}`)" hover>
                <template #image="{ image }">
                  <img class="mx-auto" :src="image" alt="">
                </template>
              </Card>
            </template>
          </ListCard>
        </div>
      </div>      
    </div>
  </div>
 
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useInfiniteScroll } from '@vueuse/core'
import ServicePokemon from './../services/service'
import ListCard from '../components/ListCard.vue';
import Card from '../components/Card.vue';
import Input from '../components/Input.vue';

const router = useRouter()
const listPokemons = ref<Array<any>>([]);
const pokes = computed(() => {
  if(search.value.length === 0) {
    return listPokemons.value
  }
  return listPokemons.value.filter(k => k.title.toLowerCase().includes(search.value.toLowerCase()) || k.id.toLowerCase().includes(search.value.toLowerCase()))
})
const search = ref('')
const offset = ref(0)
const limit = ref(20)
const clearSearch = () => {
  search.value = ''
}

const getPokemons = async (offset: number) => {
  if(offset >= 40) limit.value = 50 - offset 
  const list: Array<any> = [];
  const listNamePokemon = await ServicePokemon.getAll(limit.value, offset);
  listNamePokemon.results.forEach((item: any)=> {
    list.push(pokemonShow(item));
    return
  });
  listPokemons.value = [...listPokemons.value, ...list];
}

onMounted(async () => await getPokemons(offset.value))

useInfiniteScroll(window, async () => {
  if(listPokemons.value.length === 50) {
    return
  }
  offset.value += 20
  await getPokemons(offset.value)
  
}, {
  distance: 5
})

const pokemonShow = (item) => {
  const pokemonNumber = item.url.slice(30, 40).replace(/[^0-9]/g, '')//replace('https://pokeapi.co/api/v2/pokemon','').replace('/','')
  const imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/' + pokemonNumber.replace('/', '') + '.png'
  let obj = {
    id: pokemonNumber,
    subTitle: pokemonNumber,
    title: item.name,
    image: imgUrl
  }
  return obj;
}

</script>

