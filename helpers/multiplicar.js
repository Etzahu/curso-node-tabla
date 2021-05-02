const { promises } = require("dns");
const fs = require("fs");
const colors = require("colors");

const crearArchivo = async(base = 1, listar, limite = 10) => {

  try {
    console.log("=========================");
		console.log(`Tabla del ${base}`);
		console.log("=========================");
		let salida = "";

		for (let i = 1; i <= limite; i++) {
			salida += `${base} x ${i} = ${base * i}\n`;
		}
    if (listar) {
      console.log(salida.green);
    }

		fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
		return `tabla-${base}.txt`;
  } catch (error) {
    console.log(error)
  }
  

};

// Exportar funcion de multiplicar

module.exports = {
	crearArchivo
};
