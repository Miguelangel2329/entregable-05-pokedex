import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import { Navigate, useNavigate, useParams } from 'react-router-dom'



const PokedexidPage = () => {

  const navir =  useNavigate()

  const { id } = useParams()
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [ pokemon, getpokemon] = useFetch(url)

  useEffect (() => {
    getpokemon()
  }, [id])

  const gotoback = () => {
    navir("/pokedex")
  }

  console.log(pokemon)
  console.log(pokemon?.stats[1].stat.url)

  return (
    <div class="columna">
      <div className="iamgen">
        <img src="/images/enc-pag.png" alt="" class="imagen"/>
      </div>
      <div>
        <button onClick={gotoback}>go to back</button>
      </div>
      <img src="/images/fondo-1.jpg" alt="" />
      <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      <h2>{pokemon?.name}</h2>

      <div class="grid-container">
        <div class="grid-item">
          <h2>Atributos</h2>
          <div>
            <ul class="button-container">
              <button class="random-color-button">{pokemon?.abilities[0]?.ability.name}</button>
              <button class="random-color-button">{pokemon?.abilities[2]?.ability.name}</button>
              <button class="random-color-button">{pokemon?.abilities[3]?.ability.name}</button>
              <button class="random-color-button">{pokemon?.abilities[4]?.ability.name}</button>
            </ul>
          </div>
        </div>
        <div class="grid-item">
          <h2>Color</h2>
          <div>
            <ul>
              <button class="random-color-button">{pokemon?.name}</button>
              <button class="random-color-button">{pokemon?.game_indices[0]?.version.name}</button>
              <button class="random-color-button">{pokemon?.game_indices[1]?.version.name}</button>
              <button class="random-color-button">{pokemon?.game_indices[2]?.version.name}</button>
              <button class="random-color-button">{pokemon?.game_indices[3]?.version.name}</button>
              <button class="random-color-button">{pokemon?.game_indices[4]?.version.name}</button>
              <button class="random-color-button">{pokemon?.game_indices[5]?.version.name}</button>
              <button class="random-color-button">{pokemon?.game_indices[6]?.version.name}</button>
              <button class="random-color-button">{pokemon?.game_indices[7]?.version.name}</button>
            </ul>
          </div>
        </div>
        <div class="grid-item">
          <h2>Stats</h2>
          <div>
            <ul>
              <button class="random-color-button">{pokemon?.stats[0]?.stat.name} : {pokemon?.stats[0]?.base_stat}</button>
              <button class="random-color-button">{pokemon?.stats[1]?.stat.name} : {pokemon?.stats[1]?.base_stat}</button>
              <button class="random-color-button">{pokemon?.stats[2]?.stat.name} : {pokemon?.stats[2]?.base_stat}</button>
              <button class="random-color-button">{pokemon?.stats[3]?.stat.name} : {pokemon?.stats[3]?.base_stat}</button>
              <button class="random-color-button">{pokemon?.stats[4]?.stat.name} : {pokemon?.stats[4]?.base_stat}</button>
              <button class="random-color-button">{pokemon?.stats[5]?.stat.name} : {pokemon?.stats[5]?.base_stat}</button>
            </ul>
          </div>
        </div>
        <div class="grid-item">
          <h2>Moves</h2>
          <div>
            <ul>
              <button class="random-color-button">{pokemon?.moves[0]?.move.name}</button>
              <button class="random-color-button">{pokemon?.moves[1]?.move.name}</button>
              <button class="random-color-button">{pokemon?.moves[2]?.move.name}</button>
              <button class="random-color-button">{pokemon?.moves[3]?.move.name}</button>
              <button class="random-color-button">{pokemon?.moves[4]?.move.name}</button>
              <button class="random-color-button">{pokemon?.moves[5]?.move.name}</button>
              <button class="random-color-button">{pokemon?.moves[6]?.move.name}</button>
              <button class="random-color-button">{pokemon?.moves[7]?.move.name}</button>
              <button class="random-color-button">{pokemon?.moves[8]?.move.name}</button>
              <button class="random-color-button">{pokemon?.moves[9]?.move.name}</button>
              <button class="random-color-button">{pokemon?.moves[10]?.move.name}</button>
              <button class="random-color-button">{pokemon?.moves[11]?.move.name}</button>
              <button class="random-color-button">{pokemon?.moves[12]?.move.name}</button>
              <button class="random-color-button">{pokemon?.moves[13]?.move.name}</button>
              <button class="random-color-button">{pokemon?.moves[14]?.move.name}</button>
              <button class="random-color-button">{pokemon?.moves[15]?.move.name}</button>
              <button class="random-color-button">{pokemon?.moves[16]?.move.name}</button>
              <button class="random-color-button">{pokemon?.moves[17]?.move.name}</button>
              <button class="random-color-button">{pokemon?.moves[18]?.move.name}</button>
              <button class="random-color-button">{pokemon?.moves[19]?.move.name}</button>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <img src="/images/pi-pag.png" alt="" class="imagen"/>
      </div> <br />
    </div>
  )
}

export default PokedexidPage