<template>
    <div class="container-dropdown" @click="isOpen = !isOpen">
        <div class="header" href="#">
            {{ title }}
        </div>
        <!-- <svg class="icon" viewBox="0 0 1030 638" width="10">
      <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" />
    </svg> -->
        <div class="sub-menu dropdown-list" v-if="isOpen">
            <slot name="items"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 't-dropdown',
    props: { title: { type: String, default: "" } },
    data() {
        return {
            isOpen: false,
            itemHover: false
        }
    }, methods: {
        testa() {

        }
    }
}
</script>

<style>
.dropdown-list {
    border: 0.1em solid #9f5714;
    width: max-content;
    border-radius: 0.4rem;
    margin-left: 2em;
}

.menu-item svg {
    margin-left: 10px;
    fill: #9f5714;
    border-radius: 0.4rem;
}

.header {
    width: max-content;
    background-color: #FFFFFF;
    color: #9f5714;
    padding: 10px 20px;
    position: relative;
    text-align: center;
    display: flex;
    transition: 0.4s;
    border: 0.1em solid #9f5714;
    border-radius: 0.3em;
    cursor: pointer;
}

.menu-item {
    cursor: pointer;
}

.menu.sub-menu {
    position: absolute;
    background-color: #FFFFFF;
    top: calc(100% + 0.2em);
    left: 150%;
    transform: translateX(-50%);
    width: max-content;
    border-radius: 0.3em 0.3em;
}

.fade-enter-active,
.fade-leave-active {
    width: max-content;
    transition: all .5s ease-out;
}

.fade-enter,
.fade-leave-to {
    width: max-content;
    opacity: 0;
}
</style>