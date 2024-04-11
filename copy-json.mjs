import fsExtra from "fs-extra"
import path from "path"

// Obtenemos la ruta del directorio actual
const currentDir = process.cwd()

// Ruta de la carpeta public y dist
const publicFolder = path.resolve(currentDir, "public")
const distFolder = path.resolve(currentDir, "dist")

// Ruta de la carpeta img dentro de public y dist
const imgSourceFolder = path.resolve(publicFolder, "img")
const imgDestFolder = path.resolve(distFolder, "img")

// Función para copiar directorios recursivamente
function copyImgDirectory() {
	fsExtra.ensureDirSync(imgDestFolder) // Aseguramos que la carpeta de destino exista
	fsExtra.copySync(imgSourceFolder, imgDestFolder) // Copiamos la carpeta img de origen a destino
	console.log(`Copied img folder to ${imgDestFolder}`)
}

// Copiar archivos JSON de public a dist
const jsonFiles = [
	"disneyCharacters.json",
	"pixarCharacters.json",
	"starwarsCharacters.json",
	"marvelCharacters.json",
	"countries.json"
]

jsonFiles.forEach((file) => {
	const source = path.resolve(publicFolder, file)
	const destination = path.resolve(distFolder, file)
	fsExtra.copyFileSync(source, destination)
	console.log(`Copied ${file} to ${distFolder}`)
})

// Llamamos a la función para copiar la carpeta img
copyImgDirectory()
