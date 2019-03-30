<template>
    <div class="project-view">
        <h1 class="project-view__header">Project Overview</h1>

        <div class="project-view__container">
            <Project :key="project.id" :id="project.id" :name="project.name" :tasks="project.tasks"
                     v-for="project in projects.projects"></Project>
            <div class="project-view__project_create">
                <input v-model.trim="newProjectName" placeholder="Project Name"/>
                <span @click="createNewProject">+</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {State, Action} from "vuex-class";
    import {Component, Vue} from "vue-property-decorator";
    import Project from "@/components/Project/Project.vue";
    import {ProjectsState} from "@/pages/ProjectView/projects";

    @Component({
        components: {Project}
    })
    export default class ProjectView extends Vue {

        @State projects!: ProjectsState;
        @Action("createProject") createProject: any;
        @Action("getProjects") getProjects: any;

        private newProjectName = "";


        created() {
            this.getProjects();
        }

        createNewProject() {
            this.createProject({name: this.newProjectName});
            this.newProjectName = "";
        }
    }
</script>

<style lang="scss" scoped>
    @import "ProjectView.scss";
</style>
