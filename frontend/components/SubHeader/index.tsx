import type { NextPage } from 'next'
import { HeroSubTitle, HeroTitle, Container } from './styles'

interface Props {
  title: string;
}

export const SubHeader: NextPage<Props> = ({ children, title }) => {
  return (
    <Container>
      <HeroTitle>{title}</HeroTitle>
      <HeroSubTitle>{children}</HeroSubTitle>
    </Container>
  )
}
