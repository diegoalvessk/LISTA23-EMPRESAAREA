class Cliente{
    Nome
    Cpf
    DataNascimento

    constructor(nome, cpf, dataNascimento){
        this.Nome = nome
        this.Cpf = cpf
        this.DataNascimento = dataNascimento
    }

}

class PacoteViagem{
    Titular
    PassagemIda
    PassagemVolta  
    ValorTotal

    constructor(passagemArea, passagemVolta){
        this.Titular = passagemArea.Passageiro
        this.PassagemIda = passagemArea.Voo.Data
        this.PassagemVolta = passagemVolta
        this.ValorTotal = passagemArea.Valor
    }


}

class Voo{
    Empresa
    Numero
    Data
    Horario
    LocalPartida
    LocalDestino

    constructor(empresa, numero, data, horario, localDestino, localPartida){
        this.Empresa = empresa
        this.Numero = numero
        this.Data = data
        this.Horario = horario
        this.LocalPartida = localPartida
        this.LocalDestino = localDestino
    }
}

class PassagemArea{
    Assento
    PrimeiraClasse
    Valor
    Passageiro
    Voo

    constructor(assento, primeiraClasse, valor, cliente, voo){
        this.Assento = assento
        this.PrimeiraClasse = primeiraClasse
        this.Valor = valor
        this.Passageiro = cliente
        this.Voo = voo
    }


    CalcularValor(){
        if(this.PrimeiraClasse == true){
            this.Valor = (this.Valor/100) * 150
        }

        console.log("Funcionando certinho.")
    }

    ExibirResumo(){
        alert(" Passagem no nome de: " + this.Passageiro.Nome + "no assento: " + this.Assento + " do voo " + this.Voo.Numero + " com destino a " + this.Voo.LocalDestino)
    }
}

let cliente = new Cliente("Diego Alves", "70102836647","25/01/2004")

let voo = new Voo("Azul","13554","24/01/2022",14,"Ipatinga, Minas Gerais","Amsterdan, Holanda")

let passagemArea = new PassagemArea(14, true, 1500.00, cliente, voo)
passagemArea.CalcularValor()

let pacoteViagem = new PacoteViagem(passagemArea, "28/01/2022")