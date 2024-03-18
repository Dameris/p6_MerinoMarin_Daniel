import { resolve } from "path"

export default {
	chainWebpack: (config) => {
		config.module
			.rule("json")
			.test(/\.json$/)
			.use("json-loader")
			.loader("json-loader")
			.end()
	},
	resolve: {
		alias: {
			"@json": resolve(__dirname, "src/json/")
		}
	}
}
