<script setup lang="ts">
interface Props {
  description: string
}

const props = withDefaults(defineProps<Props>(), { hover: false })

</script>
<template>
  <!--<div class="rounded-lg border border-gray-200 bg-white shadow-md">-->
  <li class="relative md:flex-1 md:flex rounded-md">   
      <span class="px-6 py-4 flex items-center text-sm font-medium">
        <slot name="description" v-bind="{description: props.description}">
          <span class="ml-4 text-sm font-medium text-gray-900">{{props.description}}</span>
        </slot>
      </span>
  </li>
</template>