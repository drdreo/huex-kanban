<template>
    <div class="changelog-view">
        <!--        <router-link :to="{name: 'board', params: { id } }" tag="div">-->
        <!--            <h1>back</h1>-->
        <!--        </router-link>-->
        <div class="changelog-view__container">
            <h1 class="changelog-view__header">Project Changelog</h1>
            <ul class="changelog-view__changeList">
                <change-log-entry :key="change.id" :description="change.description" :createdAt="change.createdAt"
                                  v-for="change in this.changes.changes"></change-log-entry>
            </ul>
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

            console.log(this.changes.changes);
        }
    }


</script>

<style lang="scss" scoped>
    @import "ChangeLogView.scss";
</style>
