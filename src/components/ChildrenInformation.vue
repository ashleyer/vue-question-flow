<template>
  <div>
    <h2>Children Information</h2>
    <form @submit.prevent="nextPage">
      <div>
        <label for="children">Do you have any children?</label>
        <select v-model="$root.formData.children" @change="handleChildrenChange" required>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div v-if="$root.formData.children === 'yes'">
        <label for="childrenCount">How many children do you have?</label>
        <input type="text" v-model="$root.formData.childrenCount" required />
      </div>
      <NavigationButtons :currentStep="3" @nextStep="nextPage" @previousStep="previousPage" />
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
      this.$router.push('/primary-residence').catch(err => {
        if (err.name !== 'NavigationDuplicated') {
          throw err;
        }
      });
    },
    previousPage() {
      let previousRoute = '/marital-status';
      if (this.$root.formData.maritalStatus === 'Married' || this.$root.formData.maritalStatus === 'Domestic Partner') {
        previousRoute = '/partner-information';
      }
      this.$router.push(previousRoute).catch(err => {
        if (err.name !== 'NavigationDuplicated') {
          throw err;
        }
      });
    },
    handleChildrenChange(event) {
      if (event.target.value === 'yes') {
        this.$root.formData.childrenCount = '';
      } else {
        delete this.$root.formData.childrenCount;
      }
    }
  }
};
</script>