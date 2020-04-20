import React from 'react'
import NextHead from 'next/head'
import { string } from 'prop-types'

const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = '/static/preview.jpg'

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || ''}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/static/apple-touch-icon-57x57.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/static/apple-touch-icon-114x114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/static/apple-touch-icon-72x72.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/static/apple-touch-icon-144x144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="60x60" href="/static/apple-touch-icon-60x60.png" />
    <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/static/apple-touch-icon-120x120.png" />
    <link rel="apple-touch-icon-precomposed" sizes="76x76" href="/static/apple-touch-icon-76x76.png" />
    <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/static/apple-touch-icon-152x152.png" />
    <link rel="icon" type="image/png" href="/static/favicon-196x196.png" sizes="196x196" />
    <link rel="icon" type="image/png" href="/static/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/png" href="/static/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="/static/favicon-16x16.png" sizes="16x16" />
    <link rel="icon" type="image/png" href="/static/favicon-128.png" sizes="128x128" />
    <meta name="application-name" content="&nbsp;" />
    <meta name="msapplication-TileColor" content="#3551ab" />
    <meta name="msapplication-TileImage" content="/static/mstile-144x144.png" />
    <meta name="msapplication-square70x70logo" content="/static/mstile-70x70.png" />
    <meta name="msapplication-square150x150logo" content="/static/mstile-150x150.png" />
    <meta name="msapplication-wide310x150logo" content="/static/mstile-310x150.png" />
    <meta name="msapplication-square310x310logo" content="/static/mstile-310x310.png" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ''} />
    <meta property="og:type" content="website" />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="800" />
    <meta property="og:image:height" content="800" />
    <script src="//code.tidio.co/fhbhfntazlreebvo84eosz7njkwljcsv.js"></script>
    {/* <script async defer crossorigin="anonymous" src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v6.0"></script> */}

  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default Head
