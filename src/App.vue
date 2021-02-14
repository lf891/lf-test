<template>
  <div id="app">
    <div class="lf-container">
      <h2>LfDropdown</h2>
      <h3>default</h3>
      <div class="lf-grid">
        <div
          class="lf-grid__col"
          v-for="variant in dropdownVariants"
          :key="variant"
        >
          <lf-dropdown
            :label="capitalize(variant)"
            :variant="variant"
          >
            <lf-dropdown-item href="https://www.contaazul.com/">https://www.contaazul.com/</lf-dropdown-item>
            <lf-dropdown-item href="https://www.contaazul.com/" new-tab>https://www.contaazul.com/(New Tab)</lf-dropdown-item>
            <lf-dropdown-item @click="dropdownItemClick">dropdownItemClick()</lf-dropdown-item>
          </lf-dropdown>
        </div>
      </div>

      <hr class="lf-divider">

      <h3>split prop</h3>
      <div class="lf-grid">
        <div
          class="lf-grid__col"
          v-for="variant in dropdownVariants"
          :key="variant"
        >
          <lf-dropdown
            label="Split"
            :variant="variant"
            split
            @click="mainButtonClick"
          >
            <lf-dropdown-item href="https://www.contaazul.com/">https://www.contaazul.com/</lf-dropdown-item>
            <lf-dropdown-item href="https://www.contaazul.com/" new-tab>https://www.contaazul.com/(New Tab)</lf-dropdown-item>
            <lf-dropdown-item @click="dropdownItemClick">dropdownItemClick()</lf-dropdown-item>
          </lf-dropdown>
        </div>
      </div>

      <hr class="lf-divider">

      <h3>close-on-click="false" prop</h3>
      <div class="lf-grid">
        <div
          class="lf-grid__col"
          v-for="variant in dropdownVariants"
          :key="variant"
        >
          <lf-dropdown
            :label="capitalize(variant)"
            :variant="variant"
            :close-on-click="false"
            split
          >
            <lf-dropdown-item href="https://www.contaazul.com/">https://www.contaazul.com/</lf-dropdown-item>
            <lf-dropdown-item href="https://www.contaazul.com/" new-tab>https://www.contaazul.com/(New Tab)</lf-dropdown-item>
            <lf-dropdown-item @click="dropdownItemClick">dropdownItemClick()</lf-dropdown-item>
          </lf-dropdown>
        </div>
      </div>

      <hr class="lf-divider">

      <h3>close-on-click-outside="false" prop</h3>
      <div class="lf-grid">
        <div
          class="lf-grid__col"
          v-for="variant in dropdownVariants"
          :key="variant"
        >
          <lf-dropdown
            :label="capitalize(variant)"
            :variant="variant"
            :close-on-click-outside="false"
            split
          >
            <lf-dropdown-item href="https://www.contaazul.com/">https://www.contaazul.com/</lf-dropdown-item>
            <lf-dropdown-item href="https://www.contaazul.com/" new-tab>https://www.contaazul.com/(New Tab)</lf-dropdown-item>
            <lf-dropdown-item @click="dropdownItemClick">dropdownItemClick()</lf-dropdown-item>
          </lf-dropdown>
        </div>
      </div>

      <hr class="lf-divider">

      <h3>disabled prop</h3>
      <div class="lf-grid">
        <div
          class="lf-grid__col"
          v-for="variant in dropdownVariants"
          :key="variant"
        >
          <lf-dropdown
            label="Split"
            disabled
            :variant="variant"
            :close-on-click="false"
            split
            @click="mainButtonClick"
          >
            <lf-dropdown-item href="https://www.contaazul.com/">https://www.contaazul.com/</lf-dropdown-item>
            <lf-dropdown-item href="https://www.contaazul.com/" new-tab>https://www.contaazul.com/(New Tab)</lf-dropdown-item>
            <lf-dropdown-item @click="dropdownItemClick">dropdownItemClick()</lf-dropdown-item>
          </lf-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LfDropdown, LfDropdownItem } from '@/components/dropdown';

export default {
  name: 'App',
  components: {
    LfDropdown,
    LfDropdownItem,
  },
  data() {
    return {
      dropdownVariants: ['default', 'primary', 'secondary', 'danger'],
    };
  },
  methods: {
    capitalize(value) {
      if (!value) {
        return '';
      }

      return value.toString().charAt(0).toUpperCase() + value.slice(1);
    },
    mainButtonClick() {
      // eslint-disable-next-line
      alert('Main Button Click');
    },
    dropdownItemClick() {
      // eslint-disable-next-line
      alert('Dropdown Item Click');
    },
  },
};
</script>

<style lang="scss">
@import './assets/styles/index.scss';
</style>
