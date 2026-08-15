import { PRODUCTS } from '../constants/images';

// Spec label dictionary — shared across products so each label is translated once.
export const SPEC_LABELS = {
  en: {
    capacity: 'Capacity (Liters)',
    climateClass: 'Climate Class',
    externalDimensions: 'External Dimensions (W*D*H) cm',
    grossWeight: 'Gross weight (kg)',
    containerLoading: '40HQ container loading',
    truckLoading: 'Truck loading (L*W*H) (13.5*2.48*3)m',
  },
  ar: {
    capacity: 'السعة (لتر)',
    climateClass: 'الفئة المناخية',
    externalDimensions: 'الأبعاد الخارجية (عرض×عمق×ارتفاع) سم',
    grossWeight: 'الوزن الإجمالي (كجم)',
    containerLoading: 'التحميل في حاوية 40HQ',
    truckLoading: 'التحميل في شاحنة (طول×عرض×ارتفاع) (13.5*2.48*3)م',
  },
};

// Feature phrase dictionary — the many products reuse the same feature lines.
export const FEATURE_LABELS = {
  en: {
    canopy: 'Canopy',
    dynamicCooling: 'Dynamic cooling (no-frost)',
    staticCooling: 'Static cooling',
    whiteLiner: 'White pre-painted steel inner liner',
    shelves5: '5 adjustable shelves',
    shelves6: '6 adjustable shelves',
    shelves8: '8 adjustable shelves',
    doubleGlassDoorLowE: 'Double tempered glass door with Low E-film',
    doubleGlassDoorsLowE: 'Double tempered glass doors with Low E-film',
    tripleGlassDoor: 'Triple tempered glass door',
    doubleGlass: 'Double tempered glass',
    ledTwoSides: 'LED Lights (two sides)',
    ledLights: 'LED Lights',
    doorLockSelfClosing: 'Door Lock and self closing',
    fourWheels: 'Four wheels',
    sixWheels: 'Six wheels',
    adjustableFeet: 'Adjustable feet in the front',
    wideCondenser: 'Wide steel condenser with cooling fan',
    cfcFree: 'CFC free environmentally friendly',
    gasChargeR290: 'Gas charge : R290',
    voltage: '220-240 V / 50Hz/60Hz',
    digitalThermometer: 'Digital Thermometer',
    adjustableShelves5: 'Adjustable shelves 5',
    canopyAndWithout: 'Canopy and Without canopy',
    verticalBottleCooler: 'Vertical Bottle cooler',
    doubleGlassDoorPlain: 'Double tempered glass door',
    doubleSwingDoors: 'Double swing doors',
    inclinedGlassDoor: 'Inclined tempered glass door',
    ledInteriorLighting: 'LED interior lighting',
    doorLock: 'Door lock',
    adjustableThermostat: 'Adjustable thermostat',
    flatGlassTop: 'Flat tempered glass top',
    twoStorageBaskets: '2 storage baskets',
  },
  ar: {
    canopy: 'مظلة علوية',
    dynamicCooling: 'تبريد ديناميكي (بدون تجمد)',
    staticCooling: 'تبريد ثابت',
    whiteLiner: 'بطانة داخلية من الصلب المطلي مسبقاً باللون الأبيض',
    shelves5: '5 أرفف قابلة للتعديل',
    shelves6: '6 أرفف قابلة للتعديل',
    shelves8: '8 أرفف قابلة للتعديل',
    doubleGlassDoorLowE: 'باب زجاجي مقسّى مزدوج بطبقة Low-E عازلة',
    doubleGlassDoorsLowE: 'أبواب زجاجية مقسّاة مزدوجة بطبقة Low-E عازلة',
    tripleGlassDoor: 'باب زجاجي مقسّى ثلاثي الطبقات',
    doubleGlass: 'زجاج مقسّى مزدوج',
    ledTwoSides: 'إضاءة LED (على الجانبين)',
    ledLights: 'إضاءة LED',
    doorLockSelfClosing: 'قفل باب مع إغلاق ذاتي',
    fourWheels: 'أربع عجلات',
    sixWheels: 'ست عجلات',
    adjustableFeet: 'أرجل أمامية قابلة للتعديل',
    wideCondenser: 'مكثّف فولاذي عريض مزوّد بمروحة تبريد',
    cfcFree: 'خالٍ من الكلوروفلوروكربون وصديق للبيئة',
    gasChargeR290: 'غاز التبريد: R290',
    voltage: '220-240 فولت / 50 هرتز - 60 هرتز',
    digitalThermometer: 'ميزان حرارة رقمي',
    adjustableShelves5: '5 أرفف قابلة للتعديل',
    canopyAndWithout: 'مع مظلة أو بدون مظلة',
    verticalBottleCooler: 'مبرّد زجاجات عمودي',
    doubleGlassDoorPlain: 'باب زجاجي مقسّى مزدوج',
    doubleSwingDoors: 'بابان مفصليان مزدوجان',
    inclinedGlassDoor: 'باب زجاجي مقسّى مائل',
    ledInteriorLighting: 'إضاءة داخلية LED',
    doorLock: 'قفل باب',
    adjustableThermostat: 'منظم حرارة قابل للتعديل',
    flatGlassTop: 'غطاء زجاجي مقسّى مسطح',
    twoStorageBaskets: 'سلتا تخزين',
  },
};

