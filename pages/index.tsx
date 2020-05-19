import Link from 'next/link'
import Layout from '../components/Layout'
import { Spacer, Select, Text, Button } from '@zeit-ui/react'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Text h1>This should have the base styles</Text>
    <Spacer y={1} />
    <Button>The button has the font styles</Button>
    <Spacer y={1} />
    <Text>The select does not have the font styles</Text>
    <Select placeholder="Choose one" onChange={console.log}>
      <Select.Option value="1">Option 1</Select.Option>
      <Select.Option value="2">Option 2</Select.Option>
    </Select>
  </Layout>
)

export default IndexPage
