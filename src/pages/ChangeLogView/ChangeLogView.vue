<template>
    <div class="changelog-view">
        <h1 class="changelog-view__header">Project Changelog</h1>

        <div class="changelog-view__container">

        </div>
    </div>
</template>

<script lang="ts">
    import {State, Action} from "vuex-class";
    import {Component, Vue} from "vue-property-decorator";
    import {ChangeLog, ChangeLogState} from "@/pages/ChangeLogView/changelogs";

    @Component({
        components: {ChangeLog}
    })
    export default class ChangeLogView extends Vue {
        @State kanban!: ChangeLogState;
    }
</script>

<style lang="scss" scoped>
    @import "ChangeLogView.scss";
</style>
