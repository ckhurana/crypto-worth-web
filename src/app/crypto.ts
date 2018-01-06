export class Crypto {
    symbol: string; // Unique id
    name: string;
    volume: number;
    rate: number;

    constructor(symbol: string, name: string, volume: number) {
        this.symbol = symbol;
        this.name = name;
        this.volume = volume;
    }
}