<template>
    <button
        :type="type"
        class="button"
    >
        <slot />
    </button>
</template>

<script>
export default {
    name: 'VButton',
    props: {
        type: String,
    },
};
</script>

<style scoped lang="scss">
@import '@/styles/variables';

.button {
    position: relative;
    display: flex;
    min-height: 38px;
    min-width: 80px;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    border: none;
    cursor: pointer;
    border-radius: $rounded-s;
    transition: background 0.15s ease;
    background-color: var(--primary);
    color: var(--on-primary);
    &:hover {
        background-color: var(--primary-700);
    }
    &:active {
        background-color: var(--primary-600);
    }
}
</style>
