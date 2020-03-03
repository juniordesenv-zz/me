import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <SEO 
      description='Full-stack developer'
      keywords='React, Node, Front end, developer, Back end, MongoDB, Postgres, DevOps, Typescript, Docker, RabbitMQ'
    />
    <h1>Junior Miranda</h1>
    <h2>FullStack</h2>
    <section>
      <h4>Ola, eu sou Junior Miranda!</h4>
      <p>
      Sou um desenvolvedor FullStack, com mais de 6 anos de experiência. 
      Trabalho com Node como minha principal stack de backend desde 2016 e com React desde 2017, 
      tenho experiencia com Typescript, DevOps (Kubernetes, Docker, CI/CD pelo Gitlab), RabbitMQ, Mongo, 
      Postgres, Redis e outros. Com NodeJS tenho experiencia com Express desde um arquitetura simples até 
      uma arquitetura aplicando conceito Solid e outros patteners (incluindo TDD com teste unitário e 
      teste de integração utilizando JEST), Adonis e outros. Com React, 
      tenho experiencia com o Redux, MaterialUI, Next, arquitetura de projeto e outros.
      </p>
      <p>
        Meus projetos {' '}
        <Link to='/projects'>Projetos</Link>
      </p>
    </section>
  </Layout>
)

export default IndexPage
