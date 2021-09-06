class Electrodomestico {
    precioBase = 0;
    consumo = "";
    procedencia = ""

    constructor(consumo, procedencia){
        this.consumo = consumo;
        this.procedencia = procedencia;
        this.precioBase = this.calcularPrecioBase(consumo, procedencia);
    }

    get consumo() {
        return this.consumo;
    }

    set consumo(consumo) {
        this.consumo = consumo;
    }

    get procedencia() {
        return this.procedencia;
    }

    set procedencia(procedencia) {
        this.procedencia = procedencia;
    }
    

    calcularPrecioBase(consumo, procedencia){

        this.precioBase =0;
        consumo = consumo.toUpperCase();
        procedencia = procedencia.toUpperCase();

        switch (consumo){
            case "A":
                this.precioBase += 450000;
                break;
            case "B":
                this.precioBase += 350000;
                break;
            case "C":
                this.precioBase += 250000;
                break;
        }

        switch (procedencia){
            case "NACIONAL":
                this.precioBase += 250000;
                break;
            case "IMPORTADO":
                this.precioBase += 350000;
                break;
        }
        return this.precioBase;
    }

    calcularPrecioFinal(){
        this.precioFinal = this.calcularPrecioBase(super.consumo, super.procedencia);
        return this.precioFinal;
    }

}

class Televisor extends Electrodomestico{

    tamanoPantalla;//definida en pulgadas
    sintonizadorTDT = false;
    precioFinal = 0;

    constructor(consumo, procedencia, tamanoPantalla, sintonizadorTDT) {
        super(consumo, procedencia);
        this.tamanoPantalla = tamanoPantalla;
        this.sintonizadorTDT = sintonizadorTDT;
        this.precioFinal = this.calcularPrecioFinal();
    }

    calcularPrecioFinal(){
        this.precioFinal = super.calcularPrecioBase(super.consumo, super.procedencia);
        if(this.tamanoPantalla>40){
            this.precioFinal += (0.3*this.precioFinal);
        }
        if(this.sintonizadorTDT){
            this.precioFinal += 250000;
        };
        return this.precioFinal;
    }

    set tamanoPantalla(tamPantalla){
        this.tamPantalla = tamPantalla;
    }

    set sintonizadorTDT(sintonizadorTDT){
        this.sintonizadorTDT = sintonizadorTDT;
    }

    get tamanoPantalla(){
        return this.tamPantalla;
    }

    get sintonizadorTDT(){
        return this.sintonizadorTDT;
    }

}

class Nevera extends Electrodomestico{
    
    capacidad=0;
    precioFinal=0;

    constructor (consumo, procedencia, capacidad) {
        super(consumo, procedencia);
        this.capacidad = capacidad;
        this.precioFinal = this.calcularPrecioFinal();
    }

    set capacidad(capacidad){
        this.capacidad = capacidad;
    }

    get capacidad(){
        return this.capacidad;
    }

    calcularPrecioFinal(){
        this.precioFinal = super.calcularPrecioBase(super.consumo, super.procedencia);
        if(this.capacidad>120){
            let litrosAdicionales = this.capacidad-120;
            if(litrosAdicionales=>10){
                this.precioFinal += parseInt(litrosAdicionales/10)*(this.precioFinal*0.5);
            }
        }
        return this.precioFinal;
    }

}