import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from "vue-apollo";
import fetch from "node-fetch";
const httpLink = createHttpLink({
	uri: process.env.GRAPHQL_URL,
	fetch: fetch,
});

const apolloClient = new ApolloClient({
	link: httpLink,
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
	Vue.use(VueApollo);
	app.apolloProvider = apollo;
	store.$apollo = apollo;
	Vue.prototype.$apollo = apollo;
};
