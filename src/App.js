import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { Layout } from './components/Layout';
import { NotFound } from './components/NotFound';
import { Portfolio } from './components/Portfolio';
import { Resume } from './components/Resume';
import { CreateResume } from './components/CreateResume';
import './custom.css';
//import './components/styles/colors.scss';
//import './components/styles/test.scss';
import './components/styles/custom.scss';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about-me' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/resume' component={Resume} />
                <Route path='/create-resume' component={CreateResume} />
                <Route path='/portfolio' component={Portfolio} />
                <Route component={NotFound} />
            </Switch>
      </Layout>
    );
  }
}
