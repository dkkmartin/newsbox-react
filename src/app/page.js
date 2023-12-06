'use client'

import Accordions from './components/Accordions'
import Header from './components/Header'
import SearchBar from './components/SearchBar'

export default function Home() {
  return (
    <main>
      <Header></Header>
      <SearchBar></SearchBar>
      <Accordions></Accordions>
    </main>
  )
}
