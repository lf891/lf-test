import { mount } from '@vue/test-utils';
import LfDropdownItem from './LfDropdownItem.vue';

describe('LfDropdownItem', () => {
  it('should render a "<a>" tag', () => {
    const wrapper = mount(LfDropdownItem);

    expect(wrapper.element.tagName).toBe('A');
  });

  it('should render default slot content', () => {
    const wrapper = mount(LfDropdownItem, {
      slots: {
        default: 'Label',
      },
    });

    expect(wrapper.text()).toBe('Label')
  });

  it('should render value when use "value" prop', () => {
    const wrapper = mount(LfDropdownItem, {
      propsData: {
        label: 'Label',
      },
    });

    expect(wrapper.text()).toBe('Label');
  });

  it('should render default "href" attribute value as "undefined"', () => {
    const wrapper = mount(LfDropdownItem);

    expect(wrapper.attributes('href')).toBeUndefined();
  });

  it('should render "href" attribute when use "href" prop', () => {
    const wrapper = mount(LfDropdownItem, {
      propsData: {
        href: 'https://contaazul.com/',
      },
    });

    expect(wrapper.attributes('href')).toBe('https://contaazul.com/')
  });

  it('should render default "target" attribute value as "_self"', () => {
    const wrapper = mount(LfDropdownItem);

    expect(wrapper.attributes('target')).toBe('_self');
  });

  it('should render "target" attribute value as "_blank" when use "newTab" prop', () => {
    const wrapper = mount(LfDropdownItem, {
      propsData: {
        newTab: true,
      },
    });

    expect(wrapper.attributes('target')).toBe('_blank');
  });

  it('should emit "click" event when clicked', async () => {
    const wrapper = mount(LfDropdownItem);

    await wrapper.trigger('click');

    expect(wrapper.emitted().click).toBeTruthy();
  });
});
