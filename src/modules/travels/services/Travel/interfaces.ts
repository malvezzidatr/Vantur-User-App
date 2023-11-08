export interface User {
  id: string;
  create_at: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  travels: Travel[];
  pendingUser: PendingUser[];
  confirmeds: ConfirmedUser[];
}

export interface Travel {
  id: string;
  value: string;
  departure_location: string;
  destination: string;
  seats: number;
  owner: User | null;
  ownerId: string | null;
  file: Uint8Array[];
  pendents: PendingUser[];
  confirmeds: ConfirmedUser[];
}

export interface PendingUser {
  id: string;
  user: User;
  userId: string;
  travel: Travel;
  travelId: string;
}

export interface ConfirmedUser {
  id: string;
  user: User;
  userId: string;
  travel: Travel;
  travelId: string;
}
