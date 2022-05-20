<script setup lang="ts">
interface Props {
  value?: string
  modelValue?: string
  type?: 'text' | 'email' | 'password'
}
interface Emits {
  (event: "update:modelValue", ...args: any[]): void
  (event: "on-clear", ...args: any[]): void
}

const emit = defineEmits<Emits>()
const props = withDefaults(defineProps<Props>(), {
  value: '',
  type: 'text'
})

function handleInput(event: any) {
  emit('update:modelValue', event.target.value)
}

function onClear() {
  emit('on-clear')
}
</script>

<template>
  <div class="relative rounded-md shadow-sm">
    <input type="text"
      v-bind="$attrs"
      class="block w-full rounded-full border-2 border-gray-200 py-3 pr-10 pl-4 text-gray-500 placeholder-gray-300 outline-none focus:border-gray-300 focus:ring-gray-300 sm:text-sm"
      placeholder="Pesquise por nome ou código"
      :type="props.type"
      :value="props.modelValue"
      @input="handleInput"
      />
    <div @click="onClear" class="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-300 hover:text-gray-400" fill="none"
        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
  </div>
</template>