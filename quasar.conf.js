// Configuration for your app
let path = require('path')
const envparsers = require ('./src/config/envparser')

module.exports = function (ctx) {
	return {
		// app boot file (/src/boot)
		// --> boot files are part of "main.js"
		boot: [
			"i18n",
			"axios",
			"apollo",
			"general",
			"trend",
			"global",
			"rutasDinamicas",
			"packer",
			"componentes",
			"notify-defaults"
		],

		css: ["app.styl"],

		extras: [
			"roboto-font",
			"material-icons", // optional, you are not bound to it
			"material-icons-outlined",
			"material-icons-round",
			"material-icons-sharp",
			// 'ionicons-v4',
			// 'mdi-v3',
			"fontawesome-v5"
			// 'eva-icons'
		],

		framework: {
			all: true, // --- includes everything; for dev only!

			// components: [
			//   'QLayout',
			//   'QHeader',
			//   'QDrawer',
			//   'QPageContainer',
			//   'QPage',
			//   'QToolbar',
			//   'QToolbarTitle',
			//   'QBtn',
			//   'QIcon',
			//   'QList',
			//   'QItem',
			//   'QItemSection',
			//   'QItemLabel'
			// ],

			directives: ["Ripple"],

			// Quasar plugins
			plugins: ["Notify"],

			// iconSet: 'ionicons-v4'
			lang: "es" // Quasar language
		},

		supportIE: false,

		build: {
			scopeHoisting: true,
			vueRouterMode: "history",
			// vueRouterBase:'',
			// vueCompiler: true,
			// gzip: true,
			// analyze: true,
			// extractCSS: false,
			distDir: ctx.mode.spa ? "public" : null,
			env: envparsers(),
			extendWebpack(cfg) {
				cfg.resolve.alias = {
					...cfg.resolve.alias,
					// Add your own alias like this
					vue$: "vue/dist/vue.esm.js",
					"@": "src",
					"@statics": "src/statics",
					"@utils": "src/utils"
				};
			}
		},

		devServer: {
			// https: true,
			port: 9000,
			open: true // opens browser window automatically
		},

		animations: "all",

		ssr: {
			pwa: false
		},

		pwa: {
			// workboxPluginMode: 'InjectManifest',
			// workboxOptions: {},
			manifest: {
				// name: 'Quasar App',
				// short_name: 'Quasar-PWA',
				// description: 'Best PWA App in town!',
				display: "standalone",
				orientation: "portrait",
				background_color: "#ffffff",
				theme_color: "#027be3",
				icons: [
					{
						src: "statics/icons/icon-128x128.png",
						sizes: "128x128",
						type: "image/png"
					},
					{
						src: "statics/icons/icon-192x192.png",
						sizes: "192x192",
						type: "image/png"
					},
					{
						src: "statics/icons/icon-256x256.png",
						sizes: "256x256",
						type: "image/png"
					},
					{
						src: "statics/icons/icon-384x384.png",
						sizes: "384x384",
						type: "image/png"
					},
					{
						src: "statics/icons/icon-512x512.png",
						sizes: "512x512",
						type: "image/png"
					}
				]
			}
		},

		cordova: {
			// id: 'org.cordova.quasar.app'
		},

		electron: {
			// bundler: 'builder', // or 'packager'

			extendWebpack(cfg) {
				// do something with Electron main process Webpack cfg
				// chainWebpack also available besides this extendWebpack
			},

			packager: {
				// https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options
				// OS X / Mac App Store
				// appBundleId: '',
				// appCategoryType: '',
				// osxSign: '',
				// protocol: 'myapp://path',
				// Window only
				// win32metadata: { ... }
			},

			builder: {
				// https://www.electron.build/configuration/configuration
				// appId: 'quasar-app'
			}
		}
	};
}
