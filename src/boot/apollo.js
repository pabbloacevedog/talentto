import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from "vue-apollo";
import fetch from "node-fetch";
import { createHttpLink } from "apollo-link-http";

const httpLink = createHttpLink({ uri: process.env.API_URL, fetch: fetch });

const apolloClient = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
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

// window.__APOLLO_CLIENT__ = apollo
export default ({ app, Vue, store }) => {
	Vue.use(apollo);
	app.apolloProvider = apollo;
	store.$apollo = apollo;
	Vue.prototype.$apollo = apollo;
};
