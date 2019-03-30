<template>
    <div class="changelog-view">
        <!--        <router-link :to="{name: 'board', params: { id } }" tag="div">-->
        <!--            <h1>back</h1>-->
        <!--        </router-link>-->
        <div class="changelog-view__container">
            <h1 class="changelog-view__header">Project Changelog</h1>
            <ul class="changelog-view__changeList">
                <change-log-entry :key="change.id" :actionType="change.actionType" :object1="change.object1"
                                  :object2="change.object2" :created="change.created"
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
            {id: 1, actionType: "was created", object1: "Kanban", object2: "", created: "18:54 28.03.2019"},
            {id: 2, actionType: "moved to", object1: "Issue", object2: "Done", created: "19:04 28.03.2019"},
        ] as Change[];
    }


</script>

<style lang="scss" scoped>
    @import "ChangeLogView.scss";
</style>
