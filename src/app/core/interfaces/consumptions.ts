export interface Consumptions {
    id: string;
    calls: Call[];
    messages: Message[];
}

interface Call {
    targetNumber: string;
    eventDateTime: string;
    eventDuration: string;
}

interface Message {
    targetNumber: string;
    eventDateTime: string;
}
