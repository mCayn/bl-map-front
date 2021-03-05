import http from '../http-common';

class DataService {
  getUsers() {
    return http.get('/user');
  }

  getOccupations() {
    return http.get('/map/occupations');
  }
}

export default new DataService();
