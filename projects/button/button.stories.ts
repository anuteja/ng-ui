import { storiesOf } from '@storybook/angular';
import { ButtonComponent } from './lib/button.component';

storiesOf('Button', module)
  .add('basic', () => ({
    component: ButtonComponent,
    props: {
      text: 'Hello Button'
    }
  }))
  .add('disabled', () => ({
    component: ButtonComponent,
    props: {
      text: 'I am disabled',
      disabled: true
    }
  }));
