function Banner() {
  return (
    <div className="flex justify-between items-center
      bg-yellow-400 border-y border-black py-10 lg:py-0">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl max-w-xl font-serif">
           <span className="underline decoration-black decoration-4">
            Blog</span>{" "}
            Produção de Conteúdos multimedia
            
          </h1>
              

          <h2>
            Caderno digital onde irei colocar todo o conteúdo importante da cadeira "Produção de Conteúdos Multimédia",
            separado por categorias, e também todos os passos de realizaºão dos meus trabalhos.
          </h2>        
        </div>  
        <img
          className="hidden md:inline-flex h-36 lg:h-full"
          src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png" 
          alt="Medium logo" 
        />
    </div>
  )
}

export default Banner