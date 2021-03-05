<template>
  <main>
    <button v-on:click="getUsers()">Hämta</button>
    <ul id="listan">
      <li v-for="occupation in occupations" :key="occupation.userName">
        {{ occupation.userName }}
      </li>
    </ul>
    <button v-on:click="startPoller()">Starta Hämtningen</button>
  </main>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';
import http from '../http-common';
import { User, Occupation } from '../types/index';
import { store } from '../store/data-store';
import DataService from '@/services/data.service';
import PollingService from '@/services/polling.service';

@Component
export default class Home extends Vue {
  // private usrs = new Vue();
  private occupations: Occupation[] = [];
  created() {
    store.occupations.then(res => (this.occupations = res.data));
    console.log('store: ', store);
  }

  getUsers() {
    DataService.getUsers().then(res => {
      console.log('data', res.data);
      this.users = res.data;
    });
  }

  startPoller() {
    PollingService.pollerLoop();
  }
}
</script>

<style lang="scss"></style>
