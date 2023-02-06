<template>
    <div :class="`custom-search col-${size}`">
        <div class="d-flex flex-column">
            <span class="align-self-start textarea-title">{{ title }}</span>
            <b-form-textarea :placeholder="placeholder" :class="(error) ? 'error-input' : 'input'" />
            <span v-if="errorMessage && error" class="message-error">{{ errorMessage }} example</span>
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
    methods: {
        // onChangeText(event) {
        //     // this.value = event.target.value;
        //     console.log(this.value);
        // },
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
        },
        value: {
            type: String,
            default: ""
        }, error: {
            type: Boolean,
            default: true
        }, errorMessage: {
            type: String,
            default: "Message error example"
        }
    },
}
</script>
<style scoped src="./t-textarea.css" />