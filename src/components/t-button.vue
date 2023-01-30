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
  
  ]" :style="styleIcon" @click="$emit('click')" :href="href" :target="target" :to="{ name: linkPage }">
    <div class="content-button">
      <!-- <t-icon
                class="icon-left-button"
                v-if="iconLeft" 
                :src="iconLeft"
                :color="returnColor()"
                :size="size == 'xl' ? 22 : size == 'lg' ? 18 : size == 'md' ? 14 : 12"
            /> -->
      <slot></slot>

      <!-- <t-icon
                v-if="dropdownIcon" 
                :src="`arrow-${dropdownIconDirection}-icon`"
                :color="returnColor()"
                :size="size == 'xl' ? 14 : size == 'lg' ? 12 : size == 'md' ? 10 : 8"
            /> -->
    </div>
  </button>
</template>

<script>
// import TIcon from '../t-icon/index.vue'
export default {
  name: "t-button",
  components: {
    // TIcon
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
    iconLeft: {
      type: String,
      default: null,
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
    dropdownSlip: {
      type: Boolean,
      default: false,
    },
    dropdownIcon: {
      type: Boolean,
      default: false,
    },
    dropdownIconDirection: {
      type: String,
      default: 'down',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    linkPage: {
      type: String,
      default: null,
    },
    href: {
      type: String,
      default: null,
    },
    target: {
      type: String,
      default: null,
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

<style scoped src="./button.css" />