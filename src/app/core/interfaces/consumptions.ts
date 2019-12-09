export interface Consumptions {
  id: string;
  calls: Call[];
  messages: Message[];
}

export interface Call {
  targetNumber: string;
  eventDateTime: string;
  eventDuration: string;
}

export interface Message {
  targetNumber: string;
  eventDateTime: string;
}
