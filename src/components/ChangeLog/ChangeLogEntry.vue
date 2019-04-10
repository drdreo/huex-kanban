<template>
    <div class="changelog-entry">
        <small class="changelog-entry__date">{{ formattedDate }}: </small>
        <span class="changelog-entry__description">
            {{description}}
        </span>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class ChangeLogEntry extends Vue {
        @Prop()
        description!: string;

        @Prop()
        createdAt!: Date;

        private formattedDate: string;

        created() {
            this.formattedDate = new Date(this.createdAt).toLocaleString();
        }
    }
</script>

<style lang="scss" scoped>
    @import "ChangeLogEntry.scss";
</style>
