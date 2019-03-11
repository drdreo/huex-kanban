<template>
    <router-link :to="{name: 'board', params: { id } }" tag="div">
        <div class="blog-card spring-fever">
            <div class="title-content">
                <h3>{{name}}</h3>
            </div>
            <hr/>
            <div class="card-info">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim.
            </div><!-- /.card-info -->
            <div class="utility-info">
                <ul class="utility-list">
                    <li class="comments">12</li>
                    <li class="date">03.12.2015</li>
                </ul>
            </div><!-- /.utility-info -->
            <!-- overlays -->
            <div class="gradient-overlay"></div>
            <div class="color-overlay"></div>
        </div><!-- /.blog-card -->

    </router-link>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class Project extends Vue {
        @Prop()
        private id!: number;

        @Prop()
        private name!: string;
    }
</script>

<style lang="scss" scoped>
    @import "Project.scss";
</style>
