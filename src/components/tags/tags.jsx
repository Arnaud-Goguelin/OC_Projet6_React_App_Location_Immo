import './tags.scss'

function Tags ({tags}) {

    return (
        <div className='Introduction__tagsContainer'>
             {tags.map(tag => 
                <strong 
                className='Introduction__tags'
                key={tags.indexOf(tag)}
                >
                    {tag}
                </strong>)}
        </div>

    )
}

export default Tags