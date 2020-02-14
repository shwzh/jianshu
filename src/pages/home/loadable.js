import React from "react";
import Loadable from 'react-loadable';

import Loading from './components/my-loading-component';

const LoadableComponent = Loadable({

    loader: () => import('./'),

    loading: Loading,

});

export default () => <LoadableComponent/>;