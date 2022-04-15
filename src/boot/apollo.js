import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext as ST } from "apollo-link-context";
import VueApollo from "vue-apollo";
import fetch from "node-fetch";
import { createHttpLink } from "apollo-link-http";

const httpLink = createHttpLink({
	uri: process.env.API_URL,
	fetch: fetch,
});

const authLink = ST((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem("token");
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
		},
	};
});
// Create the apollo client
const apolloClient = new ApolloClient({
	link: authLink.concat(httpLink),
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

export default ({ app, Vue, store }) => {
	Vue.use(VueApollo);
	app.apolloProvider = apollo;
	store.$apollo = apollo;
};
