import { mount } from '@vue/test-utils'
import LfButton from './LfButton.vue'

describe('LfButton', () => {
  it('should be a "<button>" tag', () => {
    const wrapper = mount(LfButton);

    expect(wrapper.element.tagName).toBe('BUTTON');
  });

  it('should render default slot content', () => {
    const wrapper = mount(LfButton, {
      slots: {
        default: 'Label'
      }
    });

    expect(wrapper.text()).toBe('Label');
  });

  it('should render label when use "label" prop', () => {
    const wrapper = mount(LfButton, {
      propsData: {
        label: 'Label by prop'
      }
    });

    expect(wrapper.text()).toBe('Label by prop');
  });

  it('should render variant button when use "variant" prop', () => {
    const wrapper = mount(LfButton, {
      propsData: {
        variant: 'primary'
      }
    });

    expect(wrapper.classes()).toContain('lf-button--primary');
  });

  it('should render dark variant when use "dark" prop', () => {
    const wrapper = mount(LfButton, {
      propsData: {
        dark: true
      }
    });

    expect(wrapper.classes()).toContain('lf-button--dark');
  });

  it('should render disabled when use "disabled" prop', () => {
    const wrapper = mount(LfButton, {
      propsData: {
        disabled: true
      }
    });

    expect(wrapper.attributes('disabled')).toBe('disabled');
  });

  it('should emit "click" event when clicked', async () => {
    const wrapper = mount(LfButton);

    await wrapper.trigger('click');

    expect(wrapper.emitted().click).toBeTruthy();
  });
});
