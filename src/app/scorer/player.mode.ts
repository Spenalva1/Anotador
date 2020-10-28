import { preserveWhitespacesDefault } from '@angular/compiler';

export class Player {
    private name: string;
    private uno: number;
    private dos: number;
    private tres: number;
    private cuatro: number;
    private cinco: number;
    private seis: number;
    private escalera: number;
    private full: number;
    private poker: number;
    private generala: number;
    private generalaDoble: number;

    constructor(name: string) {
        this.name = name;
        this.uno = 0;
        this.dos = 0;
        this.tres = 0;
        this.cuatro = 0;
        this.cinco = 0;
        this.seis = 0;
        this.escalera = 0;
        this.full = 0;
        this.poker = 0;
        this.generala = 0;
        this.generalaDoble = 0;
    }

    get totalPoints(){
        return this.uno
        + this.dos
        + this.tres
        + this.cuatro
        + this.cinco
        + this.seis
        + this.escalera
        + this.full
        + this.poker
        + this.generala
        + this.generalaDoble;
    }
}
