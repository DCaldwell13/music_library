import GalleryItems from './GalleryItems'
import { useContext } from 'react'
import { DataContext } from '../Context/DataContext'

function Gallery(){
    const data = useContext(DataContext)

    const display = data.map((song, i) => {
        return (
            <GalleryItems items={song} key={i} />
        )
    })
    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery
