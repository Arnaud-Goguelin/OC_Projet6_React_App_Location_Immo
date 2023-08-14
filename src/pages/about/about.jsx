import './about.scss';
import aboutData from '../../data/about.json';
import Dropdown from '../../components/dropdown/dropdown';
import Banner from '../../components/banner/banner';
import Mountain from '../../assets/images/mountain.avif';


function About() {
    return(
        <>
            <Banner 
                image={Mountain}
                alt={'Image d\'une chaîne de montagne'}
                text={''}
            />

        <section className='About__container'>
            {aboutData.map((data) => 
                <Dropdown 
                    key={`${aboutData.indexOf(data)} - ${data.title}`}
                    dropdownTitle={data.title}
                    dropdownContent={data.content}
                />
            )}
        </section>
        </>
    )
}

export default About