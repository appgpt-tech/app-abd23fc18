//Source code generated by AppGPT (www.appgpt.tech)
import { Admin, Resource, CustomRoutes } from 'react-admin';
import { customDataProvider } from './dataProvider';
import fakeDataProvider from 'ra-data-fakerest';
import { Dashboard } from './dashboard';
import { authProvider, apInitialize } from './authProvider';
import { i18nProvider } from './i18nProvider';
import LoginPage, { Login } from './Login';
import data from './data';
import {
  UserFilesList,
  UserFilesCreate,
  UserFilesEdit,
} from './resources/UserFiles';
import {
  ConversionFormatsList,
  ConversionFormatsCreate,
  ConversionFormatsEdit,
} from './resources/ConversionFormats';
import {
  ConversionTasksList,
  ConversionTasksCreate,
  ConversionTasksEdit,
} from './resources/ConversionTasks';
import UserFilesIcon from '@mui/icons-material/Folder';
import ConversionFormatsIcon from '@mui/icons-material/Transform';
import ConversionTasksIcon from '@mui/icons-material/HourglassEmpty';
// SUPERTOKENS
import React from 'react';
import SuperTokens, {
  SuperTokensWrapper,
  getSuperTokensRoutesForReactRouterDom,
} from 'supertokens-auth-react';
import ThirdPartyPasswordless from 'supertokens-auth-react/recipe/thirdpartypasswordless';
import Session from 'supertokens-auth-react/recipe/session';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import * as reactRouterDom from 'react-router-dom';
let sessionFn = Session.init();
SuperTokens.init({
  appInfo: {
    appName: import.meta.env.VITE_SUPERTOKENS_APPNAME,
    apiDomain: import.meta.env.VITE_BACKEND_DOMAIN,
    websiteDomain: import.meta.env.VITE_SUPERTOKENS_WEBSITEDOMAIN,
    apiBasePath: import.meta.env.VITE_BACKEND_APIPATH + '/auth',
    websiteBasePath: import.meta.env.VITE_SUPERTOKENS_WEBSITEBASEPATH,
  },
  recipeList: [
    ThirdPartyPasswordless.init({
      contactMethod: 'EMAIL',
      signInUpFeature: {
        providers: [
          ThirdPartyPasswordless.Github.init(),
          //ThirdPartyPasswordless.Google.init(),
          //ThirdPartyPasswordless.Facebook.init(),
          //ThirdPartyPasswordless.Apple.init(),
        ],
      },
    }),
    sessionFn,
  ],
});
apInitialize(Session);
// END SUPERTOKENS
let dataProvider: any;
if (import.meta.env.VITE_USE_BACKEND_DATA === 'true') {
  dataProvider = customDataProvider(
    import.meta.env.VITE_BACKEND_DOMAIN +
      import.meta.env.VITE_BACKEND_APIPATH +
      '/proxy',
  );
} else {
  dataProvider = fakeDataProvider(data.defaultData);
}

const App = () => (
  <SuperTokensWrapper>
    <BrowserRouter basename="/abd23fc18">
      <Admin
        authProvider={
          import.meta.env.VITE_ENVIRONMENT != 'DEV' ? authProvider : undefined
        }
        requireAuth
        loginPage={LoginPage}
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
        dashboard={Dashboard}
      >
        <Resource
          name="UserFiles"
          options={{ label: 'User Files' }}
          list={UserFilesList}
          create={UserFilesCreate}
          edit={UserFilesEdit}
          recordRepresentation="fileName"
          icon={UserFilesIcon}
        />
        <Resource
          name="ConversionFormats"
          options={{ label: 'Conversion Formats' }}
          list={ConversionFormatsList}
          create={ConversionFormatsCreate}
          edit={ConversionFormatsEdit}
          recordRepresentation="formatName"
          icon={ConversionFormatsIcon}
        />
        <Resource
          name="ConversionTasks"
          options={{ label: 'Conversion Tasks' }}
          list={ConversionTasksList}
          create={ConversionTasksCreate}
          edit={ConversionTasksEdit}
          recordRepresentation="taskId"
          icon={ConversionTasksIcon}
        />
        <CustomRoutes noLayout>
          {/*This renders the login UI on the /auth route*/}
          {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
          {/*Your app routes*/}
        </CustomRoutes>
      </Admin>
    </BrowserRouter>
  </SuperTokensWrapper>
);

export default App;
