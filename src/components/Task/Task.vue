<template>
    <div class="task">
        <div class="task__header">
            <h3 class="task__heading">{{ name }}</h3>
        </div>
        <hr>
        <div class="task__content">
            <p>{{description}}</p>
        </div>
        <div class="task__actions">
            <button class="move-button" v-if="state > 1" @click="doUpdateTaskState(-1)">&#8678;</button>
            <button class="delete-button" @click="doDeleteTask">&#10006; Delete</button>
            <button v-if="state < 3" @click="doUpdateTaskState(1)">&#8680;</button>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {Action} from "vuex-class";
    import {changeTypeEnum} from "@/changeTypeEnum";
    import {taskStateEnum} from "@/taskStateEnum";

    @Component({})
    export default class Task extends Vue {
        @Prop() id!: string;
        @Prop() name!: string;
        @Prop() description!: string;
        @Prop() state!: number;
        @Prop() project!: string;

        @Action("deleteTask") deleteTask: any;
        @Action("updateTaskState") updateTaskState: any;
        @Action("addChange") addChange: any;
        @Action("addStateChange") addStateChange: any;

        private projectId!: string;

        created() {
            this.projectId = this.$route.params.id;
        }

        doDeleteTask() {
            this.deleteTask(this);
            this.addChange({
                description: `The task [${this.name}] has been deleted.`,
                projectId: this.projectId
            });
        }

        doUpdateTaskState(value: number) {
            this.updateTaskState({id: this.id, state: this.state + value});

            this.addChange({
                description: `The task [${this.name}] has been moved to ${this.convertTaskStateToString(this.state)}.`,
                projectId: this.projectId
            });
        }

        convertTaskStateToString(taskState: taskStateEnum): string {
            switch (taskState) {
                case taskStateEnum.ToDo:
                    return 'To-Do';
                case taskStateEnum.InProgress:
                    return 'In-Progress';
                case taskStateEnum.Done:
                    return 'Done';
            }
            return '';
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "Task.scss";
</style>
