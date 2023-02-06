<template>
    <div :class="`custom-search col-${size}`">
        <div class="d-flex align-items-center">
            <span>{{ title }}</span>
            <b-form-textarea :placeholder="placeholder" />
        </div>
    </div>
</template>

<script>
import {
    BFormTextarea,
} from "bootstrap-vue";

export default {
    name: 't-textarea',
    components: {
        BFormTextarea
    },
    props: {
        placeholder: {
            type: String,
            default: "",
        },
        size: {
            type: Number,
            default: 12,
        },
        title: {
            type: String,
            default: "",
        }
    },
}
</script>
<style scoped src="./t-textarea.css" />