import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

export default new ApolloClient({
    link: new HttpLink({uri: 'https://api-euwest.graphcms.com/v1/cjtehr84z9ud301ej2y74piud/master'}),
    cache: new InMemoryCache(),
});
