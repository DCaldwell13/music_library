import './App.css';
import { Fragment, useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './Components/SearchBar'
import { DataContext } from './Context/DataContext'
import { SearchContext } from './Context/SearchContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AlbumView from './components/album-view'
import ArtistView from './components/artist-view'

function App(){
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])
    let searchInput = useRef('')

    const API_URL = 'https://itunes.apple.com/search?term=U2'

    useEffect(() => {
      if (search) {
        const handleSearch = (e, term) => {
          e.preventDefault()
          const fetchData = async () => {
              document.title = `${term} Music`
              const response = await fetch(API_URL + term)
              const resData = await response.json()
              if (resData.results.length > 0) {
                  return setData(resData.results)
              } else {
                  return setMessage('Not Found.')
              }
          }
          fetchData()
      }
      
      }
  }, [search])
  
   /* useEffect (() => {
      if (search) {
      document.title = `${search} Music`
      fetch(API_URL + search)
      .then(res => res.json())
      .then(resData => {
      if (resData.results.length > 0) {
        setData(resData.results)
      } else {
        setMessage("No results found!")
      }
    })
    }
    }, [search])*/

    const handleSearch = (e, term) => {
      e.preventDefault()
      setSearch(term)
    }

    return (
        <div>
        <SearchContext.Provider value={{
          term: searchInput,
          handleSearch: handleSearch
        }}>
        <SearchBar />
        </SearchContext.Provider>
            {message}
           ? <Router>
              <Routes>
                <Route path="/" element= {
                  <Fragment>
                    <SearchBar handleSearch = {handleSearch}/>
                    <Gallery data = {data} />
                  </Fragment>
                } />
                <Route path="/album/:id" element = {<AlbumView />} />
                <Route path="/artist/:id" element = {<ArtistView />} />
                  <DataContext>
                  <Gallery data={data} />
                  <AlbumView />
                  <ArtistView />
                  </DataContext> 
              </Routes>
            </Router> ?
        </div>
    )
}

export default App

