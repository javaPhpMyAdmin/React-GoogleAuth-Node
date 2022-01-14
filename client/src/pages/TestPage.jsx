import { Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'

export default function TestPage() {
  return (
    <Layout>
      <Heading>TEST PAGE</Heading>
      <Container maxW='container.lg' py={4}>
        <Text>Only for showing how REDIRECTS WORK, i.e. REDIRECT TO or BACK</Text>
      </Container>
    </Layout>
  )
}
