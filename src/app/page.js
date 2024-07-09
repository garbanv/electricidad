import Image from "next/image";
import Hero from "../components/Hero";
export default async function Home() {
  const getData = async () => {
    try {
      const data = fetch("https://api.esios.ree.es/archives/70/download_json");
      const response = await (await data).json();
      return response;
      /*    console.log("response", response.PVPC); */
    } catch (error) {
      console.log(error);
    }
  };

  const energyData = await getData();


  const time = new Date().getHours();

  const getPromedio = energyData.PVPC.filter((hora) => hora.Hora === "10-11");
  const promedio = parseInt(getPromedio[0].PCB) / 1000;

  const getPrecioBajo = energyData.PVPC.filter((hora) => hora.Hora === "14-15");
  const precioBajo = parseInt(getPrecioBajo[0].PCB) / 1000;

  const getPrecioAlto = energyData.PVPC.filter((hora) => hora.Hora === "21-22");
  const precioAlto = parseInt(getPrecioAlto[0].PCB) / 1000;

  return (
    <main className="max-w-screen-md mx-auto ">
      <Hero />
      <div className="grid justify-center my-10">
        <h1 className="text-2xl font-bold md:px-0 px-5">
          Precio de la luz por horas hoy (España){" "}
          {new Date().toLocaleDateString("es-ES", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
            timezone: "America/New_York",
          })}
        </h1>
      </div>

      <section>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3 md:px-0 px-5">
          <div className=" rounded-md shadow bg-orange-400 p-10">
            <h3 className="text-center mb-3">Precio promedio</h3>
            <p className="font-bold text-2xl text-center">
              {precioBajo} €/KWh{" "}
            </p>
          </div>

          <div className=" rounded-md shadow bg-green-600 p-10">
            <h3 className="text-center mb-3">Precio más bajo del día</h3>
            <p className="font-bold text-2xl text-center">{promedio} €/KWh</p>
          </div>

          <div className=" rounded-md shadow bg-red-600 p-10">
            <h3 className="text-center mb-3">Precio más alto del día</h3>
            <p className="font-bold text-2xl text-center">{precioAlto} €/KWh</p>
          </div>
        </div>
      </section>
      <div className="mb-5 grid justify-center my-10 text-center lg:mb-0 lg:grid-cols-4 grid-cols-2 md:px-0 px-5 lg:text-left gap-5 md:pb-10 pb-0">
        {energyData
          ? energyData?.PVPC.map((energy, index) => {
              return (
                <div
                  key={index}
                  className={`
                    ${
                      parseInt(energy["PCB"]) / 1000 > 0.12 &&
                      parseInt(energy["PCB"]) / 1000 < 0.18 &&
                      "bg-orange-500"
                    }
                    ${parseInt(energy["PCB"]) / 1000 >= 0.18 && "bg-red-600"}
           ${parseInt(energy["PCB"]) / 1000 < 0.12 && "bg-green-500"}
           group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <p className="text-xs">{energy['Dia']}</p> */}
                  <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    {energy["Hora"]}
                    {" hr "}
                    {Number(energy["Hora"].slice(0, 2)) === time ? (
                      <span class="relative flex h-3 w-3 py-2 ">
                        <span class="animate-ping absolute  h-full w-full rounded-full bg-blue-800 opacity-75"></span>
                        <span class="  rounded-full h-3 w-3 bg-blue-500"></span>
                      </span>
                    ) : (
                      ""
                    )}
                  </p>
                  <p className={`mb-3 text-xl font-semibold`}>
                    {(parseInt(energy["PCB"]) / 1000).toFixed(2)} {"€/kWh"}
                  </p>
                 
                </div>
              );
            })
          : ""}    
      </div>
      <p className="text-xs text-gray-600 text-center">Fuente: <a href="https://www.ree.es/es" className="underline">Red Eléctrica de España.</a></p>


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
    </main>
  );
}
