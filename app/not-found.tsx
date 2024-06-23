import { Button } from '@/components/ui/button'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
  <div className="text-center">
  <svg fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  
	 viewBox="0 0 512 512" >
<g>
	<g>
		<path d="M398.957,26.239L0,425.197l60.563,60.564h104.959L512,139.281L398.957,26.239z M151.702,452.394H74.384l-27.197-27.197
			L398.957,73.427l65.855,65.855L151.702,452.394z"/>
	</g>
</g>
</svg>

    <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</h1>

    <p className="mt-4 text-gray-500 mb-4">We can't find that page.</p>
    <a href='/'>
    <Button>Go Home</Button>
    </a>
  </div>
</div>
  )
}