<template>
    <div class="tasks-view">
        <Column :tasks="this.tasks.tasks.filter(task => task.state == 1)" :name="'To-Do'"></Column>
        <Column :tasks="this.tasks.tasks.filter(task => task.state == 2)" :name="'In Progress'"></Column>
        <Column :tasks="this.tasks.tasks.filter(task => task.state == 3)" :name="'Done'"></Column>
    </div>
</template>

<script lang="ts">
    import {State, Action} from "vuex-class";
    import {Component, Vue} from "vue-property-decorator";
    import Column from "@/components/Column/Column.vue";
    import {TasksState} from "@/pages/TasksView/tasks";

    @Component({
        components: {Column}
    })
    export default class TasksView extends Vue {
        @State tasks!: TasksState;
        @Action("getTasks") getTasks: any;
        //@Action("createTask") createTask: any;

        private projectId!: string;

        created() {
            this.projectId = this.$route.params.id;
            this.getTasks();
        }

        doCreateTask() {

        }
    }
</script>

<style lang="scss" scoped>
    @import "TasksView.scss";
</style>