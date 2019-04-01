<template>
    <div class="board-column">
        <h3 class="column-title">{{name}}</h3>
        <div class="task-area" v-for="task in tasks.tasks">
            <h4>{{task.name}}</h4>
            <p>{{task.description}}</p>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
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
