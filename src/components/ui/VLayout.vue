<template>
    <div class="wrapper">
        <slot name="header" />
        <main class="main">
            <slot />
        </main>
        <slot name="footer" />
    </div>
</template>

<script>
export default {
    name: 'VLayout',
};
</script>
