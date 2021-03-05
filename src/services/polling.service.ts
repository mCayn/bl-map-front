import { User } from '@/types';
import Vue from 'vue';
import state from '../store/data-store';
import DataService from './data.service';

class PollingService {
  sleepNow = (delay: number) => new Promise(resolve => setTimeout(resolve, delay));

  keepEmComing() {
    console.log('tittut');
    DataService.getOccupations().then((res: any) => {
      state.occupations = res.data;
      console.log('users i pollern: ', res.data);
      console.log('users i state i pollerns: ', state.occupations);
    });
  }
  async pollerLoop() {
    for (let i = 1; i <= 500; i++) {
      await this.sleepNow(1000);
      this.keepEmComing();
    }
  }
}

export default new PollingService();
