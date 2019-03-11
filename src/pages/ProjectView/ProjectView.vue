<template>
    <div class="project-view">
        <Project :key="project.id" :id="project.id" :name="project.name" v-for="project in kanban.projects"></Project>
        <div class="project-view__project_create">
            <input v-model.trim="newProjectName"/>
            <span @click="createNewProject">+</span>
        </div>
    </div>
</template>

<script lang="ts">
    import {State, Action} from "vuex-class";
    import {Component, Vue} from "vue-property-decorator";
    import Project from "@/components/Project/Project.vue";
    import {ProjectsState} from "@/pages/ProjectView/projects";

    let uid = 0;

    @Component({
        components: {Project}
    })
    export default class ProjectView extends Vue {

        @State kanban!: ProjectsState;
        @Action("createProject") createProject: any;
        @Action("deleteProject") deleteProject: any;

        private newProjectName = "";

        createNewProject() {
            this.createProject({id: uid++, name: this.newProjectName});
            this.newProjectName = "";
        }

        deleteExistingProject() {
            this.createProject({id: uid++, name: this.newProjectName});
            this.newProjectName = "";
        }
    }
</script>

<style lang="scss" scoped>
    @import "ProjectView.scss";
</style>
