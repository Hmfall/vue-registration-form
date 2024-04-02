<template>
    <div
        v-if="value"
        ref="popup"
        class="popup"
        @click="handleVisible"
    >
        <div class="popup_inner">
            <div
                class="popup_content"
                @click.stop
            >
                <slot></slot>
                <div
                    class="popup_visible"
                    @click="handleVisible"
                >
                    <v-button> Ок</v-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VButton from '@/components/ui/VButton.vue';

export default {
    name: 'Popup',
    components: { VButton },
    props: {
        value: Boolean,
    },
    methods: {
        handleVisible() {
            this.$emit('input', false);
        },
    },
};
</script>

<style scoped lang="scss">
@import '@/styles/variables';

.popup {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 100;
    background: rgb(0 0 0 / 50%);
    backdrop-filter: blur(4px);
    overflow: hidden auto;
    &_inner {
        min-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &_content {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px;
        min-width: 300px;
        position: relative;
        background: var(--surface);
        border-radius: $rounded-m;
    }
    &_visible {
        display: flex;
        justify-content: center;
    }
}
</style>
