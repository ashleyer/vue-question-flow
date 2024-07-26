import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  data: {
    formData: {
      fullName: '',
      birthYear: '',
      maritalStatus: '',
      children: '',
      partnerFullName: '',
      partnerBirthYear: '',
      childrenCount: '',
      ownPrimaryResidence: '',
      primaryResidenceMailing: '',
      primaryResidenceValue: '',
      ownOtherRealEstate: '',
      otherRealEstateValue: '',
      futureRealEstate: '',
      financialGoals: '',
      realEstateValue: ''
    }
  },
  render: h => h(App)
}).$mount('#app');