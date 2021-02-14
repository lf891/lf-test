<template>
  <button
    type="button"
    class="lf-button"
    :class="classList"
    :disabled="disabled"
    @click="click"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script>
export default {
  name: 'LfButton',
  props: {
    label: {
      type: String,
      required: false,
    },
    variant: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      require: false,
    },
  },
  computed: {
    classList() {
      return (this.variant ? `lf-button--${this.variant}` : '')
        + (this.dark ? ' lf-button--dark' : '');
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
@mixin button-color-variant($background, $color: $button-variants-color-default) {
  background: $background;
  color: $color;

  &:hover:not(:disabled) {
    background: lighten($background, 3%);
  }

  &.lf-button--dark {
    background: darken($background, 8%);

    &:hover:not(:disabled) {
      background: darken($background, 5%);
    }
  }
}

.lf-button {
  @include button-color-variant($button-background-default, $button-color-default);

  margin: 0;
  padding: $button-padding-y $button-padding-x;
  border-radius: $button-border-radius;
  transition: $base-transition;
  border: none;
  outline: 0;
  font-size: $button-font-size;
  font-weight: 400;
  line-height: $button-line-height;
  vertical-align: middle;
  white-space: nowrap;
  cursor: pointer;

  &[disabled] {
    cursor: default;
    opacity: .4;
  }
}

.lf-button-icon {
  display: inline-block;
  fill: currentColor;
  width: $button-icon-size;
  height: $button-icon-size;
  vertical-align: middle;
}

@each $variant, $color in $button-variants {
  .lf-button--#{$variant} {
    @include button-color-variant($color);
  }
}
</style>
