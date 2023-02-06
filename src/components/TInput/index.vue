<template>
    <div :class="`custom-search col-${size}`">
        <div class="d-flex align-items-center flex-column">
            <span v-if="title" :class="'title'">{{ title }}</span>
            <b-form-input v-model="text" type="text" :class="(error) ? 'error-input' : 'input'" :placeholder="placeholder" />
            <span v-if="errorMessage" class="message-error">{{ errorMessage }} example</span>
        </div>
    </div>
</template>

<script>
import {
    BFormInput,
} from "bootstrap-vue";

export default {
    name: 't-input',
    data() {
        return {
            text: "",
        }
    },
    watch: {
        text() {
            this.$emit("input", this.text);
        }
    },
    mounted() {
        this.text = this.valueDef;
    },
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
        },
        valueDef: {
            type: String,
            default: null,
        },
        error: {
            type: Boolean,
            default: true
        }, errorMessage: {
            type: String,
            default: "example error message"
        }
    },
}
</script>
<style scoped src="./t-input.css" />



















































































































<style scoped src="./t-input.css" />