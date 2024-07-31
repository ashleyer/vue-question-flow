import Vue from 'vue';
import Router from 'vue-router';
import PersonalInformation from '@/components/PersonalInformation.vue';
import MaritalStatus from '@/components/MaritalStatus.vue';
import PartnerInformation from '@/components/PartnerInformation.vue';
import ChildrenInformation from '@/components/ChildrenInformation.vue';
import PrimaryResidence from '@/components/PrimaryResidence.vue';
import OtherRealEstate from '@/components/OtherRealEstate.vue';
import RealEstateValue from '@/components/RealEstateValue.vue';
import PreviewPage from '@/components/PreviewPage.vue';
import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'personal-information',
      component: PersonalInformation
    },
    {
      path: '/marital-status',
      name: 'MaritalStatus',
      component: MaritalStatus
    },
    {
      path: '/partner-information',
      name: 'PartnerInformation',
      component: PartnerInformation
    },
    {
      path: '/children-information',
      name: 'ChildrenInformation',
      component: ChildrenInformation
    },
    {
      path: '/primary-residence',
      name: 'PrimaryResidence',
      component: PrimaryResidence
    },
    {
      path: '/other-real-estate',
      name: 'OtherRealEstate',
      component: OtherRealEstate
    },
    {
      path: '/real-estate-value',
      name: 'RealEstateValue',
      component: RealEstateValue
    },
    {
      path: '/preview',
      name: 'PreviewPage',
      component: PreviewPage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
});

export default router;