import Head from "next/head";
/* import { useRouter } from "next/router"; */

const Social = ({ title, keywords, data }) => {

/*   const router = useRouter();
  const urlPath=router.asPath */

  
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={'precio, luz, electricidad, españa, factura, ahorro, precios electricidad españa, hora a hora, luz españa, ahorro energético'} />
      <meta
        name="description"
        content={'Precios de la electricidad por hora en España - LuzAhora'}
      />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{'Precios de la electricidad por hora en España - LuzAhora'}</title>

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={'Precios de la electricidad por hora en España - LuzAhora'} />
      <meta
        name="twitter:description"
        content={'Precios de la electricidad por hora en España - LuzAhora'}
      />
      <meta name="twitter:site" content={`https://www.luzahora.com`} />
      <meta
        name="twitter:image"
        content={'/happy_little_girl_and_huge_lightbulb.jpg'}
      />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={'Precios de la electricidad por hora en España - LuzAhora'} />
      <meta
        property="og:description"
        content={'Precios de la electricidad por hora en España - LuzAhora'}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={'/happy_little_girl_and_huge_lightbulb.jpg'}
      />
      <meta property="og:image:alt" content="description"></meta>
      <meta property="og:image:type" content="image/jpeg"></meta>
      <meta
        property="og:image:secure_url"
        content={'/happy_little_girl_and_huge_lightbulb.jpg'}
      />
      <meta property="og:image:alt" content={'Precios de la electricidad por hora en España - LuzAhora'} />
      <meta property="og:url" content={`https://www.luzahora.com`} />
      <meta property="og:site_name" content="https://www.luzahora.com" />
    </Head>
  );
};

Social.defaultProps = {
  keywords:
    "precio, luz, electricidad, españa, factura, ahorro, precios electricidad españa, hora a hora, luz españa, ahorro energético",
};

export default Social;
