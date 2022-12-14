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
        this.#Nome = nome
    }

    setCpf(cpf){
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

    constructor(passagemArea){
        this.setTitular(passagemArea)
        this.setPassagemIda(passagemArea)
        this.setPassagemVolta()
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

    setPassagemVolta(){
        this.#PassagemVolta = prompt("Informe em qual data você deseja voltar")
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

        this.#PrimeiraClasse = primeiraClasse
    }

    setValor(valor){
        valor = this.CalcularValor(valor)

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




    CalcularValor(valor){
        if(this.getPrimeiraClasse() == true){
            valor = (valor/100) * 150
        }

        return valor
    }

    ExibirResumo(){
        alert(" Passagem no nome de: " + this.getPassageiro().Nome + "no assento: " + this.getAssento() + " do voo " + this.getVoo().Numero + " com destino a " + this.getVoo().LocalDestino)
    }
}

let condicao = "6"
let cliente
let clientes = []
let vou
let voos = []
let passagemArea
let passagensAreas = []
let pacoteViagem 
let pacotesViagens = []
let nome = ""

do {
    condicao = prompt("O que o deseja?" + "\n" + "1 = Criar novo cliente." + "\n" + "2 = Criar novo voo." + "\n" + "3 = Comprar uma passagem aerea" + "\n" + "4 - Comprar pacote de viagem.")
    switch (condicao) {
        case "1":
            let nome = prompt("Informa o seu Nome.")
            
                while(nome.length>50){
                    alert("Informe novamente seu nome, respeitando o número de caracteres máximo de 50.")
                    nome = prompt("Informe o nome novamente.")
                }

            let cpf = prompt("Informa o número do cpf")

                while(cpf.length != 11){
                    alert("Informe novamente seu cpf, respeitando o número de caracteres de 11.")
                    cpf = prompt("Informe o cpf novamente.")
                }

            let dataNascimento = prompt("Informe sua data de nascimento")

            cliente = new Cliente(nome, cpf, dataNascimento)

            clientes.push(cliente)
            break;

        case "2":
            let empresa = prompt("Informe o nome da empresa do voo.")
            let numero = parseInt(prompt("Informe o número do voo."))
            let data = prompt("Informe a data do voo.")
            let horario = prompt("Informe o horario do voo.")
            let localPartida = prompt("Informe o local de partida do voo.")
            let localDestino = prompt("Informe o local de destino do voo.")

            vou = new Voo(empresa, numero, data, horario, localPartida, localDestino)

            voos.push(vou)
            break;

        case "3":
            alert("Escolha o cliente que esta efetuando a compra da passagem.")

                for (let index = 0; index < clientes.length; index++) {
                    console.log(clientes[index])
                }

            let passageiro = prompt("Informe aqui o nome do cliente completo e sem erros")

            let cont = 0

                while(cont == 0){
                    for (let index = 0; index < clientes.length; index++) {
                    if(passageiro == clientes[index].getNome()){
                        alert("Cliente autorizado!")
                        cont++
                    }
                    }
                    
                    if(cont == 0){
                        alert("Cliente não encontrado, repita o nome.")
                        passageiro = prompt("Informe aqui o nome do cliente completo e sem erros")
                    }
                }

            alert("Escolha agora no nosso quadro de voos, o voo que você deseja!")

                for (let index = 0; index < voos.length; index++) {
                    console.log(voos[index])
                }

            let voo = parseInt(prompt("Informe o número do voo que deseja marcar sua passagem."))

                while(cont == 0){
                    for (let index = 0; index < voos.length; index++) {
                    if(voo == voos[index].getNumero()){
                        alert("Voo encontrado!")
                        cont++
                    }
                    }
                    
                    if(cont == 0){
                        alert("Voo não encontrado, repita o número do voo.")
                        voo = promp("Informe o número do voo que deseja marcar sua passagem.")
                    }

                }

            

            let primeiraClasse = prompt("Você deseja voo primeira classe? s = sim e n = nao")

            if(primeiraClasse == "s"){
                primeiraClasse = true
            }else{
                primeiraClasse = false
            }

            let assento = parseInt(prompt("Informe o número do acento que deseja."))

            for (let index = 0; index < passagensAreas.length; index++) {
                if(voo == passagensAreas[index].getVoo()){
                   while(assento == passagensAreas[index].getAssento()){
                        alert("Já existe uma pessoa nessa vaga, escolha outra.")
                        assento = prompt("Informe o número do acento que deseja.")
                    }
                }
            }

            let valor = parseInt(prompt("Informe o valor do voo."))

            while(valor<=0){
                valor = parseInt(prompt("Informe o valor do voo maior que 0."))
            }


            passagemArea = new PassagemArea(assento, primeiraClasse, valor, passageiro, voo)
            passagensAreas.push(passagemArea)
            break;
        


        case "4":
            let nomi = alert("Informe o nome do dono da passagemArea.")


            let cont2 = 0

                while(cont2 == 0){
                    for (let index = 0; index < clientes.length; index++) {
                    if(nomi == clientes[index].getNome()){
                        alert("Passageiro autorizado!")
                        nomi = index
                        cont2++
                    }
                    }
                    
                    if(cont2 == 0){
                        alert("Passageiro não encontrado, repita o nome.")
                        nomi = prompt("Informe aqui o nome do Passageiro completo e sem erros")
                    }
                }
            pacoteViagem = new PacoteViagem(passagemArea)
            
            break;
        case "6":
            alert("Obrigado por usar os nossos serviços!")
            break;
        default:
            break;
    }
} while (condicao != "6");



