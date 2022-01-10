<template>
  <div>
    <div id="counter">
      Counter: {{counter}}
      <button @click="addCounter">addCounter</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    let counter = ref(0)

    const addCounter = () => {
      this.counter++
    }
  }
})
</script>
