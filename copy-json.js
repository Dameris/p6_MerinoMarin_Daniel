const fs = require("fs")
const path = require("path")

// Ruta de la carpeta public y dist
const publicFolder = path.resolve(__dirname, "public")
const distFolder = path.resolve(__dirname, "dist")

// Array con los archivos JSON a copiar
const jsonFiles = [
	"disneyCharacters.json",
	"pixarCharacters.json",
	"starwarsCharacters.json",
	"marvelCharacters.json",
	"countries.json"
]

// Copiar cada archivo JSON de public a dist
jsonFiles.forEach((file) => {
	const source = path.resolve(publicFolder, file)
	const destination = path.resolve(distFolder, file)

	fs.copyFileSync(source, destination)
	console.log(`Copied ${file} to ${distFolder}`)
})
