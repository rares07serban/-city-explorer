import { useState } from 'react'
import { destinatii as destinatiiInitiale } from './data/destinatii.js'
// Am adăugat stergeDestinatie în lista de importuri:
import { getNevizitate, totalZile, marcheazaVizitat, adaugaDestinatie, stergeDestinatie } from './utils/destinatii.js'
import Rezumat from './components/Rezumat.jsx'
import FormularDestinatie from './components/FormularDestinatie.jsx'
import ListaDestinatii from './components/ListaDestinatii.jsx'
import './App.css'

export default function App() {
  const [destinatii, setDestinatii] = useState(destinatiiInitiale)

  const numarTotal = destinatii.length
  const listaNevizitate = getNevizitate(destinatii)
  const numarNevizitate = listaNevizitate.length
  const zileDeVizitat = totalZile(listaNevizitate)

  function handleToggle(id) {
    setDestinatii((curent) => marcheazaVizitat(curent, id))
  }

  function handleAdd(destinatieNoua) {
    setDestinatii((curent) => adaugaDestinatie(curent, destinatieNoua))
  }

  // Funcția nouă care șterge destinația din starea React:
  function handleDelete(id) {
    setDestinatii((curent) => stergeDestinatie(curent, id))
  }

  return (
    <main>
      <h1>City Explorer</h1>
      <Rezumat 
        total={numarTotal} 
        nevizitate={numarNevizitate} 
        zile={zileDeVizitat} 
      />
      <FormularDestinatie onAdd={handleAdd} />
      <ListaDestinatii 
        destinatii={destinatii} 
        onToggle={handleToggle} 
        onDelete={handleDelete} 
      />
    </main>
  )
}