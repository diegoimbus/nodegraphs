'use strict'

const setupDatabase = require('./lib/db')
const setupAccionesModel = require('./models/acciones')
const setupActividadInsumoModel = require('./models/actividad_insumo')
const setupActividadesModel = require('./models/actividades')
const setupAlturaModel = require('./models/altura')
const setupCaficultoresModel = require('./models/caficultores')
const setupCambiosModel = require('./models/cambios')
const setupColoresModel = require('./models/colores')
const setupControlesModel = require('./models/controles')
const setupDepartamentosModel = require('./models/departamentos')
const setupDispositivosModel = require('./models/dispositivos')
const setupEtapasModel = require('./models/etapas')
const setupFincaCaficultorModel = require('./models/finca_caficultor')
const setupFincasModel = require('./models/fincas')
const setupFloracionesModel = require('./models/floraciones')
const setupFormulasModel = require('./models/formulas')
const setupInsumosModel = require('./models/insumos')
const setupLotesModel = require('./models/lotes')
const setupModulosModel = require('./models/modulos')
const setupMunicipiosModel = require('./models/municipios')
const setupPaisesModel = require('./models/paises')
const setupProgramacionesModel = require('./models/programaciones')
const setupProveedoresModel = require('./models/proveedores')
const setupRecordatoriosModel = require('./models/recordatorios')
const setupSedesModel = require('./models/sedes')
const setupSensoresClimaModel = require('./models/sensores_clima')
const setupTipoInsumoModel = require('./models/tipo_insumo')
const setupTipoProgramacionModel = require('./models/tipo_programacion')
const setupUsuariosModel = require('./models/usuarios')
const setupVariedadesModel = require('./models/variedades')
const setupVariedadColorModel = require('./models/variedad_color')
const setupVersionesModel = require('./models/versiones')
const defaults = require('defaults')

