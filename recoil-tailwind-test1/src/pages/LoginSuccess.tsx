import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Main() {
  let [isOpen, setIsOpen] = useState(true) 

  return (
    <>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-m space-y-10 border bg-green-50 p-12">
            <div className='text-5xl text-black text-center'>
              <DialogTitle className="font-bold">Nuri Homepage</DialogTitle>
            </div>
            <div className='text-3xl text-blue-300'>
              <Description>This will permanently deactivate your account</Description>
            </div>
            <div className='text-2xl text-blue-400'>
              <p>Are you sure you want to deactivate your account? All of your data will be permanently removed.</p>
            </div>
            <div className='text-2xl text-blue-400'>
              <Link to="http://www.nuritelecom.com/kr/main/main.html"><p>Nuriflex link</p></Link>
            </div>
            <div className="flex gap-4 justify-center text-red-300">
              <a href='/'><button onClick={() => setIsOpen(false)}>log out</button></a>
              <a href='/home'><button onClick={() => setIsOpen(false)}>Move to Homepage</button></a>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}

export default Main;
