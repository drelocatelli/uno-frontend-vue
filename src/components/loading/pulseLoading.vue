<template>
<div class="loading-container">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="50" height="50" style="shape-rendering: auto; display: block; background: transparent;">
  <g>
    <path d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="none" stroke="#e15b64" stroke-width="10">
      <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 51;360 50 51"/>
    </path>
    <g/>
  </g>
</svg>

</div>
</template>

<style lang="scss" scoped>
  .loading-container {
    position: absolute;
    top: 50%;
  }


</style>