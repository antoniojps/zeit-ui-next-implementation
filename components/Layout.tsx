import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Page } from '@zeit-ui/react'

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <Page>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Page.Header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a>Users List</a>
        </Link>{' '}
        | <a href="/api/users">Users API</a>
      </nav>
    </Page.Header>
    <Page.Content>
        {children}
    </Page.Content>
    <Page.Footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </Page.Footer>
  </Page>
)

export default Layout
