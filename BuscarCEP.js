class BuscarCEP {

    constructor(
        bairro,
        cep,
        logradouro,
        complemento,
        localidade,
        uf,
        unidade,
        ibge,
        gia
    ) {
        this.bairro = bairro;
        this.cep = cep;
        this.logradouro = logradouro;
        this.complemento = complemento;
        this.localidade = localidade;
        this.uf = uf;
        this.unidade = unidade;
        this.ibge = ibge;
        this.gia = gia;
    }


    static getAddress(cep) {

        try {

            var result = $.ajax({
                type: "GET",
                url: "https://viacep.com.br/ws/" + cep + "/json/?callback=?",
                async: false
            }).responseText;

            result = result.replace('?(', '').replace(');', '');
            result = JSON.parse(result);

            return new BuscarCEP(
                result.bairro,
                result.cep,
                result.logradouro,
                result.complemento,
                result.localidade,
                result.uf,
                result.unidade,
                result.ibge,
                result.gia
            );

        } catch (e) {

            return null;

        }
    }

    getBairro() {
        return this.bairro;
    }

    getCEP() {
        return this.getCEP;
    }

    getLogradouro() {
        return this.logradouro;
    }

    getComplemento() {
        return this.complemento;
    }

    getLocalidade() {
        return this.localidade;
    }
}