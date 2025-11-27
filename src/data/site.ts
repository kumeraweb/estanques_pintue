export const SITE = {
  name: 'Estanques Pintué',
  title: 'Estanques Pintué – Fabricación y Venta de Estanques de Agua en Pintué',
  description:
    'Fabricamos estanques de agua de alta resistencia en Pintué. Calidad garantizada, entrega rápida y atención personalizada.',
  domain: 'https://www.estanquespintue.cl',
  image: '/imgs/og-image-v2.png',
  locale: 'es_CL'
}

export const LINKS = {
  wa: (msg?: string) => {
    const finalMsg = encodeURIComponent(msg ?? 'Hola! Me gustaría cotizar un estanque de agua.')
    return `https://wa.me/56954161984?text=${finalMsg}`
  },
  ig: () => 'https://www.instagram.com/estanquespintue/'
}
