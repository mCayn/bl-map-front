import http from "../http-common";

class DataService {
  getUsers() {
    return http.get("/user");
  }
}

export default new DataService();
