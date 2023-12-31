import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useCategories } from '../hooks/useCategories'
import { CategoriesSideBar } from '../components/CategoriesSideBar'
import CategoryPage from './CategoryPage'
import AgendaComponent from '../components/AgendaComponent'

export default function HomePage () {
  const { user, isAuthenticated } = useAuth0()
  const { categories } = useCategories()
  const [currentCategory, setCurrentCategory] = useState(null)
  const welcomeText = isAuthenticated ? `¡Bienvenido ${user?.name}! 👋` : '¡Bienvenido a Vetly! 👋'

  const selectCategory = (newCategory) => {
    setCurrentCategory(prevCategory => {
      if (prevCategory === newCategory) {
        setCurrentCategory(null)
        return
      }

      setCurrentCategory(newCategory)
    })
  }

  return (
    <section className='flex flex-col gap-5 h-full md:flex-row w-full'>
      <CategoriesSideBar categories={categories} selectCategory={selectCategory} />
    <div className='centrado'>
      {currentCategory && <CategoryPage category={currentCategory} />}

      {!currentCategory && (
        <h2 className='w-full text-center text-xl font-bold py-10 md:text-3xl'>
          {welcomeText}
        </h2>
      )}
    </div>
      
    </section>
  )
}
