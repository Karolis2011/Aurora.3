<template>
  <div>
    <div class="titleBar">
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
    debugClass() {
      if (this.d.debug == 1) {
        if (this.debug_flip == 1) return 'good';
        if (this.debug_flip == 0) return 'bad';
      }
      return 'hidden';
    }
  },
  methods: {
    closeUI() {
      Utils.sendToTopicRaw({'src': this.d.uiref, 'vueuiclose': 1});
    },
    startDragging($event) {
      dragStartHandler($event);
    },
    stopDragging($event) {
      dragEndHandler($event);
    },
    prevent($event) {
      $event.stopPropagation();
    },
    activateDebug() {
      if(this.debug_flip == 0) {
        document.getElementById("content").classList.add("uiDebug");
        document.getElementById("debug").classList.add("uiDebug");
        this.debug_flip = 1;
      } else if (this.debug_flip == 1) {
        document.getElementById("content").classList.remove("uiDebug");
        document.getElementById("debug").classList.remove("uiDebug");
        this.debug_flip = 0;
      }
    }
  }
}
</script>
