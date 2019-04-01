<template>
    <div class="task">
        <h2>{{ title }}</h2>
        <p>{{description}}</p>
        <p>State: {{state}}</p>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component({})
    export default class Task extends Vue {
        @Prop() id!: string;
        @Prop() name!: string;
        @Prop() description!: string;
        @Prop() state!: number;
        @Prop() project!: string;
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "Task.scss";
</style>
