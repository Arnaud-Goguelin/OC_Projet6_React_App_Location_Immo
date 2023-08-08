import './banner.scss'

function Banner({image, alt, text}) {

    return(
        <figure className='banner__container'>
            <img
                src={image} 
                alt={alt}
            />
            <figcaption>{text}</figcaption>
        </figure>
    )
}

export default Banner 

//