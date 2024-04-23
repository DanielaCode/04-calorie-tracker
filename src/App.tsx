import Form from "./components/Form"


function App() {

  return (
    <>
      <header className="p-4 bg-lime-600 ">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-lg text-white font-bold uppercase">Contador de calorias</h1>
        </div>
      </header>
      <section className="bg-lime-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form/>
        </div>
      </section>
    </>
  )
}

export default App

//SECTION -para instalar Tailwind: npm i -D tailwindcss postcss autoprefixer
//SECTION - luego para generar archivo de tailwind.config.js: npx tailwind init -p
