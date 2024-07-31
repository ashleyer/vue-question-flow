<template>
  <div>
    <h2>Primary Residence</h2>
    <form @submit.prevent="nextPage">
      <div>
        <label for="ownPrimaryResidence">Do you own your primary residence?</label>
        <select v-model="$root.formData.ownPrimaryResidence" required>
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
      let nextRoute = 'real-estate-value';
      if (this.$root.formData.ownPrimaryResidence === 'no') {
        nextRoute = 'other-real-estate';
      }

      if (this.$route.path !== nextRoute) {
        this.$router.push(nextRoute).catch(err => {
          if (err.name !== 'NavigationDuplicated') {
            throw err;
          }
        });
      }
    }
  }
};
</script>