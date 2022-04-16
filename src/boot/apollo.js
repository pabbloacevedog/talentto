import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext as ST } from "apollo-link-context";
import VueApollo from "vue-apollo";
import fetch from "node-fetch";
// import { createHttpLink } from 'apollo-link-http'
import { split } from "apollo-link";
import { createUploadLink } from "apollo-upload-client";
import { getMainDefinition } from "apollo-utilities";

// const httpLink = createHttpLink({ uri: process.env.API_URL, fetch: fetch })
const httpLink = createHttpLink({
	uri: process.env.GRAPHQL_URL,
	fetch: fetch,
});

const apolloClient = new ApolloClient({
	link: httpLink,
	// link: ApolloLink.from([
	// 	onError(({ graphQLErrors, networkError }) => {
	// 		if (graphQLErrors)
	// 			graphQLErrors.map(({ message, locations, path }) =>
	// 				console.log(
	// 					`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
	// 				)
	// 			);
	// 		if (networkError) console.log(`[Network error]: ${networkError}`);
	// 	}),
	// 	authLink,
	// 	// omitTypenameLink,
	// 	terminatingLink,
	// ]),
	cache: new InMemoryCache({ addTypename: false }),
	connectToDevTools: true,
});

const apollo = new VueApollo({
	defaultClient: apolloClient,
	errorHandler({ graphQLErrors, networkError }) {
		if (graphQLErrors) {
			graphQLErrors.map(({ message, locations, path }) =>
				console.log(
					`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
				)
			);
		}
		if (networkError) {
			console.log(`[Network error]: ${networkError}`);
		}
	},
});
console.log(
	`[process.env.VUE_APP_GRAPHQL_HTTP]: ${process.env.VUE_APP_GRAPHQL_HTTP}`
);
// window.__APOLLO_CLIENT__ = apollo
export default ({ app, Vue, store }) => {
	Vue.use(apollo);
	app.apolloProvider = apollo;
	store.$apollo = apollo;
	Vue.prototype.$apollo = apollo;
};
