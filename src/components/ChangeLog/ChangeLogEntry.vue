<template>
    <li class="changelog-view__listItem">
        <span>{{description}} <small>-{{ createdAt.toString() }}</small></span>
    </li>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class ChangeLogEntry extends Vue {
        @Prop()
        description!: string;

        @Prop()
        createdAt!: Date;
    }
</script>

<style lang="scss" scoped>
    @import "ChangeLogEntry.scss";
</style>
