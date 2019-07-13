import { storiesOf } from '@storybook/angular';

import { Welcome } from '@storybook/angular/demo';
import { ButtonComponent } from '../../projects/button';

storiesOf('Welcome', module).add('to Storybook', () => ({
  component: Welcome,
  props: {}
}));

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
