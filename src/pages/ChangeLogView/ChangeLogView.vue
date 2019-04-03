<template>
    <div class="changelog-view">
        <!--        <router-link :to="{name: 'board', params: { id } }" tag="div">-->
        <!--            <h1>back</h1>-->
        <!--        </router-link>-->
        <div class="changelog-view__container">
            <h1 class="changelog-view__header">{{ this.projectName }} Changelog</h1>
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
    import {ChangeLogState} from "@/pages/ChangeLogView/changes";
    import ChangeLogEntry from "@/components/ChangeLog/ChangeLogEntry.vue";

    @Component({
        components: {ChangeLogEntry}
    })
    export default class ChangeLogView extends Vue {
        @State changes!: ChangeLogState;

        @Action("getChanges") getChanges: any;

        @Action("addChange") addChange: any;

        @Prop()
        projectId!: string;

        created() {
            this.projectId = this.$route.params.id;
            this.getChanges(this.projectId);

            console.log(this.changes);
        }
    }


</script>

<style lang="scss" scoped>
    @import "ChangeLogView.scss";
</style>
