<template>
    <div id="app">
        <v-layout>
            <template v-slot:header>
                <v-header />
            </template>
            <register />
            <template v-slot:footer>
                <v-footer />
            </template>
        </v-layout>
    </div>
</template>

<script>
import Register from '@/pages/Register.vue';
import VLayout from '@/components/ui/VLayout.vue';
import VHeader from '@/components/VHeader.vue';
import VFooter from '@/components/VFooter.vue';
import '@/styles/style.scss';

export default {
    name: 'App',
    components: {
        VFooter,
        VHeader,
        VLayout,
        Register,
    },
};
</script>
