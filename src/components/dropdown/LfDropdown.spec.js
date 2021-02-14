import { mount } from '@vue/test-utils';
import LfDropdown from './LfDropdown.vue';

describe('LfDropdown', () => {
  const dropdown = { ref: 'dropdown' };
  const dropdownButtonMain = { ref: 'buttonMain' };
  const dropdownButtonArrow = { ref: 'buttonArrow' };

  it('should render a main "button"', () => {
    const wrapper = mount(LfDropdown, {
      propsData: {
        label: 'Label',
      },
    });

    expect(wrapper.findComponent(dropdownButtonMain).exists()).toBe(true);
  });

  it('should render a "dropdown"', () => {
    const wrapper = mount(LfDropdown, {
      propsData: {
        label: 'Label',
      },
    });

    expect(wrapper.findComponent(dropdown).exists()).toBe(true);
  });

  it('should render value when use "label" prop', () => {
    const wrapper = mount(LfDropdown, {
      propsData: {
        label: 'Label by prop',
      },
    });

    expect(wrapper.findComponent(dropdownButtonMain).text()).toBe('Label by prop');
  });

  it('should render variant button when use "variant" prop', () => {
    const wrapper = mount(LfDropdown, {
      propsData: {
        label: 'Label',
        variant: 'primary',
      },
    });

    expect(wrapper.findComponent(dropdownButtonMain).classes()).toContain('lf-button--primary');
  });

  it('should render arrow button when use "split" prop', () => {
    const wrapper = mount(LfDropdown, {
      propsData: {
        label: 'Label',
        split: true,
      },
    });

    expect(wrapper.findComponent(dropdownButtonArrow).exists()).toBe(true);
  });


  it('should render disabled main button when use "disabled" prop', () => {
    const wrapper = mount(LfDropdown, {
      propsData: {
        label: 'Label',
        disabled: true,
      },
    });

    expect(wrapper.findComponent(dropdownButtonMain).attributes('disabled')).toBe('disabled');
  });

  it('should render variant arrow button when use "variant" and "split" props', () => {
    const wrapper = mount(LfDropdown, {
      propsData: {
        label: 'Label',
        split: true,
        variant: 'primary',
      },
    });

    expect(wrapper.findComponent(dropdownButtonArrow).classes()).toContain('lf-button--primary');
  });

  it('should render disabled arrow button when use "disabled" and "split" props', () => {
    const wrapper = mount(LfDropdown, {
      propsData: {
        label: 'Label',
        split: true,
        disabled: true
      }
    });

    expect(wrapper.findComponent(dropdownButtonArrow).attributes('disabled')).toBe('disabled');
  });

  it('should "dropdown" must be invisible when created', () => {
    const wrapper = mount(LfDropdown, {
      propsData: {
        label: 'Label',
      },
    });

    expect(wrapper.findComponent(dropdown).isVisible()).toBe(false);
  });

  it('should "dropdown" must be visible when click on main button', async () => {
    const wrapper = mount(LfDropdown, {
      propsData: {
        label: 'Label',
      },
    });

    await wrapper.findComponent(dropdownButtonMain).trigger('click');

    expect(wrapper.findComponent(dropdown).isVisible()).toBe(true);
  });

  it('should "dropdown" must be invisible when click on main button again', async () => {
    const wrapper = mount(LfDropdown, {
      propsData: {
        label: 'Label',
      },
    });

    await wrapper.findComponent(dropdownButtonMain).trigger('click');
    await wrapper.findComponent(dropdownButtonMain).trigger('click');

    expect(wrapper.findComponent(dropdown).isVisible()).toBe(false);
  });

  it('should "dropdown" must be invisible when click on dropdown content', async () => {
    const wrapper = mount(LfDropdown, {
      propsData: {
        label: 'Label',
      },
    });

    await wrapper.findComponent(dropdownButtonMain).trigger('click');
    await wrapper.findComponent(dropdown).trigger('click');

    expect(wrapper.findComponent(dropdown).isVisible()).toBe(false);
  });

  it('should "dropdown" must be visible when click on dropdown content when uses "closeOnClick" prop as false', async () => {
    const wrapper = mount(LfDropdown, {
      propsData: {
        label: 'Label',
        closeOnClick: false
      }
    });

    await wrapper.findComponent(dropdownButtonMain).trigger('click');
    await wrapper.findComponent(dropdown).trigger('click');

    expect(wrapper.findComponent(dropdown).isVisible()).toBe(true);
  });

  // TODO: Test close-on-clickoutside prop
  xit('should "dropdown" must be invisible when click outside dropdown', async () => {
    const div = document.createElement('div');
    const wrapper = mount(LfDropdown, {
      propsData: {
        label: 'Label',
        attachTo: div,
      },
    });

    expect(wrapper.findComponent(dropdown).isVisible()).toBe(false);
  });
});
