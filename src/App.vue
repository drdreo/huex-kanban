<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <Task title="Auto waschen" description="Das Auto ist dreckig und muss gewaschen werden!" active="false"></Task>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue';
    import Task from './components/task/Task';

    export default {
        name: 'app',
        components: {
            HelloWorld,
            Task
        }
    };
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
