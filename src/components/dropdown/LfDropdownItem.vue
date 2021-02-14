<template>
  <a
    class="lf-dropdown-item"
    :href="href"
    :target="hrefTarget"
    @click="click"
  >
    <slot>{{ label }}</slot>
  </a>
</template>

<script>
export default {
  name: 'LfDropdownItem',
  props: {
    label: {
      type: String,
    },
    href: {
      type: String,
    },
    newTab: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    hrefTarget() {
      return this.newTab ? '_blank' : '_self';
    },
  },
  methods: {
    click() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
.lf-dropdown-item {
  display: block;
  margin-top: $dropdown-item-spacing;
  padding: $dropdown-item-padding-y $dropdown-item-padding-x;
  color: #333;
  font-size: $dropdown-item-font-size;
  line-height: $dropdown-item-line-height;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: $dropdown-item-background-hover;
  }

  &:first-child {
    margin-top: 0;
  }
}
</style>
