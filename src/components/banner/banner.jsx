import './banner.scss'

function Banner({image, alt, text}) {

    return(
        <figure className='banner__container'>
            <img
                src={image} 
                alt={alt}
            />
            <p>{text}</p>
        </figure>
    )
}

export default Banner