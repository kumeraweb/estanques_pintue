export const SITE = {
  name: 'Estanques Pintué',
  title: 'Estanques Pintué – Fabricación y Venta de Estanques de Agua en Pintué',
  description:
    'Fabricamos estanques de agua de alta resistencia en Pintué. Calidad garantizada, entrega rápida y atención personalizada.',
  domain: 'https://www.estanquespintue.cl',
  image: '/imgs/og-estanquespintue.png',
  locale: 'es_CL'
}

export const LINKS = {
  wa: () => {
    const msg = encodeURIComponent('Hola! Me gustaría cotizar un estanque de agua.')
    return `https://wa.me/56977995073?text=${msg}`
  },
  ig: () => 'https://www.instagram.com/estanquespintue/'
}
