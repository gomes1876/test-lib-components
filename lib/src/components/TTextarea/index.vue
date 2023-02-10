<template>
    <div :class="`custom-search col-${size}`">
        <div class="d-flex flex-column">
            <span class="align-self-start textarea-title">{{ title }}</span>
            <b-form-textarea :placeholder="placeholder" v-model="text" :class="(error) ? 'error-input' : 'input'" />
            <span v-if="errorMessage && error" class="message-error">{{ errorMessage }}</span>
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
    }, data() {
        return { text: "", }
    }, mounted() {
        this.text = this.valueDef;
    }, watch: {
        text() {
            this.$emit("input", this.text);
        }
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
        valueDef: {
            type: String,
            default: ""
        }, error: {
            type: Boolean,
            default: false
        }, errorMessage: {
            type: String,
            default: ""
        }
    },
}
</script>


<style scoped src="./t-textarea.css" />