import * as React from 'react';
import Helmet from 'react-helmet';

import Layout from "../components/layout"
import SEO from '../components/seo'

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface ProjectsPageProps {
}

const Projects: React.FunctionComponent<ProjectsPageProps> = () => (
  <Layout>
    <SEO pageTitle='Projetos' />
    <h1>Projetos</h1>
    <hr />
    <p>
        Meus Projetos {' '}
        <a href='https://github.com/juniordesenv'>
            GitHUb
        </a>
        <ul>
            <li>
                <a href='https://github.com/juniordesenv/clean-node-api'>Clean Node API</a>
            </li>
        </ul>
    </p>
  </Layout>
)

export default Projects
