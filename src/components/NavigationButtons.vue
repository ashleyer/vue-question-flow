<template>
  <div>
    <button type="button" @click="$emit('previousStep')">Previous</button>
    <button type="button" v-if="showNext" @click="$emit('nextStep')">Next</button>
  </div>
</template>

<script>
export default {
  props: {
    currentStep: {
      type: Number,
      required: true
    },
    showNext: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped>
button  {
 margin-top: 100px;
 font-size: 25px;
 background-color: #2b126f;
 color: white;
 font-family: 'Courier New', Courier, monospace;
 }
</style>