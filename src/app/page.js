'use client'
import Accordions from './components/Accordions'
import Archive from './components/Archive'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Settings from './components/Settings'

export default function Home() {
  return (
    <main>
      <Header></Header>
      <SearchBar></SearchBar>
      <Accordions></Accordions>
      <Settings></Settings>
      <Archive></Archive>
    </main>
  )
}
