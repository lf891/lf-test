<template>
  <div
    class="lf-dropdown"
    :class="{ 'lf-dropdown--split': split }"
    v-click-outside:[clickOutsideState]="outsideClick"
  >
    <div class="lf-dropdown-actions">
      <lf-button
        class="lf-dropdown__button-main"
        :variant="variant"
        :disabled="disabled"
        @click.native="mainButtonClick"
        ref="buttonMain"
      >
        {{ label }}
      </lf-button>

      <lf-button
        class="lf-dropdown__button-arrow"
        v-if="split"
        :variant="variant"
        :disabled="disabled"
        dark
        ref="buttonArrow"
        @click="toggle"
      >
        <svg
          viewBox="0 0 12 8"
          class="lf-button-icon"
        >
          <path d="M5.46009 7.17687L1.01149 2.72827C0.704015 2.4208 0.704015 1.9236 1.01149
          1.6194L1.750740.880144C2.05822 0.572667 2.55542 0.572667 2.85962 0.880144L6.01289
          4.03341L9.16617 0.880144C9.47364 0.572667 9.97084 0.572667 10.275 0.880144L11.0143
          1.6194C11.3218 1.92687 11.3218 2.42407 11.0143 2.72827L6.5657 7.17687C6.26476 7.48435
          5.76757 7.48435 5.46009 7.17687Z" />
        </svg>
      </lf-button>
    </div>

    <div
      class="lf-dropdown-menu"
      v-show="isOpen"
      ref="dropdown"
      @click="contentClick"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { createPopper } from '@popperjs/core';
import ClickOutside from '@/directives/click-outside';
import { LfButton } from '@/components/button';

export default {
  name: 'LfDropdown',
  components: {
    LfButton,
  },
  directives: {
    ClickOutside,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    split: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    closeOnClick: {
      type: Boolean,
      default: true,
    },
    closeOnClickOutside: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    clickOutsideState() {
      return this.isOpen ? 'enabled' : 'disabled';
    },
  },
  methods: {
    setupPopper() {
      this.$nextTick(() => {
        if (this.popper === undefined) {
          const buttonTrigger = this.split ? this.$refs.buttonArrow.$el : this.$refs.buttonMain.$el;
          const { dropdown } = this.$refs;

          this.popper = createPopper(buttonTrigger, dropdown, {
            placement: 'bottom-end',
          });
        }
      });
    },
    open() {
      if (!this.disabled) {
        this.isOpen = true;
        this.$emit('open');
      }
    },
    close() {
      this.isOpen = false;
      this.$emit('close');
    },
    toggle() {
      if (this.isOpen) {
        this.close();
        return;
      }

      this.open();
      this.setupPopper();
    },
    mainButtonClick() {
      if (!this.disabled) {
        this.$emit('click');

        if (!this.split) {
          this.toggle();
        }
      }
    },
    contentClick() {
      if (this.closeOnClick && this.isOpen) {
        this.close();
      }
    },
    outsideClick() {
      if (this.closeOnClickOutside && this.isOpen) {
        this.close();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.lf-dropdown {
  display: inline-flex;
}

.lf-dropdown-actions {
  display: flex;
  flex-wrap: nowrap;
}

.lf-dropdown--split {
  .lf-dropdown__button-main {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .lf-dropdown__button-arrow {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}

.lf-dropdown-menu {
  z-index: 1;
  padding: $dropdown-menu-padding-y $dropdown-menu-padding-x;
  border: $dropdown-menu-border;
  border-radius: $dropdown-menu-border-radius;
  background: $dropdown-menu-background;
  box-shadow: $dropdown-menu-box-shadow;
}
</style>
