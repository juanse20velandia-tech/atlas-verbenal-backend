import { boundary } from './boundary.mjs';

const catastro = 'https://serviciosgis.catastrobogota.gov.co/arcgis/rest/services/Mapa_Referencia/Mapa_Referencia/MapServer/37';

function record(id, category, title, detail, source, scope, facts, period, geometry = null) {
  return [id, category, { title, detail, source, scope, facts, period, geometry }];
}

export const official = [
  record('sector-008537', 'barrio', 'Verbenal San Antonio',
    'Delimitación del sector catastral empleado para ubicar las fichas del atlas.',
    catastro, 'Barrio', 'Código 008537. Coordenadas WGS 84.', 'Consulta: noviembre de 2026', boundary),
  record('catastro-008537', 'catastro', 'Sector catastral 008537',
    'El servicio Mapa de Referencia identifica la unidad territorial como Verbenal San Antonio.',
    catastro, 'Barrio', 'SCACODIGO: 008537 · SCATIPO: 0.', 'Consulta: noviembre de 2026')
];
