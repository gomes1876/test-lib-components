<template>
    <div class="dropdown">
        <TButton data-toggle="dropdown">
            <template v-slot:icon>
                <div class="gorup-item-button-dropdown">
                    <slot name="iconButton">
                    </slot>
                    <span v-if="text.length > 0">{{ text }} </span>
                </div>
            </template>
        </TButton>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <slot name="items">

            </slot>
        </ul>
    </div>
</template>
<script>

import TButton from '../../TButton/';
export default {
    name: 'button-dropdown',
    components: {
        TButton,
    },
    props: { text: { type: String, default: "" } },
}
</script>