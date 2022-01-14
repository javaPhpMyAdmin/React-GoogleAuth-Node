import {
  Badge,
  chakra,
  Code,
  Heading,
  List,
  ListItem,
  OrderedList,
} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../components/Layout'
//import { useAuth } from '../contexts/AuthContext'

export default function Homepage() {
  return (
    <Layout>
      <Heading>Home page</Heading>
      {/* <Text my={6}>{currentUser?.email}</Text> */}

      <Heading>
        Firebase Authentication
        <chakra.span
          fontWeight='black'
          fontStyle='italic'
          fontSize='9xl'
          mx={2}
        >
          v9
        </chakra.span>
        <Badge
          fontWeight='black'
          fontSize='4xl'
          mx={2}
          px={2}
          colorScheme='green'
        >
          NEW API UTILS EXAMPLES
        </Badge>
      </Heading>
      <OrderedList fontSize='3xl' my={4}>
        <ListItem>Email password authentication (Register/Login)</ListItem>
        <ListItem>Google Sign in</ListItem>
        <ListItem>Forgot Password</ListItem>
        <ListItem>Custom Reset password page</ListItem>
        <ListItem>Protected routes</ListItem>
        <ListItem>
          <Code fontSize='inherit'> Redirect TO</Code> or Back (keeping the
          state)
        </ListItem>
        <ListItem>
          CUSTOM Auth Hook <Code fontSize='3xl'>useAuth()</Code>
        </ListItem>
        <ListItem>LOADING INDICATORS WHILE SIGN-IN/Up</ListItem>
        <ListItem>
          Dark Mode enabled template using
          <Badge
            fontSize='inherit'
            colorScheme='teal'
            mx={2}
            textTransform='capitalize'
            borderRadius='md'
          >
            Chakra UI
          </Badge>
        </ListItem>
      </OrderedList>
      <Heading size='md' mt={8}>
        SOME OTHER LINKS ( ONLY FOR REFERENCE ) :
      </Heading>
      <List>
        <ListItem>
          <Link style={{ color: '#00f' }} to='/reset-password'>RESET PASSWORD PAGE</Link>
        </ListItem>
        <ListItem>
          <Link style={{ color: '#00f' }} to='/forgot-password'>FORGOT PASSWORD PAGE</Link>
        </ListItem>
        <ListItem>
          <Link style={{ color: '#00f' }} to='/test'>TEST PAGE</Link>
        </ListItem>
      </List>
    </Layout>
  )
}
