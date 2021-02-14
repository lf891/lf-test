import clickOutside from './click-outside.js';

describe('click-outside', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should throw error when "arg" is different then "enabled" or "disabled"', () => {
    const el = document.createElement('div');
    const arg = 'foo';

    expect(() => {
      clickOutside.bind(el, { arg: arg });
    }).toThrowError(`click-outside: ${arg} is not an expected argument. The expected arguments are "enabled" or "disabled"`);
  });

  it('should throw error when "biding.value" is not a function', () => {
    const el = document.createElement('div');

    expect(() => {
      clickOutside.bind(el, { value: {} })
    }).toThrowError('click-outside: Binding value must be a function');
  });

  it('should addEventListener on binded', () => {
    const callback = jest.fn();
    jest.spyOn(document.body, 'addEventListener');
    const el = document.createElement('div');

    clickOutside.bind(el, { value: callback });

    expect(window.document.body.addEventListener).toHaveBeenCalledWith('click', expect.any(Function));
  });

  it('should not addEventListener when "arg" is "disabled"', () => {
    const callback = jest.fn();
    jest.spyOn(document.body, 'addEventListener');
    const el = document.createElement('div');

    clickOutside.bind(el, { arg: 'disabled', value: callback });
    expect(window.document.body.addEventListener).toHaveBeenCalledTimes(0);
  });

  it('should addEventListener when "arg" becomes "enabled"', () => {
    const callback = jest.fn();
    jest.spyOn(document.body, 'addEventListener');
    jest.useFakeTimers();
    const el = document.createElement('div');
    const ininitalState = 'disabled';
    const updatedState = 'enabled';

    clickOutside.bind(el, { arg: ininitalState, value: callback });

    clickOutside.componentUpdated(el, { arg: updatedState, oldArg: ininitalState });

    jest.runOnlyPendingTimers()

    expect(window.document.body.addEventListener).toHaveBeenCalledWith('click', expect.any(Function));
  });

  it('should not not addEventListener when component is updated and "arg" still same', () => {
    const callback = jest.fn();
    jest.spyOn(document.body, 'addEventListener');
    jest.useFakeTimers();
    const el = document.createElement('div');
    const ininitalState = 'disabled';

    clickOutside.bind(el, { arg: ininitalState, value: callback });

    clickOutside.componentUpdated( el, { arg: ininitalState, oldArg: ininitalState });
    jest.runOnlyPendingTimers()

    expect(window.document.body.addEventListener).toHaveBeenCalledTimes(0);
  });

  it('should removeEventListener when "arg" becomes "disabled"', () => {
    const callback = jest.fn();
    jest.spyOn(document.body, 'addEventListener');
    jest.spyOn(document.body, 'removeEventListener');
    jest.useFakeTimers();
    const el = document.createElement('div');
    const ininitalState = 'enabled';
    const updatedState = 'disabled';

    clickOutside.bind(el, { arg: ininitalState, value: callback });

    clickOutside.componentUpdated( el, { arg: updatedState, oldArg: ininitalState });

    jest.runOnlyPendingTimers()

    expect(window.document.body.removeEventListener).toHaveBeenCalledWith('click', expect.any(Function));
  });

  it('should removeEventListener when "unbind" is called', () => {
    const callback = jest.fn();
    jest.spyOn(document.body, 'addEventListener');
    jest.spyOn(document.body, 'removeEventListener');
    const el = document.createElement('div');

    clickOutside.bind(el, { arg: 'enabled', value: callback });

    clickOutside.unbind(el);

    expect(window.document.body.removeEventListener).toHaveBeenCalledWith('click', expect.any(Function));
  });

  it('should not call the callback when clicking on a child element', () => {
    const callback = jest.fn();
    const el = document.createElement('div');
    document.body.appendChild(el);

    clickOutside.bind(el, { value: callback });

    el.click();

    expect(callback).toHaveBeenCalledTimes(0);
  });

  it('should call the callback when clicking on "body"', () => {
    const callback = jest.fn();
    const el = document.createElement('div');

    clickOutside.bind(el, { value: callback });

    document.body.click();

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
