<template>
    <a class="dropdown-item">
        <slot></slot>
        <span>
            {{ text }}
        </span>
    </a>
</template>

<script>
export default {
    name: 'dropdown-item',
    props: {
        text: {
            type: String,
            default: ""
        }
    }
}
</script>








<style scoped src="./item.css" />