// Product categories are stable, language-independent keys used for section filtering.
export const CATEGORY_LABELS = {
  en: {
    single: 'Single Door Models',
    double: 'Double Door Models',
    chest: 'Freezers',
  },
  ar: {
    single: 'موديلات باب واحد',
    double: 'موديلات باب مزدوج',
    chest: 'الفريزرات',
  },
};

const F = key => key; // readability alias for feature keys below

export const PRODUCTS_CATALOG = [
  {
    id: 'gvc-406',
    code: 'GVC 406',
    image: PRODUCTS.gvc_406,
    category: 'single',
    title: {
      en: 'GVC 406 Up-right Showcase Refrigerator (Single Door)',
      ar: 'ثلاجة عرض عمودية GVC 406 (باب واحد)',
    },
    shortDesc: {
      en: '320 Liters | Climate Class 5 | Dynamic cooling (No-Frost) | R290',
      ar: '320 لتر | الفئة المناخية 5 | تبريد ديناميكي (بدون تجمد) | R290',
    },
    specs: [
      { key: 'capacity', value: '320' },
      { key: 'climateClass', value: '5' },
      { key: 'externalDimensions', value: '60*58*186' },
      { key: 'grossWeight', value: '63' },
      { key: 'containerLoading', value: '75' },
      { key: 'truckLoading', value: '81' },
    ],
    features: [
      F('canopy'), F('dynamicCooling'), F('whiteLiner'), F('shelves5'),
      F('doubleGlassDoorLowE'), F('ledTwoSides'), F('doorLockSelfClosing'),
      F('fourWheels'), F('adjustableFeet'), F('wideCondenser'), F('cfcFree'),
      F('gasChargeR290'), F('voltage'), F('digitalThermometer'),
    ],
  },
  {
    id: 'gvc-526',
    code: 'GVC 526',
    image: PRODUCTS.gvc_526,
    category: 'single',
    title: {
      en: 'GVC 526 Up-right Showcase Refrigerator (Single Door)',
      ar: 'ثلاجة عرض عمودية GVC 526 (باب واحد)',
    },
    shortDesc: {
      en: '435 Liters | Climate Class 5 | LED Lighting | Self Closing Door | R290',
      ar: '435 لتر | الفئة المناخية 5 | إضاءة LED | باب ذاتي الإغلاق | R290',
    },
    specs: [
      { key: 'capacity', value: '435' },
      { key: 'climateClass', value: '5' },
      { key: 'externalDimensions', value: '66*68*210' },
      { key: 'grossWeight', value: '78' },
      { key: 'containerLoading', value: '54' },
      { key: 'truckLoading', value: '60' },
    ],
    features: [
      F('canopy'), F('dynamicCooling'), F('whiteLiner'), F('shelves5'),
      F('doubleGlassDoorLowE'), F('ledTwoSides'), F('doorLockSelfClosing'),
      F('fourWheels'), F('adjustableFeet'), F('wideCondenser'), F('cfcFree'),
      F('gasChargeR290'), F('voltage'), F('digitalThermometer'),
    ],
  },
  {
    id: 'gvc-636',
    code: 'GVC 636',
    image: PRODUCTS.gvc_636,
    category: 'single',
    title: {
      en: 'GVC 636 Up-right Showcase Refrigerator (Single Door)',
      ar: 'ثلاجة عرض عمودية GVC 636 (باب واحد)',
    },
    shortDesc: {
      en: '532 Liters | Climate Class 5 | Heavy Duty | LED Lights | R290',
      ar: '532 لتر | الفئة المناخية 5 | تحمل عالي | إضاءة LED | R290',
    },
    specs: [
      { key: 'capacity', value: '532' },
      { key: 'climateClass', value: '5' },
      { key: 'externalDimensions', value: '80*68*210' },
      { key: 'grossWeight', value: '96' },
      { key: 'containerLoading', value: '40' },
      { key: 'truckLoading', value: '45' },
    ],
    features: [
      F('canopy'), F('dynamicCooling'), F('whiteLiner'), F('shelves6'),
      F('doubleGlassDoorLowE'), F('ledTwoSides'), F('doorLockSelfClosing'),
      F('fourWheels'), F('adjustableFeet'), F('wideCondenser'), F('cfcFree'),
      F('gasChargeR290'), F('voltage'), F('digitalThermometer'),
    ],
  },
  {
    id: 'gvc-646',
    code: 'GVC 646',
    image: PRODUCTS.gvc_646,
    category: 'single',
    title: {
      en: 'GVC 646 Up-right Showcase Refrigerator (Single Door)',
      ar: 'ثلاجة عرض عمودية GVC 646 (باب واحد)',
    },
    shortDesc: {
      en: '532 Liters | Black or White',
      ar: '532 لتر | أسود أو أبيض',
    },
    specs: [
      { key: 'capacity', value: '532' },
      { key: 'externalDimensions', value: '80*68*200' },
    ],
    features: [
      F('doubleGlass'), F('adjustableShelves5'), F('doorLockSelfClosing'),
      F('fourWheels'), F('ledLights'),
    ],
  },
  {
    id: 'gvc-1100',
    code: 'GVC 1100',
    image: PRODUCTS.gvc_1100,
    category: 'double',
    title: {
      en: 'GVC 1100 Refrigerator (Swing Doors)',
      ar: 'ثلاجة GVC 1100 (أبواب مفصلية)',
    },
    shortDesc: {
      en: '1060 Liters | White',
      ar: '1060 لتر | أبيض',
    },
    specs: [
      { key: 'capacity', value: '1060' },
      { key: 'externalDimensions', value: '120*72*200' },
    ],
    features: [
      F('canopyAndWithout'), F('verticalBottleCooler'), F('dynamicCooling'),
      F('doubleGlassDoorPlain'), F('doubleSwingDoors'), F('wideCondenser'),
    ],
  },
  {
    id: 'gvc-1101',
    code: 'GVC 1101',
    image: PRODUCTS.gvc_1101,
    category: 'double',
    title: {
      en: 'GVC 1101 Up-right Refrigerator (Swing Doors)',
      ar: 'ثلاجة عمودية GVC 1101 (أبواب مفصلية)',
    },
    shortDesc: {
      en: '1060 Liters | Black',
      ar: '1060 لتر | أسود',
    },
    specs: [
      { key: 'capacity', value: '1060' },
      { key: 'externalDimensions', value: '120*72*200' },
    ],
    features: [
      F('canopyAndWithout'), F('verticalBottleCooler'), F('dynamicCooling'),
      F('doubleGlassDoorPlain'), F('doubleSwingDoors'), F('wideCondenser'),
    ],
  },
  {
    id: 'gvc-1106',
    code: 'GVC 1106',
    image: PRODUCTS.gvc_1106,
    category: 'double',
    title: {
      en: 'GVC 1106 Up-right Showcase Refrigerator (Double Swing Door)',
      ar: 'ثلاجة عرض عمودية GVC 1106 (بابان مفصليان)',
    },
    shortDesc: {
      en: '1060 Liters | Climate Class 5 | Double Swing Doors | Vertical Bottle Cooler | R290',
      ar: '1060 لتر | الفئة المناخية 5 | بابان مفصليان | مبرّد زجاجات عمودي | R290',
    },
    specs: [
      { key: 'capacity', value: '1060' },
      { key: 'climateClass', value: '5' },
      { key: 'externalDimensions', value: '120*72*225' },
      { key: 'grossWeight', value: '145' },
      { key: 'containerLoading', value: '24' },
      { key: 'truckLoading', value: '27' },
    ],
    features: [
      F('canopy'), F('dynamicCooling'), F('whiteLiner'), F('shelves8'),
      F('doubleGlassDoorsLowE'), F('ledTwoSides'), F('doorLockSelfClosing'),
      F('sixWheels'), F('adjustableFeet'), F('wideCondenser'), F('cfcFree'),
      F('gasChargeR290'), F('voltage'), F('digitalThermometer'),
    ],
  },
  {
    id: 'gvf-565',
    code: 'GVF 565',
    image: PRODUCTS.gvf_565,
    category: 'chest',
    title: {
      en: 'GVF 565 Upright Freezer',
      ar: 'فريزر عمودي GVF 565',
    },
    shortDesc: {
      en: '465 Liters | Climate Class T | Tropical Class | Triple Tempered Glass | R290',
      ar: '465 لتر | الفئة المناخية T | فئة استوائية | زجاج مقسّى ثلاثي | R290',
    },
    specs: [
      { key: 'capacity', value: '465' },
      { key: 'climateClass', value: 'T' },
      { key: 'externalDimensions', value: '66*74*203' },
      { key: 'grossWeight', value: '85' },
      { key: 'containerLoading', value: '48' },
      { key: 'truckLoading', value: '52' },
    ],
    features: [
      F('canopy'), F('staticCooling'), F('whiteLiner'), F('shelves6'),
      F('tripleGlassDoor'), F('ledTwoSides'), F('doorLockSelfClosing'),
      F('fourWheels'), F('adjustableFeet'), F('wideCondenser'), F('cfcFree'),
      F('gasChargeR290'), F('voltage'), F('digitalThermometer'),
    ],
  },
  {
    id: 'gsc-407',
    code: 'GSC 407',
    image: PRODUCTS.gsc_407,
    category: 'chest',
    title: {
      en: 'GSC 407 Inclined Showcase Chest Freezer',
      ar: 'فريزر صندوقي مائل GSC 407',
    },
    shortDesc: {
      en: '376 Liters | Climate Class T | Tempered Glass Door | LED Light | R290',
      ar: '376 لتر | الفئة المناخية T | باب زجاجي مقسّى | إضاءة LED | R290',
    },
    specs: [
      { key: 'capacity', value: '376' },
      { key: 'climateClass', value: 'T' },
      { key: 'externalDimensions', value: '143*70*89' },
      { key: 'grossWeight', value: '68' },
      { key: 'containerLoading', value: '72' },
      { key: 'truckLoading', value: '78' },
    ],
    features: [
      F('inclinedGlassDoor'), F('staticCooling'), F('ledInteriorLighting'),
      F('doorLock'), F('adjustableThermostat'), F('cfcFree'),
      F('gasChargeR290'), F('voltage'),
    ],
  },
  {
    id: 'gsc-507',
    code: 'GSC 507',
    image: PRODUCTS.gsc_507,
    category: 'chest',
    title: {
      en: 'GSC 507 Inclined Showcase Chest Freezer',
      ar: 'فريزر صندوقي مائل GSC 507',
    },
    shortDesc: {
      en: '410 Liters | Climate Class T | Tempered Glass | LED Light | R290',
      ar: '410 لتر | الفئة المناخية T | زجاج مقسّى | إضاءة LED | R290',
    },
    specs: [
      { key: 'capacity', value: '410' },
      { key: 'climateClass', value: 'T' },
      { key: 'externalDimensions', value: '152*70*89' },
      { key: 'grossWeight', value: '74' },
      { key: 'containerLoading', value: '66' },
      { key: 'truckLoading', value: '72' },
    ],
    features: [
      F('inclinedGlassDoor'), F('staticCooling'), F('ledInteriorLighting'),
      F('doorLock'), F('adjustableThermostat'), F('cfcFree'),
      F('gasChargeR290'), F('voltage'),
    ],
  },
  {
    id: 'gsc-550',
    code: 'GSC 550',
    image: PRODUCTS.gsc_550,
    category: 'chest',
    title: {
      en: 'GSC 550 Flat Showcase Chest Freezer',
      ar: 'فريزر صندوقي مسطح GSC 550',
    },
    shortDesc: {
      en: '482 Liters | Climate Class T | Flat Glass Top | 2 Baskets | R290',
      ar: '482 لتر | الفئة المناخية T | غطاء زجاجي مسطح | سلتان | R290',
    },
    specs: [
      { key: 'capacity', value: '482' },
      { key: 'climateClass', value: 'T' },
      { key: 'externalDimensions', value: '152*67*87' },
      { key: 'grossWeight', value: '78' },
      { key: 'containerLoading', value: '60' },
      { key: 'truckLoading', value: '65' },
    ],
    features: [
      F('flatGlassTop'), F('staticCooling'), F('ledInteriorLighting'),
      F('twoStorageBaskets'), F('doorLock'), F('cfcFree'),
      F('gasChargeR290'), F('voltage'),
    ],
  },
  {
    id: 'gsc-650',
    code: 'GSC 650',
    image: PRODUCTS.gsc_650,
    category: 'chest',
    title: {
      en: 'GSC 650 Flat Showcase Chest Freezer',
      ar: 'فريزر صندوقي مسطح GSC 650',
    },
    shortDesc: {
      en: '586 Liters | Climate Class T | Flat Glass Top | 2 Baskets | R290',
      ar: '586 لتر | الفئة المناخية T | غطاء زجاجي مسطح | سلتان | R290',
    },
    specs: [
      { key: 'capacity', value: '586' },
      { key: 'climateClass', value: 'T' },
      { key: 'externalDimensions', value: '180*67*87' },
      { key: 'grossWeight', value: '92' },
      { key: 'containerLoading', value: '48' },
      { key: 'truckLoading', value: '52' },
    ],
    features: [
      F('flatGlassTop'), F('staticCooling'), F('ledInteriorLighting'),
      F('twoStorageBaskets'), F('doorLock'), F('cfcFree'),
      F('gasChargeR290'), F('voltage'),
    ],
  },
];

export const PRODUCT_SECTIONS = ['single', 'double', 'chest'];
