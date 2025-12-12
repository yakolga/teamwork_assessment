import Accordion from '../Accordion/Accordion.vue';
import placeholder from '../../assets/images/placeholder.webp';

const mockData = {
  tag: 'PLAN',
  title: 'See challenges before they arise',
  items: [
    {
      title: 'Capacity planning',
      text: 'Get a clearer understanding of team resources with Workload and assign projects to team members with the capacity to deliver.',
      image: placeholder
    },
    {
      title: 'Schedule your goals',
      text: 'Plan and schedule your goals easily.',
      image: placeholder
    },
    {
      title: 'Estimated time',
      text: 'Estimate how long things will take.',
      image: placeholder
    }
  ]
};

export default {
  title: 'Sections/Accordion',
  component: Accordion
};

export const Default = () => ({
  components: { Accordion },
  setup() {
    return { data: mockData };
  },
  template: `<Accordion :data="data"></Accordion>`
});