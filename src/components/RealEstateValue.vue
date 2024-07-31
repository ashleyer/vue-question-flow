<template>
  <div>
    <h2>Real Estate Value</h2>
    <form @submit.prevent="nextPage">
      <div>
        <label for="realEstateValue">What is the approximate value of your primary real estate?</label>
        <input type="text" v-model="$root.formData.realEstateValue" required />
      </div>
      <NavigationButtons :currentStep="6" @nextStep="nextPage" @previousStep="previousPage" />
    </form>
  </div>
</template>

<script>
import NavigationButtons from './NavigationButtons.vue';

export default {
  components: {
    NavigationButtons
  },
  methods: {
    nextPage() {
      const nextRoute = '/other-real-estate';
      if (this.$route.path !== nextRoute) {
        this.$router.push(nextRoute).catch(err => {
          if (err.name !== 'NavigationDuplicated') {
            throw err;
          }
        });
      }
    },
    previousPage() {
      let previousRoute = '/real-estate-value';
      if (this.$root.formData.ownPrimaryResidence === 'yes') {
        previousRoute = '/primary-residence' ;
      }

      if (this.$route.path !== previousRoute) {
        this.$router.push(previousRoute).catch(err => {
          if (err.name !== 'NavigationDuplicated') {
            throw err;
          }
        });
      }
    }
  }
};
</script>