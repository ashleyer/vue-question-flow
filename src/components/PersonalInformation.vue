<template>
  <div>
    <h2>Personal Information</h2>
    <form @submit.prevent="nextPage">
      <div>
        <label for="fullName">What is your full legal name?</label>
        <input type="text" v-model="$root.formData.fullName" required />
      </div>
      <div>
        <label for="birthYear">What is your birth year?</label>
        <input type="text" v-model="$root.formData.birthYear" required />
      </div>
      <div>
        <label for="maritalStatus">What is your marital status?</label>
        <select v-model="$root.formData.maritalStatus" required>
          <option>Single</option>
          <option>Married</option>
          <option>Divorced</option>
          <option>Widowed</option>
          <option>Domestic Partner</option>
        </select>
      </div>
      <div>
        <label for="children">Do you have any children?</label>
        <select v-model="$root.formData.children" @change="handleChildrenChange" required>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <NavigationButtons :currentStep="0" @nextStep="nextPage" @previousStep="previousPage" />
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
      if (this.$root.formData.children === 'yes') {
        this.$router.push('/children-information');
      } else if (this.$root.formData.maritalStatus !== 'Single') {
        this.$router.push('/partner-information');
      } else {
        this.$router.push('/primary-residence');
      }
    },
    previousPage() {
      this.$router.back();
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