<template>
  <main>
    <button v-on:click="getUsers()">Hämta</button>
    {{ occupants }}
  </main>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import http from "../http-common";
import { User } from "../types/index";

// import { Component, Prop, Vue } from "vue-property-decorator";
import DataService from "@/services/data.service";

@Component
export default class Home extends Vue {
  private users: User[] = [];

  getUsers() {
    DataService.getUsers().then((res) => (this.users = res.data));
  }
}
</script>

<style lang="scss"></style>
