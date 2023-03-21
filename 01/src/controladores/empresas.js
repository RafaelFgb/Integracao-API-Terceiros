const instanciaAxios = require('../axios')
const fs = require('fs/promises')


const detalharEmpresa = async (req, res) => {
    const { dominioEmpresa } = req.query

    try {
        const {data: empresa} = await instanciaAxios.get(`/?domain=${ dominioEmpresa }`)


        if (empresa && empresa.name) {
            const dadosEmpresa = JSON.parse(await fs.readFile(
                './src/dados/empresas.json')
            )

            dadosEmpresa.push(empresa)

            await fs.writeFile(
                './src/dados/empresas.json',
                JSON.stringify(dadosEmpresa, null, 2)
            )

        }
        return res.send(empresa)
    } catch (error) {
        return res.status(500).json('Erro interno do sistema.')
    }


}

module.exports = {
    detalharEmpresa
}