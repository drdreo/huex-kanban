<template>
    <div class="changelog-view">

        <div class="changelog-view__container scrollbar">
            <div>
                <router-link :to="{name: 'board', params: { projectId } }">
                    <a class="changelog-view__back"> Back to kanban board</a>
                </router-link>
                <h1 class="changelog-view__header">Project Changelog</h1>
            </div>
            <change-log-entry :key="change.id" :description="change.description" :createdAt="change.createdAt"
                              v-for="change in this.changes.changes"></change-log-entry>
        </div>
    </div>
</template>

<script lang="ts">
    import {State, Action} from "vuex-class";
    import {Component, Vue} from "vue-property-decorator";
    import {ChangeLogState} from "@/pages/ChangeLogView/changes";
    import ChangeLogEntry from "@/components/ChangeLog/ChangeLogEntry.vue";

    @Component({
        components: {ChangeLogEntry}
    })
    export default class ChangeLogView extends Vue {
        @State changes!: ChangeLogState;
        @Action("getChanges") getChanges: any;

        private projectId!: string;

        created() {
            this.projectId = this.$route.params.id;
            this.getChanges(this.projectId);
        }
    }


</script>

<style lang="scss" scoped>
    @import "ChangeLogView.scss";
</style>
