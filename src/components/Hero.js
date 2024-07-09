import React from 'react'

export default function Hero() {
  return (
    <section>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 items-center">
            <div>
                <h1 className="font-bold text-5xl md:px-0 px-5">La nueva tendencia para ahorrar en la factura </h1>
            </div>
            <div>
                <img src="/happy_little_girl_and_huge_lightbulb.jpg" alt="" />
            </div>

        </div>
    </section>
  )
}
