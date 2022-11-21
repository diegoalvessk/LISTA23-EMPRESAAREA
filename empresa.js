class Cliente{
    #Nome
    #Cpf
    #DataNascimento

    constructor(nome, cpf, dataNascimento){
        this.setNome(nome)
        this.setCpf(cpf)
        this.setDataNascimento(dataNascimento)
    }

    setNome(nome){
        while(nome.length>50){
            alert("Informe novamente seu nome, respeitando o número de caracteres máximo de 50.")
            nome = prompt("Informe o nome novamente.")
        }

        this.#Nome = nome
    }

    setCpf(cpf){
        while(cpf.length>11 && cpf.length<11){
            alert("Informe novamente seu cpf, respeitando o número de caracteres de 11.")
            cpf = prompt("Informe o cpf novamente.")
        }

        this.#Cpf = cpf
    }

    setDataNascimento(dataNascimento){
      this.#DataNascimento = dataNascimento
    }

    getNome(){
        return this.#Nome 
    }

    getCpf(){
        return this.#Cpf
    }
    getDatanascimento(){
       return this.#DataNascimento
    }


}

class PacoteViagem{
    #Titular
    #PassagemIda
    #PassagemVolta  
    #ValorTotal

    constructor(passagemArea, passagemVolta){
        this.setTitular(passagemArea)
        this.setPassagemIda(passagemArea)
        this.setPassagemVolta(passagemVolta)
        this.setValorTotal(passagemArea)
    }

    setTitular(passagemArea){
        this.#Titular = passagemArea.getPassageiro()   
    }

    getTitular(){
        return this.#Titular
    }

    setPassagemIda(passagemArea){
        this.#PassagemIda = passagemArea.getVoo()
    }

    getPassagemIDa(){
        return this.#PassagemIda
    }

    setPassagemVolta(passagemVolta){
        this.#PassagemVolta = passagemVolta
    }

    getPassagemVolta(){
        return this.#PassagemVolta
    }

    setValorTotal(passagemArea){
        this.#ValorTotal = passagemArea.getValor()
    }

    getValorTotal(){
        return this.#ValorTotal
    }


}

class Voo{
    #Empresa
    #Numero
    #Data
    #Horario
    #LocalPartida
    #LocalDestino

    constructor(empresa, numero, data, horario, localDestino, localPartida){
        this.setEmpresa(empresa)
        this.setNumero(numero)
        this.setData(data)
        this.setHorario(horario)
        this.setLocalPartida(localPartida)
        this.setLocalDestino(localDestino)
    }

    setEmpresa(empresa){
        this.#Empresa = empresa
    }

    setNumero(numero){
        this.#Numero = numero
    }

    setData(data){
        this.#Data = data
    }

    setHorario(horario){
        this.#Horario = horario
    }

    setLocalPartida(localPartida){
        this.#LocalPartida = localPartida
    }

    setLocalDestino(localDestino){
        this.#LocalDestino = localDestino
    }



    getEmpresa(){
        return this.#Empresa 
    }

    getNumero(){
        return this.#Numero 
    }

    getData(){
        return this.#Data 
    }

    getHorario(){
        return this.#Horario 
    }

    getLocalPartida(){
        return this.#LocalPartida
    }

    getLocalDestino(){
        return this.#LocalDestino 
    }
}

class PassagemArea{
    #Assento
    #PrimeiraClasse
    #Valor
    #Passageiro
    #Voo

    constructor(assento, primeiraClasse, valor, cliente, voo){
        this.setAssento(assento) 
        this.setPrimeiraClasse(primeiraClasse) 
        this.setValor(valor) 
        this.setPassageiro(cliente)
        this.setVoo(voo)
    }


    setAssento(assento){
        this.#Assento = assento
    }

    setPrimeiraClasse(primeiraClasse){
        while(primeiraClasse != true || false){
            alert("Por favor informe um valor aceitavel, true ou false.")
            primeiraClasse = prompt("Informe o valor, true para sim e false para não.")
        }

        this.#PrimeiraClasse = primeiraClasse
    }

    setValor(valor){
        while(valor<=0){
            alert("Não é permitido um valor menor ou igual a 0, informe outro valor.")
            valor = prompt("Informe o novo valor.")
        }

        this.#Valor = valor
    }

    setPassageiro(cliente){
        this.#Passageiro = cliente
    }

    setVoo(voo){
        this.#Voo = voo
    }




    getAssento(){
        return this.#Assento 
    }

    getPrimeiraClasse(){
        return this.#PrimeiraClasse 
    }

    getValor(){
        return  this.#Valor 
    }

    getPassageiro(){
        return this.#Passageiro 
    }

    getVoo(){
        return this.#Voo 
    }




    CalcularValor(){
        if(this.#PrimeiraClasse == true){
            this.#Valor = (this.#Valor/100) * 150
        }

        console.log("Funcionando certinho.")
    }

    ExibirResumo(){
        alert(" Passagem no nome de: " + this.#Passageiro.Nome + "no assento: " + this.#Assento + " do voo " + this.#Voo.Numero + " com destino a " + this.#Voo.LocalDestino)
    }
}

let cliente = new Cliente("Diego Alves", "70102836647","25/01/2004")

let voo = new Voo("Azul","13554","24/01/2022",14,"Ipatinga, Minas Gerais","Amsterdan, Holanda")

let passagemArea = new PassagemArea(14, true, 1500.00, cliente, voo)
passagemArea.CalcularValor()

let pacoteViagem = new PacoteViagem(passagemArea, "28/01/2022")

