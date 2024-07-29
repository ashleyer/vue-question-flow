<template>
  <div>
    <h2>Other Real Estate</h2>
    <form @submit.prevent="nextPage">
      <div>
        <label for="ownOtherRealEstate">Do you own any other type of real estate (e.g., vacation, rental, etc.)?</label>
        <select v-model="$root.formData.ownOtherRealEstate" required>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <NavigationButtons :currentStep="4" @nextStep="nextPage" @previousStep="previousPage" />
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
      let nextRoute = '/financial-goals';
      if (this.$root.formData.ownOtherRealEstate === 'yes') {
        nextRoute = '/real-estate-value';
      }

      if (this.$route.path !== nextRoute) {
        this.$router.push(nextRoute).catch(err => {
          if (err.name !== 'NavigationDuplicated') {
            throw err;
          }
        });
      }
    },
    previousPage() {
      const previousRoute = '/primary-residence';
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