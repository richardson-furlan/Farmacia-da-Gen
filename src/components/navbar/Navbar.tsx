import {FirstAidKit, ShoppingCart} from '@phosphor-icons/react'


function Navbar() {
 
  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">  
            <div className='flex gap-1 ml-3 text-2xl font-bold uppercase'>
                <FirstAidKit size={32} />
                GenFarma
                </div>

            <div className='flex gap-4'>
              <div className='hover:underline'>Produtos</div>
              <div className='hover:underline'>Categoria</div>
              <div className='hover:underline'>Cadastrar Categoria</div>
              <div className='hover:underline'><ShoppingCart size={32} /></div>
              
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar