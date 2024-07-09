import React from 'react'
import Hero from '@/components/Hero'

export default function page() {
  return (
    <div className="max-w-screen-md mx-auto ">
        <Hero />

        <section className="bg-blue-50 p-5 rounded-lg my-10">
        <div className="max-w-screen-md mx-auto ">
            <h3 className="font-bold text-2xl mb-10">¿Por qué hemos creado esta web?</h3>
            <p>
            Desarrollar una web que muestre los precios de la energía eléctrica por hora en España se fundamenta en varios aspectos importantes tanto para los consumidores como para el medio ambiente. En primer lugar, proporciona una herramienta crucial para la reducción de costos en la factura eléctrica. Los consumidores, al tener acceso a información detallada y en tiempo real sobre las fluctuaciones del precio de la energía, pueden ajustar sus hábitos de consumo para aprovechar las horas en las que la electricidad es más económica. Por ejemplo, actividades que consumen mucha energía, como lavar la ropa o cargar vehículos eléctricos, pueden programarse durante las horas de menor costo, resultando en ahorros significativos a largo plazo.
            </p>
            <br />
            <p>
            En segundo lugar, esta iniciativa tiene un impacto positivo en el medio ambiente. Al informar a los usuarios sobre los precios horarios de la electricidad, también se puede educar sobre cómo estos precios están relacionados con la demanda y la oferta de energía en tiempo real, así como con la producción de energía renovable. Durante las horas en que la energía renovable, como la solar o la eólica, es más abundante y por lo tanto más barata, los usuarios pueden ser incentivados a consumir más energía. Esto no solo reduce la dependencia de fuentes de energía no renovables y contaminantes, sino que también ayuda a equilibrar la red eléctrica, promoviendo un uso más eficiente y sostenible de los recursos energéticos.
            </p>
            <br />
            <p>
            Finalmente, una web de estas características fomenta la transparencia y el empoderamiento del consumidor. Al tener acceso a información precisa y actualizada, los usuarios pueden tomar decisiones más informadas sobre su consumo energético y negociar mejor sus contratos con las compañías eléctricas. Esta transparencia puede generar una mayor competencia entre proveedores de energía, lo que podría llevar a precios más competitivos y una mejor calidad de servicio. En resumen, esta herramienta no solo tiene el potencial de reducir costos y beneficiar al medio ambiente, sino que también fortalece la posición del consumidor en el mercado energético.
            </p>
            <br />
        </div>
      </section>
    </div>
  )
}
