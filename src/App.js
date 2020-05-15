import React, { useEffect, useState } from 'react';
import './App.css';
import ApolloClient from "apollo-client";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import pgDataProvider from 'ra-postgraphile'
import { Admin, Resource } from 'react-admin';
import { OrgList, OrgCreate, OrgEdit, OrgShow } from "./components/Organization"
import { SupplyLoad, CreateSupplyLoad, EditSupplyLoad, ShowSupplyLoad } from "./components/SupplyLoad";
import { createBrowserHistory as createHistory } from 'history';
import { createMuiTheme } from '@material-ui/core/styles';
const history = createHistory();
const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/graphql',
});
const theme = createMuiTheme({
  palette: {
    type: 'dark'
  },
});

const App = () => {
  const [dataProvider, setDataProvider] = useState(null)

  useEffect(() => {
    ; (async () => {
      const dataProvider = await pgDataProvider(new ApolloClient({ cache: cache, link: link, }))
      setDataProvider(() => dataProvider)
    })()
  }, [])

  return (
    dataProvider && (
      <Admin dataProvider={dataProvider} history={history} theme={theme}>
        <Resource name="organization" list={OrgList} create={OrgCreate} edit={OrgEdit} show={OrgShow} />
        <Resource name="supplyload" list={SupplyLoad} create={CreateSupplyLoad} edit={EditSupplyLoad} show={ShowSupplyLoad} />
      </Admin>
    )
  )
}


export default App;
