import NavBar from '@/components/NavBar'

export default function Home() {
  return (
    <>
      <NavBar />
      <main className='px-12 py-24 md:px-24 md:py-40'>
        <section id='home' className='flex flex-col gap-5 h-screen'>
          <h1 className='text-5xl md:text-7xl'>daniel <br/> ocampo</h1>
          <p className='pl-2'>Full Stack Software Developer</p>
        </section>

        <section id='about'>
          <h1>About</h1>

        </section>


      </main>
    </>
  )
}
