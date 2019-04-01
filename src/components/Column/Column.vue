<template>
    <div class="board-column">
        <h3 class="column-title">{{name}}</h3>
        <div class="task-area" >
            <Task v-for="task in tasks" :key="task.id" :id="task.id" :name="task.name" :description="task.description"
                  :state="task.state"></Task>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import Task from "@/components/task/Task.vue"

    @Component({
        components: {Task}
    })
    export default class Column extends Vue {
        @Prop()
        tasks!: any[];

        @Prop()
        name!: string;
    }
</script>

<style lang="scss" scoped>
    @import "Column.scss";
</style>
