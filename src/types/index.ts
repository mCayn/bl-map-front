export interface User {
  id: number;
  name: string;
  tagKey: string;
}

export interface Room {
  id: number;
  name: string;
}

export interface Occupation {
  id: number;
  userId: number;
  roomId: number;
  userName: string;
  roomName: string;
  lastUpdate: string;
}
