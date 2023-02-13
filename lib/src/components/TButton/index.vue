<template>
  <button :class="[
    'button-item',
    'text-semibold',
    disabled && 'disabled',
    block && 'button-block',
    float && 'shadow-3',
    `size-${size}`,
    type,
    variant,
  
  ]" :style="styleIcon" @click="$emit('click')" :to="{ name: linkPage }">
<div class="content-button">

  <div>
    <slot name="icon">
    </slot>
  </div>
  <slot></slot>
</div>
</button>
</template>

<script>

export default {
  name: "t-button",
  components: {
  },
  data() {
    return {
    }
  },
  props: {
    size: {
      type: String,
      default: 'lg',
    },
    type: {
      type: String,
      default: null,
    },
    variant: {
      type: String,
      default: 'primary',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    float: {
      type: Boolean,
      default: false,
    },
    linkPage: {
      type: String,
      default: null,
    },
    dropdown: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    styleIcon() {
      return {
        '--color-primary': '#974900',
        '--color-danger': '#D32F2F',
        '--color-success': '#4CAF50',
        '--color-warning': '#FF9800',
        '--color-info': '#1976D2',

      }
    }
  },
  methods: {
    returnColor() {
      if (this.disabled) {
        return '#7E7570'
      }
      if (this.type == 'contained') {
        return '#FFFFFF'
      }
      if (this.variant) {
        return this.variant == 'primary' ? '#974900' : this.variant == 'danger' ? '#D32F2F' : this.variant == 'warning' ? '#FF9800' : this.variant == 'success' ? '#4CAF50' : '#1976D2'
      }

    }

  },
}
</script>

<style scoped src="./t-button.css" />