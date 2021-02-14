const addEventListener = (el) => {
  document.body.addEventListener('click', el.clickOutsideEvent);
};

const removeEventListener = (el) => {
  document.body.removeEventListener('click', el.clickOutsideEvent);
};

export default {
  bind: (_el, { arg = 'enabled', value: callback }) => {
    if (arg !== 'enabled' && arg !== 'disabled') {
      throw new Error(`click-outside: ${arg} is not an expected argument. The expected arguments are "enabled" or "disabled"`);
    }

    if (typeof callback !== 'function') {
      throw new Error('click-outside: Binding value must be a function');
    }

    const el = _el;

    el.dataset.clickoutsideState = arg;

    el.clickOutsideEvent = (event) => {
      if (el === event.target || el.contains(event.target)) {
        return;
      }

      callback(event, el);
    };

    if (el.dataset.clickoutsideState === 'enabled') {
      addEventListener(el);
    }
  },

  componentUpdated: (_el, { arg, oldArg }) => {
    const el = _el;

    // "this" here does not have a nextTick, so a timeout 0 is needed
    setTimeout(() => {
      if (arg && arg !== oldArg) {
        el.dataset.clickoutsideState = arg;

        if (el.dataset.clickoutsideState === 'enabled') {
          addEventListener(el);
        } else {
          removeEventListener(el);
        }
      }
    }, 0);
  },

  unbind: (el) => {
    removeEventListener(el);
  },
};
