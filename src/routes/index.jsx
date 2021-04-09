import { Switch, Route } from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary';
import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';

const Routes = () => (
  <ErrorBoundary>
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='*'>
        <PageNotFound />
      </Route>
    </Switch>
  </ErrorBoundary>
);

export default Routes;
