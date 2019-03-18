<template>
    <div class="card">
        <div class="card-remove" @click="removeProject">X</div>
        <router-link :to="{name: 'board', params: { id } }" tag="div" class="card-router">

            <div class="title-content">
                <h3>{{name}}</h3>
            </div>
            <hr/>
            <div class="card-info">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim.
            </div>
            <div class="utility-info">
                <ul class="utility-list">
                    <li class="tasks">{{tasks.length}}</li>
                </ul>
            </div>
            <div class="gradient-overlay"></div>
            <div class="color-overlay"></div>
        </router-link>

    </div>

</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {Action} from "vuex-class";

    @Component
    export default class Project extends Vue {
        @Prop()
        id!: string;

        @Prop()
        name!: string;

        @Prop()
        tasks!: any[];

        @Action("deleteProject") deleteProject: any;

        removeProject() {
            this.deleteProject(this);
        }

    }
</script>

<style lang="scss" scoped>
    @import "Project.scss";
</style>
