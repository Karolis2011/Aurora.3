<template>
  <div>
    <div class="titleBar">
      <div class="uiStatusIcon uiIcon24" :class="statusClass" unselectable="on"/>
      <div class="uiTitleText" unselectable="on">{{ d.title }}</div>
    </div>
    <slot/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      d: this.$root.$data,
    }
  },
  computed: {
    statusClass() {
      if (this.d.status == 2) return 'good'
      if (this.d.status == 1) return 'average'
      return 'bad'
    },
  }
}
</script>
