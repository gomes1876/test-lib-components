<template>
    <div class="menu-item item-list" @click="click">
        <slot>
        </slot>
        <div class="text-item">
            <span>{{ text }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 't-item-dropdown',
    components: {

    }, props: {
        text: {
            type: String,
            default: 'example text',
        }, click: {
            type: Function,
            default: () => { alert('Não há função designada') }
        }
    }, data() {
        return {
            isOpen: false,
            itemHover: false
        }
    },
}

</script>

<style>
.item-list {
    border-radius: 0.2em;
}

.menu-item {
    width: max-content;
    background-color: #FFFFFF;
    color: #9f5714;
    padding: 10px 20px;
    position: relative;
    text-align: center;
    display: flex;
    transition: 0.4s;
}

.menu-item.active,
.menu-item:hover {
    width: max-content;
    background-color: #9f5714;
    color: white;
}

.menu-item a {
    width: max-content;
    color: inherit;
    text-decoration: none;
}

.menu-item svg {
    width: 10px;
    margin-left: 10px;
}

.text-item {
    margin-left: 0.2em;
}
</style>