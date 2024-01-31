import {FirstAidKit, ShoppingCart} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'


function Navbar() {
 
  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">  
            <div className='flex gap-1 ml-3 text-2xl font-bold uppercase'>
                <FirstAidKit size={32} />
                <Link to='/home' className='hover:underline'>GenFarma</Link>
                </div>

            <div className='flex gap-4'>
              <div className='hover:underline'>Produtos</div>
              <Link to='/categorias' className='hover:underline'>Categoria</Link>
              <Link to='/cadastroCategorias' className='hover:underline'>Cadastrar Categoria</Link>
              <div className='hover:underline'><ShoppingCart size={32} /></div>
              
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar