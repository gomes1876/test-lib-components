<template>
  <button v-if="!dropdown" :class="[
    'button-item',
    'text-semibold',
    disabled && 'disabled',
    block && 'button-block',
    float && 'shadow-3',
    `size-${size}`,
    type,
    variant,
  
  ]" :style="styleIcon" @click="$emit('click')" :to="{ name: linkPage }">
<div v-if="!dropdown" class="content-button">

  <div v-if="!dropdown">
    <slot name="icon">
    </slot>
  </div>
  <slot></slot>
</div>
</button>
<div v-else-if="dropdown">
  <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret class="d-action-reasons">
    <template v-slot:button-content>
      <slot name="icon">
      </slot>
    </template>
    <div v-for="(item, index) of itemsSelect">

      <b-dropdown-item @click="item.click">
        <span :id="item.title" class="d-itens m-1">
          {{ item.title }}
        </span>
      </b-dropdown-item>
    </div>
  </b-dropdown>
</div>
</template>

<script>
import { BDropdown, BDropdownItem } from 'bootstrap-vue'

const spans = document.getElementById('item');


export default {
  name: "t-button",
  components: {
    BDropdown, BDropdownItem
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
    itemsSelect: {
      type: Array,
      default: [
        {},
      ]
    },
  },
  // mounted() {
  //   console.log('entra');

  //   this.itemsSelect.forEach((item, index) => {
  //     console.log(`${this.itemsSelect[index].title}`);
  //     const element = document.getElementById(item.title + index)
  //     console.log(element);
  //     element.innerHTML = this.itemsSelect[index].icon
  //   })

  // },
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