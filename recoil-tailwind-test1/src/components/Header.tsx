const links = [
  {name: 'example1', href: '#' },
  { name: 'example2', href: '#' },
  { name: 'example3', href: '#' },
  { name: 'example4', href: '#' }
]

const summary = [
    {name:'workers', value: '20'},
    {name:'supporter', vaue: '100+'},
    {name:'open time', value: '9AM-6PM'},
    {name:'money we earned', value: '100$'}
]

export default function Header() {
    return(
        <div className="relative isolate overflow-hidden bg-gray-400 py-24 sm:py-32">
            <img 
            alt=""
            src="C:\Users\김민형\Desktop\new-project\recoil-tailwind-test1\src\components\banner-1076289_1280.jpg"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
        </div>
    )
}


