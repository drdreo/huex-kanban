<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import VueRouter from "vue-router";
    import TasksView from "@/pages/TasksView/TasksView.vue";
    import ProjectView from "@/pages/ProjectView/ProjectView.vue";
    import store from "@/store";
    import ChangeLogView from "@/pages/ChangeLogView/ChangeLogView.vue";

    Vue.use(VueRouter);

    const routes = [
        {path: "/", component: ProjectView},
        {path: "/project/:id/board", name: "board", props: true, component: TasksView},
        {path: "/project/:id/changelog", name: "changelog", props: true, component: ChangeLogView}

    ];

    const router = new VueRouter({
        routes
    });

    @Component({
        components: {
            ProjectView,
            TasksView
        },
        router,
        store
    })
    export default class App extends Vue {
    }
</script>

<style>

    *, body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        background: #E2E2E2;
    }

    #app {
        height: 100vh;
        width: 100vw;
        /*background: linear-gradient(to bottom, #E2E2E2, #C9D6FF);*/
        background-color: #ebeaf1;
    }

</style>
