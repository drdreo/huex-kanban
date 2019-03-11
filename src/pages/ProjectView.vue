<template>
    <div class="project-view">
        <Project :key="project.id" :id="project.id" :name="project.name" v-for="project in projects"></Project>
        <div class="project-view__project_create">
            <input v-model.trim="newProjectName"/>
            <span>+</span>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import Project from "@/components/Project/Project.vue";


    @Component({
        components: {Project}
    })
    export default class ProjectView extends Vue {
        projects = [
            {
                id: 1,
                name: "TestProject",
            },
            {
                id: 2,
                name: "RisikOnline",
            }
            ,
            {
                id: 3,
                name: "KanbanHuex",
            }
        ];

        @Prop()
        private newProjectName!: string;
    }
</script>

<style lang="scss" scoped>
    @import "ProjectView.scss";
</style>
