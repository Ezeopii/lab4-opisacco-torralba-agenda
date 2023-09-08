import AgendaComponent from "../components/AgendaComponent";
export default function CategoryPage ({ category }) {
  return (
    <section className='d-flex justify-content-center centrado' >
      <h2 className='text-center text-3xl font-bold py-5'>
        <span className='mr-3'>{category.icon}Agenda</span>
      </h2>
      {category.name === "Agenda"  }
      <AgendaComponent/>
    </section>
    
  )
}
