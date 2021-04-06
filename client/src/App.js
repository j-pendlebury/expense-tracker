import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainProvider } from './context/MainContext'
import Homepage from './pages/Homepage';
import HistoryPage from './pages/HistoryPage';
import PaymentsPage from './pages/PaymentsPage';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <MainProvider>
      <Navigation />
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/history" exact component={HistoryPage} />
          <Route path="/payments" exact component={PaymentsPage} />
        </Switch>
      </Router>
    </MainProvider>
  )
}

export default App
