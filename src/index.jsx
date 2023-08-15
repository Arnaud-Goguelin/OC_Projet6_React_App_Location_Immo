import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DataProvider from './utils/context'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import LandingPage from './pages/landingPage/landingPage'
import Housing from './pages/housing/housing'
import About from './pages/about/about'
import Error from './pages/error/error'
import './index.scss'

const root = createRoot(document.getElementById('root'));

root.render (
    <React.StrictMode>
      <Router>
        <DataProvider>
          <Header />
          <main className='globalStyle'>
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/housing/:id' element={<Housing />} />
              <Route path='/about' element={<About />} />
              <Route path='/error' element={<Error />} />
              <Route path='*' element={<Error />} />
            </Routes>
          </main>
          <Footer />
        </DataProvider>
      </Router>
    </React.StrictMode>
  )


// TO DO:
// Pourquoi import aboutData from '../../data/about.json'; fonctionne et pas import aboutData from './about.json';
// Mon module _modules-variables.scss est'il correctement créé?
// Je devrais importer tous les modules dans index.jsx pour qu'ils soient compiler en scss???

// Utilisation des données dans:
//  landingHousingGallery
//  housing
//
// Pourquoi créer un composant DataProvider pour utiliser ces données dans 2 composants seulement?
// Peut-on simplement les passer en props pour simplifier les choses?
//
// Dans la logique de coller le plus possible au réel, useFetch a été utilisé pour simuler un appel à l'API. 
// En effet, nous avons ici une base de données de 20 objets, mais Kasa ne se contentera pas de 20 locations (comment Booking.com ou AirB&B). 
// D'ailleurs c'est indiqué dans l'énnoncé que l'API n'est pas encore prête, ce qui sous entend qu'il y en aura une, donc mettre en place une logique d'appel à l'API n'est pas incohérent.
//
// Or, on ne peut utiliser un hook que dans une fonction de création de composant react.
// Ainsi on supprimerait le composant DataProvider pour finalement en créer un autre comme suit dans la page index.jsx. 
// Puis il faudrait passer les résultats de useFetch en props sur 2 niveaux de composants, au moins, pour leur lecture dans landingHousingGallery 
// (de index.jsx vers landingPage.jsx puis vers landingHousingGallery.jsx pour le chemin le plus long)
// Finalement cela limiterait l'utilisation des données à deux composants, complexifiant d'éventuels évolutions de l'application, pour un nouveau code à peine plus simple.
// Cela nous force à utiliser l'API Children de React, sans profiter de toutes ses fonctionnalités, mais cela semble plus adéquate au développement futur de Kasa, car comme sous entendu dans l'ennoncé, nous en sommes au début.

// function CreateReactAPP() {

//   const { data, isLoading, error } = useFetch('http://localhost:3000/housing.json');

//   return(
//     <React.StrictMode>
//       <Router>
//         {/* <DataProvider> */}
//           <Header />
//           <main className='globalStyle'>
//             <Routes>
//               <Route path='/' element={<LandingPage data={data} isLoading={isLoading} error={error} />} />
//               <Route path='/housing/:id' element={<Housing data={data} isLoading={isLoading} error={error} />} />
//               <Route path='/about' element={<About />} />
//               <Route path='/error' element={<Error />} />
//               <Route path='*' element={<Error />} />
//             </Routes>
//           </main>
//           <Footer />
//         {/* </DataProvider> */}
//       </Router>
//     </React.StrictMode>
//   )
// }

// root.render(<CreateReactAPP />)