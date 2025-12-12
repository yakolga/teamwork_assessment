import type { Meta, StoryFn } from '@storybook/vue3';
import AccordionItem from '../AccordionItem/AccordionItem.vue';
import placeholder from '../../assets/images/placeholder.webp';

export default {
  title: 'Components/AccordionItem',
  component: AccordionItem,
  argTypes: {
    title: { control: 'text' },
    text: { control: 'text' },
    isOpen: { control: 'boolean' },
    image: { control: 'text' }
  }
} as Meta<typeof AccordionItem>;

const Template: StoryFn<typeof AccordionItem> = (args: Record<string, unknown>) => ({
  components: { AccordionItem },
  setup() { return { args }; },
  template: `
    <AccordionItem v-bind="args">
      <div>
      </div>
    </AccordionItem>
  `
});

export const Default = Template.bind({});
Default.args = {
  id: 0,
  title: 'Capacity planning',
  text: 'Get a clearer understanding of team resources with Workload...',
  isOpen: true,
  image: placeholder
};