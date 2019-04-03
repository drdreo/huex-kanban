<template>
    <li class="changelog-view__listItem">
        <span v-if="destination"><b>{{editedObject}}</b> {{ changeType }} {{ destination }}. <small>-{{ created }}</small></span>
        <span v-else><b>{{editedObject}}</b> {{ changeType }}. <small>-{{ created }}</small></span>
    </li>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class ChangeLogEntry extends Vue {
        @Prop()
        changeType!: string;

        @Prop()
        editedObject!: string;

        @Prop()
        destination?: string;

        @Prop()
        created!: string;
    }
</script>

<style lang="scss" scoped>
    @import "ChangeLogEntry.scss";
</style>
