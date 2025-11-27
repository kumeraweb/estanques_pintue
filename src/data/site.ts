export const SITE = {
  name: 'Estanques Pintué',
  'Estanques Pintué – Estanques Decorativos, Barricas, Koi y Jardines Acuáticos',
  description:
   'Estanques decorativos, barricas maceteros, jardines acuáticos y estanques con plantas y peces koi. Diseñamos y fabricamos elementos únicos para tu jardín o terraza en Pintué. Atención personalizada y productos hechos a mano.'
,
  domain: 'https://www.estanquespintue.cl',
  image: '/imgs/og-image-v2.png',
  locale: 'es_CL'
}

export const LINKS = {
  wa: (msg?: string) => {
    const finalMsg = encodeURIComponent(msg ?? 'Hola! Me gustaría cotizar un estanque decorativo, barrica o jardín acuático.')
    return `https://wa.me/56954161984?text=${finalMsg}`
  },
  ig: () => 'https://www.instagram.com/estanquespintue/'
}
