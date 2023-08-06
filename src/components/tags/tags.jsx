import './tags.scss'

function Tags ({tags}) {

    return (
        <div className='Introduction__tagsContainer'>
             {tags.map(tag => 
                <p 
                className='Introduction__tags'
                key={tags.indexOf(tag)}
                >
                    {tag}
                </p>)}
        </div>

    )
}

export default Tags