module.exports = async function (config) {
  config = defaults(config, {
    dialect: 'sqlite',
    pool: {
      max: 10,
      min: 0,
      idle: 10000
    },
    query: {
      raw: true
    }
  })

  const sequelize = setupDatabase(config)
  const AccionesModel = setupAccionesModel(config)
  const ActividadInsumoModel = setupActividadInsumoModel(config)
  const ActividadesModel = setupActividadesModel(config)
  const AlturaModel = setupAlturaModel(config)
  const CaficultoresModel = setupCaficultoresModel(config)
  const CambiosModel = setupCambiosModel(config)
  const ColoresModel = setupColoresModel(config)
  const ControlesModel = setupControlesModel(config)
  const DepartamentosModel = setupDepartamentosModel(config)
  const DispositivosModel = setupDispositivosModel(config)
  const EtapasModel = setupEtapasModel(config)
  const FincaCaficultorModel = setupFincaCaficultorModel(config)
  const FincasModel = setupFincasModel(config)
  const FloracionesModel = setupFloracionesModel(config)
  const FormulasModel = setupFormulasModel(config)
  const InsumosModel = setupInsumosModel(config)
  const LotesModel = setupLotesModel(config)
  const ModulosModel = setupModulosModel(config)
  const MunicipiosModel = setupMunicipiosModel(config)
  const PaisesModel = setupPaisesModel(config)
  const ProgramacionesModel = setupProgramacionesModel(config)
  const ProveedoresModel = setupProveedoresModel(config)
  const RecordatoriosModel = setupRecordatoriosModel(config)
  const SedesModel = setupSedesModel(config)
  const SensoresClimaModel = setupSensoresClimaModel(config)
  const TipoInsumoModel = setupTipoInsumoModel(config)
  const TipoProgramacionModel = setupTipoProgramacionModel(config)
  const UsuariosModel = setupUsuariosModel(config)
  const VariedadesModel = setupVariedadesModel(config)
  const VariedadColorModel = setupVariedadColorModel(config)
  const VersionesModel = setupVersionesModel(config)

  AccionesModel.hasMany(CambiosModel)
  CambiosModel.belongsTo(AccionesModel)

  ActividadesModel.hasMany(ActividadInsumoModel)
  ActividadesModel.hasMany(FormulasModel)
  ActividadesModel.hasMany(ProgramacionesModel)
  ProgramacionesModel.belongsTo(ActividadesModel)
  FormulasModel.belongsTo(ActividadesModel)
  ActividadInsumoModel.belongsTo(ActividadesModel)

  ActividadesModel.hasMany(ProgramacionesModel)
  ActividadesModel.hasMany(FormulasModel)
  ProgramacionesModel.belongsTo(ActividadesModel)
  FormulasModel.belongsTo(ActividadesModel)

  AlturaModel.hasMany(FincasModel)
  FincasModel.belongsTo(AlturaModel)

  CaficultoresModel.belongsTo(UsuariosModel)
  CaficultoresModel.hasMany(FincaCaficultorModel)
  FincaCaficultorModel.belongsTo(CaficultoresModel)

  CambiosModel.belongsTo(ModulosModel)
  ModulosModel.hasMany(CambiosModel)

  ColoresModel.hasMany(VariedadColorModel)
  VariedadColorModel.belongsTo(ColoresModel)

  ControlesModel.hasMany(FormulasModel)
  ControlesModel.belongsTo(EtapasModel)
  FormulasModel.belongsTo(ControlesModel)
  EtapasModel.hasMany(ControlesModel)

  DepartamentosModel.hasMany(MunicipiosModel)
  DepartamentosModel.belongsTo(PaisesModel)
  MunicipiosModel.belongsTo(DepartamentosModel)
  PaisesModel.hasMany(DepartamentosModel)

  DispositivosModel.belongsTo(UsuariosModel)
  DispositivosModel.belongsTo(VersionesModel)
  VersionesModel.hasMany(DispositivosModel)

  ControlesModel.belongsTo(EtapasModel)

  FincaCaficultorModel.belongsTo(FincasModel)
  FincasModel.hasMany(FincaCaficultorModel)

  FincasModel.hasMany(LotesModel)
  FincasModel.belongsTo(MunicipiosModel)
  LotesModel.belongsTo(FincasModel)
  MunicipiosModel.hasMany(FincasModel)

  FloracionesModel.hasMany(LotesModel)
  LotesModel.belongsTo(FloracionesModel)

  FormulasModel.hasMany(TipoProgramacionModel)
  TipoProgramacionModel.belongsTo(FormulasModel)

  InsumosModel.belongsTo(TipoInsumoModel)
  ProveedoresModel.hasMany(InsumosModel)
  TipoInsumoModel.hasMany(InsumosModel)

  LotesModel.belongsTo(VariedadesModel)
  LotesModel.hasMany(SensoresClimaModel)
  VariedadesModel.hasMany(LotesModel)
  SensoresClimaModel.belongsTo(LotesModel)
  ProgramacionesModel.belongsTo(LotesModel)

  ProgramacionesModel.belongsTo(RecordatoriosModel)
  ProgramacionesModel.belongsTo(TipoProgramacionModel)

  SedesModel.hasMany(ProveedoresModel)
  ProveedoresModel.belongsTo(UsuariosModel)

  SedesModel.belongsTo(MunicipiosModel)

  TipoInsumoModel.hasMany(ActividadInsumoModel)
  ActividadInsumoModel.belongsTo(TipoInsumoModel)

  VariedadColorModel.belongsTo(VariedadesModel)
  VariedadesModel.hasMany(VariedadColorModel)

  await sequelize.authenticate()

  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  const Acciones = {}
  const ActividadInsumo = {}
  const Actividades = {}
  const Altura = {}
  const Caficultores = {}
  const Cambios = {}
  const Colores = {}
  const Controles = {}
  const Departamentos = {}
  const Dispositivos = {}
  const Etapas = {}
  const Fincas = {}
  const FincaCaficultor = {}
  const Floraciones = {}
  const Formulas = {}
  const Insumos = {}
  const Lotes = {}
  const Modulos = {}
  const Municipios = {}
  const Paises = {}
  const Programaciones = {}
  const Proveedores = {}
  const Recordatorios = {}
  const Sedes = {}
  const SensoresClima = {}
  const TipoInsumo = {}
  const TipoProgramacion = {}
  const Usuarios = {}
  const Variedades = {}
  const VariedadColor = {}
  const Versiones = {}

  return {
    Acciones,
    ActividadInsumo,
    Actividades,
    Altura,
    Caficultores,
    Cambios,
    Colores,
    Controles,
    Departamentos,
    Dispositivos,
    Etapas,
    Fincas,
    FincaCaficultor,
    Floraciones,
    Formulas,
    Insumos,
    Lotes,
    Modulos,
    Municipios,
    Paises,
    Programaciones,
    Proveedores,
    Recordatorios,
    Sedes,
    SensoresClima,
    TipoInsumo,
    TipoProgramacion,
    Usuarios,
    Variedades,
    VariedadColor,
    Versiones
  }
}
