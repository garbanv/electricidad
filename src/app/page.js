import Image from "next/image";
import Hero from "../components/Hero";
export default async function Home() {
  const getData = async () => {
    try {
      const data = fetch("https://api.esios.ree.es/archives/70/download_json", { next: { revalidate: 1600 } });
      const response = await (await data).json();
      return response;
      /*    console.log("response", response.PVPC); */
    } catch (error) {
      console.log(error);
    }
  };

  const energyData = await getData();


  const time = new Date().getHours();

  console.log("time",time)

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
                      parseInt(energy["PCB"]) / 1000 > 0.13 &&
                      parseInt(energy["PCB"]) / 1000 < 0.18 &&
                      "bg-orange-500"
                    }
                    ${parseInt(energy["PCB"]) / 1000 >= 0.18 && "bg-red-600"}
           ${parseInt(energy["PCB"]) / 1000 < 0.12 && "bg-green-500"}
           group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                {/*   {Number(energy["Hora"].slice(0, 2)) === time ? (
                      <span class="relative flex h-3 w-3 mb-1">
                        <span class="animate-ping absolute  h-full w-full rounded-full bg-blue-800 opacity-75"></span>
                        <span class="  rounded-full h-3 w-3 bg-blue-500"></span>
                      </span>
                    ) : (
                      ""
                    )} */}
                  {/* <p className="text-xs">{energy['Dia']}</p> */}
                  <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    {energy["Hora"]}
                    {" hr "}
                    
                  </p>
                  <p className={`mb-3 text-xl font-semibold`}>
                    {(parseInt(energy["PCB"]) / 1000).toFixed(3)} {"€/kWh"}
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
            Bienvenido a nuestro sitio web, donde te proporcionamos información detallada y en tiempo real sobre los precios de la energía eléctrica por hora en España. Esta herramienta ha sido creada pensando en ti y en cómo puedes optimizar tu consumo energético para reducir costos en tu factura de electricidad. Imagina poder programar tus electrodomésticos más grandes, como la lavadora o el lavavajillas, en las horas en que la energía es más barata. No solo ahorrarás dinero, sino que también podrás gestionar mejor tu presupuesto mensual.
            </p>
            <br />
            <p>
            Además de los beneficios económicos, nuestro sitio web también te ayuda a ser más consciente del impacto ambiental de tu consumo energético. La energía renovable, como la solar y la eólica, tiende a ser más abundante y menos costosa en ciertos momentos del día. Al ajustar tu consumo a estas horas, no solo estás aprovechando tarifas más bajas, sino que también estás contribuyendo a un uso más sostenible de los recursos energéticos. De esta manera, ayudas a reducir la dependencia de fuentes de energía contaminantes y a disminuir tu huella de carbono, haciendo una elección responsable por el medio ambiente.
            </p>
            <br />
            <p>
            Por último, nuestra plataforma promueve la transparencia y el empoderamiento del consumidor. Te proporcionamos las herramientas para tomar decisiones informadas sobre tu consumo de electricidad y negociar mejores contratos con las compañías eléctricas. Al estar al tanto de los precios por hora, puedes identificar patrones y tendencias que te permitirán optimizar aún más tu consumo energético. Nuestro objetivo es darte el control total sobre tu consumo de energía, ayudándote a ahorrar dinero y a contribuir a un futuro más sostenible.
            </p>
            <br />
        </div>
      </section>
    </main>
  );
}
