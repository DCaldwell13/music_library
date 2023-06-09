import { useState } from 'react'
import { Link } from 'react-router-dom'

function GalleryItems(props) {
    let [showDetails, setShowDetails] = useState(false)

    const simpleStyle = {
        'width': '25vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px'
    }
    
    const detailStyle = {
        'width': '80vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px',
        'backgroundImage': `url(${props.song.artworkUrl100})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'color': 'yellow'
    }
    
    const simpleView = () => {
        return (
            <div style={simpleStyle}>
                <h3>{props.song.trackName}</h3>
                <h4>{props.song.collectionName}</h4>
            </div>
        )
    }

    const detailView = () => {
        return (
            <div style={detailStyle}>
                <h2>{props.item.trackName}</h2>
                <h3>
                    <Link to={`/artist/${props.item.artistId}`}>
                        {props.item.artistName}
                    </Link>
                </h3>
                <h3>
                    <Link to={`/album/${props.item.collectionId}`}>
                        {props.item.collectionName}
                    </Link>
                </h3>
                <h4>{props.item.primaryGenreName}</h4>
                <h4>{props.item.releaseDate}</h4>
            </div>
        )
    }
    
    return (
        <div onClick={() => setShowDetails(!showDetails)}
        style={{'display': 'inline-block'}}>
            {showDetails ? detailView() : simpleView()}

        </div>
    )

}
export default GalleryItems


/*function GalleryItems(props){
    let [showDetails, setShowDetails] = useState(false)

    return (
        <div onClick={() => setShowDetails(!showDetails)} style={{'display': 'inline-block'}}>
            <p>One Gallery GalleryItems</p>
        </div>
    )
}

export default GalleryItems*/
