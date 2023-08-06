import './tags.scss'

function Tags ({tags}) {

    return (
        <div className='Introduction__tagsContainer'>
             {tags.map(tag => 
                <h2 
                className='Introduction__tags'
                key={tags.indexOf(tag)}
                >
                    {tag}
                </h2>)}
        </div>

    )
}

export default Tags