<template>
    <div class="task">
        <h2>{{ name }}</h2>
        <p>{{description}}</p>
        <p>State: {{state}}</p>
        <button @click="doDeleteTask">ZERSTÖREN!!!</button>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {State, Action} from "vuex-class";

    @Component({})
    export default class Task extends Vue {
        @Prop() id!: string;
        @Prop() name!: string;
        @Prop() description!: string;
        @Prop() state!: number;
        @Prop() project!: string;

        @Action("deleteTask") deleteTask: any;

        doDeleteTask() {
            this.deleteTask(this);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "Task.scss";
</style>
