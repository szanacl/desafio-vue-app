<script setup lang="ts">
interface Props {
  title: string
  subTitle: string
  image: string
  hover?: boolean
}

interface Emits {
  (event: "on-click", ...args: any[]): void
}

const emit = defineEmits<Emits>()
const props = withDefaults(defineProps<Props>(), { hover: false })
const onClick = () => {
  emit('on-click')
}
</script>

<template>
  <div 
    class="max-w-sm rounded-lg border border-gray-200 bg-white shadow-md cursor-pointer"
    :class="[props.hover && 'hover:-mt-3']"
    @click="onClick">
    <slot name="image" v-bind="{image: props.image}">
      <img class="mx-auto -mt-6 w-52 rounded-t-lg" :src="props.image" :alt="props.title" />
    </slot>
    <slot name="body" v-bind="{...props}">
      <div class="-mt-7 p-5">
        <slot name="title" v-bind="{ title: props.title }">
          <h5 class="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900">{{ props.title }}</h5>
        </slot>
        <slot name="subTitle" v-bind="{subTitle: props.subTitle}">
          <p class="mb-3 text-center text-sm font-bold text-black">{{ props.subTitle }}</p>
        </slot>
        <slot name="footer" v-bind="{...props}">
          <button class="mt-11 inline-flex w-full items-center justify-center rounded-lg bg-gray-100 py-2 px-3 text-center text-sm font-medium text-gray-300 hover:bg-gray-200 hover:text-gray-500">{{ props.title }}</button>
        </slot>
      </div>
    </slot>
  </div>
</template>
