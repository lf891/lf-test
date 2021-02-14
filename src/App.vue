<template>
  <div id="app">
    <div class="container">
      <h2>LfDropdown</h2>
      <h3>Default</h3>
      <lf-dropdown
        label="Botão"
        variant="danger"
      >
        <lf-dropdown-item href="https://contaazul.com">Link</lf-dropdown-item>
        <lf-dropdown-item @click="dropdownItemClick">dropdownItemClick()</lf-dropdown-item>
      </lf-dropdown>

      <h3>Split</h3>
      <lf-dropdown
        label="Botão"
        variant="danger"
        split
      >
        <lf-dropdown-item href="https://contaazul.com">Link</lf-dropdown-item>
        <lf-dropdown-item @click="dropdownItemClick">dropdownItemClick()</lf-dropdown-item>
      </lf-dropdown>
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
  methods: {
    dropdownItemClick() {
      // eslint-disable-next-line
      alert('Dropdown Item was clicked');
    },
  },
};
</script>

<style lang="scss">
body,
html {
  height: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
