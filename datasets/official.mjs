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
    catastro, 'Barrio', 'SCACODIGO: 008537 · SCATIPO: 0.', 'Consulta: noviembre de 2026'),
  record('usaquen-01', 'localidad', 'Usaquén · localidad 01',
    'Localidad de Bogotá D.C. en la que se sitúa el sector Verbenal San Antonio.',
    'https://gobiernobogota.gov.co/atencion-y-servicios-a-la-ciudadania/canales-atencion',
    'Localidad', 'Código de localidad: 01.', 'Consulta: noviembre de 2026'),
  record('hurto-usaquen-2025-q1', 'hurtos', 'Hurto a personas en Usaquén',
    'Casos registrados según el boletín de marzo de la Secretaría Distrital de Seguridad, Convivencia y Justicia.',
    'https://scj.gov.co/sites/default/files/2025-08/boletines_bog_2025_03.pdf',
    'Localidad', '2025: 1.926 casos. Mismo periodo de 2024: 1.993. Variación publicada: −3,4 %.',
    'Enero a marzo de 2025'),
  record('monitoreo-comunitario', 'camaras', 'Frente de Seguridad de Verbenal',
    'El Distrito reportó dotación tecnológica para el monitoreo comunitario del Frente de Seguridad de Verbenal.',
    'https://bogota.gov.co/yo-participo/juntos-cuidamos-bogota/el-frente-de-seguridad-nos-une-y-organiza-como-barrio-lider-verbenal',
    'Entorno', 'La dotación publicada incluía 4 cámaras por kit. Operación actual sin confirmar.', 'Publicación de 2023'),
  record('cai-verbenal', 'policia', 'CAI Verbenal',
    'Comando de Atención Inmediata adscrito a la Estación de Policía de Usaquén.',
    'https://www.policia.gov.co/directorio/cai-verbenal',
    'Entorno', 'Calle 187 # 19-00 · (601) 2696363.', 'Directorio consultado en noviembre de 2026', {type:'Point',coordinates:[-74.0404159,4.7644237]}),
  record('aquileo-parra', 'educacion', 'Colegio Aquileo Parra (IED)',
    'Sede urbana oficial de la Secretaría de Educación del Distrito.',
    'https://www.redacademica.edu.co/sites/default/files/2022-03/Directorio%20Colegios_0.pdf',
    'Entorno', 'Carrera 18A # 187-65/67 · DANE 111001000132.', 'Directorio de junio de 2020'),
  record('calle-187-tm', 'transporte', 'Estación Calle 187',
    'Estación de TransMilenio del corredor Autonorte, con conexiones a servicios zonales.',
    'https://www.transmilenio.gov.co/comunicaciones/noticias-de-transmilenio/boletines-informativos/servicios-que-te-movilizan-por-la-estacion-calle-187',
    'Entorno', 'Autopista Norte a la altura de la Calle 187.', 'Fuente institucional', {type:'Point',coordinates:[-74.04453,4.76290]}),
  record('libreria-nacional-santafe', 'librerias', 'Librería Nacional · Santafé',
    'Librería comercial en el Centro Comercial Santafé, en el entorno del sector de estudio.',
    'https://bonocultura.co/librerias-aliadas/',
    'Entorno', 'Calle 183 # 45-03 · locales 128-129 según el directorio.', 'Directorio Bono de Lectura 2026')
];
