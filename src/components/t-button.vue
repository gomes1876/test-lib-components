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

<style lang="scss">
.button-item {
  display: flex;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 5px;
  font-family: 'Raleway';

  &.primary {
    color: var(--color-primary);

    &:hover {
      background-color: #FFEDE2;
    }

    &:active {
      background-color: #FFDBC4;
    }
  }

  &.danger {
    color: var(--color-danger);

    &:hover {
      background-color: #FFCDD2;
    }

    &:active {
      background-color: #EF9A9A;
    }
  }

  &.warning {
    color: var(--color-warning);
  }

  &.success {
    color: var(--color-success);
  }

  &.info {
    color: var(--color-info);
  }

  &.button-block {
    width: 100%;
    justify-content: center;
  }

  &.disabled {
    background-color: #ECE0DB !important;
    border: 1px solid #ECE0DB !important;
    color: #7E7570 !important;
    cursor: not-allowed;
  }

  &.size-xl {
    padding: 20px 35px;
    font-style: normal;
    font-size: 20px;
    line-height: 23px;
  }

  &.size-lg {
    padding: 13px 28px;
    font-style: normal;
    font-size: 17px;
    line-height: 20px;
  }

  &.size-md {
    padding: 9px 21px;
    font-style: normal;
    font-size: 14px;
    line-height: 20px;
  }

  &.size-sm {
    padding: 4px 14px;
    font-style: normal;
    font-size: 12px;
    line-height: 20px;
  }

  &.outline {
    &.primary {
      border: 1px solid var(--color-primary);
    }

    &.danger {
      border: 1px solid var(--color-danger);
    }

    &.warning {
      border: 1px solid var(--color-warning);
    }

    &.success {
      border: 1px solid var(--color-success);
    }

    &.info {
      border: 1px solid var(--color-info);
    }
  }

  &.contained {
    color: #FFFFFF;

    &.primary {
      border: 1px solid var(--color-primary);
      background-color: var(--color-primary);

      &:hover {
        border: 1px solid #9F5714;
        background-color: #9F5714;
      }

      &:active {
        border: 1px solid #A45F1F;
        background-color: #A45F1F;
      }
    }

    &.danger {
      border: 1px solid var(--color-danger);
      background-color: var(--color-danger);

      &:hover {
        border: 1px solid #E53935;
        background-color: #E53935;
      }

      &:active {
        border: 1px solid #F44336;
        background-color: #F44336;
        color: #C62828;
      }
    }

    &.warning {
      border: 1px solid var(--color-warning);
      background-color: var(--color-warning);
    }

    &.success {
      border: 1px solid var(--color-success);
      background-color: var(--color-success);
    }

    &.info {
      border: 1px solid var(--color-info);
      background-color: var(--color-info);
    }
  }

  .content-button {
    display: flex;
    align-items: center;

    svg {
      margin-right: 12px;
    }
  }
}
</style>

