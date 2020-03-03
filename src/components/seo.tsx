import React from 'react';

import { StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import meImg from '../images/me.jpg'

const siteQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title
                author
            }
        }
    }
`;

interface MetaProps {
    name: string
    content: string
}

interface SeoProps {
    pageTitle?: string
    description: string
    keywords: string
    meta?: MetaProps[]
}

const seo: React.SFC<SeoProps> = ({ 
    pageTitle, 
    description, 
    keywords, 
    meta = [],
 }) => (
    <StaticQuery
        query={siteQuery}
        render={data => (
            <Helmet
            htmlAttributes={{ lang: 'pt-br' }}
                title={pageTitle || data.site.siteMetadata.title}
                titleTemplate={pageTitle && `%s | ${data.site.siteMetadata.title}`}
                meta={[
                    { name: 'description', content: description },
                    { name: 'keywords', content: keywords },
                    { name: 'twitter:card', content: 'summary' },
                    { name: 'twitter:creator', content: data.site.siteMetadata.author },
                    { name: 'twitter:title', content: pageTitle },
                    { name: 'twitter:description', content: description },
                    { name: 'og:title', content: pageTitle },
                    { name: 'og:description', content: description },
                    { name: 'og:type', content: 'website' },
                    { name: 'og:url', content: data.site.siteMetadata.siteUrl },
                    { name: 'og:image', content: `${data.site.siteMetadata.siteUrl}${meImg}` },
                    { name: 'og:image:alt', content: description },
                    { name: 'og:image:type', content: 'image/jpg' },
                    { name: 'og:image:width', content: '319' },
                    { name: 'og:image:height', content: '551' },
                ].concat(meta)}
            />
        )}
    />
)

export default seo;