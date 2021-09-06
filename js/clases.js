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