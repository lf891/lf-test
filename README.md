## lf-test
Dropdown component, compatible with Vue 2

[Live demo](https://lf891.github.io/lf-test/)

### Running project

#### Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Run your unit tests
```
npm run test:unit
```

### Usage

```html
<template>
  <lf-dropdown
    :label="My Button"
    :variant="primary"
    :close-on-click="false"
  >
    <lf-dropdown-item href="https://www.google.com/" new-tab>Go to Link</lf-dropdown-item>
    <lf-dropdown-item @click="dropdownItemClick">Call method</lf-dropdown-item>
  </lf-dropdown>
</template>
```

#### Props

| Name                | Type                   | Required | Default value | Description                                                   |
| ------------------- | ---------------------- | -------- | ------------- | ------------------------------------------------------------- |
| label               | String                 | true     |               | Sets value of the main button                                 |
| split               | Boolean                |          | false         | Adds arrow button to toggle dropdown                          |
| variant             | String                 |          |               | Change visual. Accepted values: primary, secondary and danger |
| disabled            | Boolean                |          | false         | Disables dropdown                                             |
| closeOnClick        | Boolean                |          | true          | Closes the dropdown after clicking on its content             |
| closeOnClickOutside | Boolean                |          | true          | Closes the dropdown after clicking outside it                 |

#### Events

| Name  | Description                         |
| ----- | ----------------------------------- |
| open  | Fires shortly after dropdown opens  |
| close | Fires shortly after dropdown closes |