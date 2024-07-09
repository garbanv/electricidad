import React from 'react'
import Link from 'next/link'

export default function Footer() {

  const date = new Date()
  const year = date.getFullYear()
  console.log("year",year)
  return (
   

<footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800 max-w-screen-md mx-auto">
    <div class=" mx-auto max-w-screen-md p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">{year} <a href="https://flowbite.com/" class="hover:underline">LuzAhora</a>. Open Source.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link href="/" class="hover:underline me-4 md:me-6">Inicio</Link>
        </li>
        <li>
            <Link href="/nosotros" class="hover:underline me-4 md:me-6">Sobre esta web</Link>
        </li>
       {/*  <li>
            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
        </li> */}
        <li>
            {/* <a href="#" class="hover:underline">Contact</a> */}
        </li>
    </ul>
    </div>
</footer>

  )
}
