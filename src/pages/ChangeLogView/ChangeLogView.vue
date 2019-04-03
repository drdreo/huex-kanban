<template>
    <div class="changelog-view">
        <!--        <router-link :to="{name: 'board', params: { id } }" tag="div">-->
        <!--            <h1>back</h1>-->
        <!--        </router-link>-->
        <div class="changelog-view__container">
            <h1 class="changelog-view__header">Project Changelog</h1>
            <ul class="changelog-view__changeList">
                <change-log-entry :key="change.id" :changeType="change.changeType" :editedObject="change.editedObject" :destination="change.destination" :created="change.created"
                                  v-for="change in this.changes"></change-log-entry>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
    import {State, Action} from "vuex-class";
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {Change, ChangeLog, ChangeLogState} from "@/pages/ChangeLogView/changelogs";
    import ChangeLogEntry from "@/components/ChangeLog/ChangeLogEntry.vue";

    @Component({
        components: {ChangeLogEntry}
    })
    export default class ChangeLogView extends Vue {
        @State changelog!: ChangeLogState;
        @Action("getChanges") getChanges: any;

        @Prop()
        projectId!: string;

        private changes = [
            {id: 1, changeType: "was created", editedObject: "Kanban", destination: "", created: "18:54 28.03.2019"},
            {id: 2, changeType: "moved to", editedObject: "Issue", destination: "Done", created: "19:04 28.03.2019"},
            ] as Change[];
    }


</script>

<style lang="scss" scoped>
    @import "ChangeLogView.scss";
</style>
