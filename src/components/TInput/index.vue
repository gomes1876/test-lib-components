<template>
    <div :class="`custom-search col-${size}`">
        <div class="d-flex align-items-center flex-column">
            <span v-if="title" class="title">{{ title }}</span>
            <b-form-input type="text" class="input" :placeholder="placeholder" />
        </div>
    </div>
</template>

<script>
import {
    BFormInput,
} from "bootstrap-vue";

export default {
    name: 't-input',
    components: {
        BFormInput
    }, props: {
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
            default: null,
        }
    },
}
</script>
<style scoped src="./t-input.css" />



















































































































<style scoped src="./t-input.css" />