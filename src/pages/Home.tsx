import { Contact } from '../sections/Contact'
import { Deployment } from '../sections/Deployment'
import { Hero } from '../sections/Hero'
import { HowWeWork } from '../sections/HowWeWork'
import { Industries } from '../sections/Industries'
import { Problems } from '../sections/Problems'
import { Solutions } from '../sections/Solutions'
import { WhyUs } from '../sections/WhyUs'

export function Home() {
  return (
    <main>
      <Hero />
      <Industries />
      <Problems />
      <Solutions />
      <Deployment />
      <HowWeWork />
      <WhyUs />
      <Contact />
    </main>
  )
}
