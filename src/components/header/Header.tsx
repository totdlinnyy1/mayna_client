import {Center, Heading} from '@hope-ui/solid'
import {Component} from 'solid-js'

const Header: Component = () => {
  return (
    <Center w='100%' borderBottom='1px solid var(--hope-colors-neutral12)'>
      <Heading fontSize='$4xl'>Mayna</Heading>
    </Center>
  )
}

export default Header
