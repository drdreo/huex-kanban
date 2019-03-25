import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

// fixes fetch error: fetch is not found globally and no fetcher passed, due to not available on the server
import fetch from 'unfetch';

const link = createHttpLink({uri: 'https://api-euwest.graphcms.com/v1/cjtehr84z9ud301ej2y74piud/master', fetch: fetch});

export default new ApolloClient({
    link: link,
    cache: new InMemoryCache(),
});
