enum AppRoute {
  root = '/',
  main = '/main',
  form = '/form',
  catalog = '/catalog',
  uiKit = '/ui-kit',
  notFound = '*',
}
const FIRST_STEP = 0;
const MAX_COUNTRY_IN_PLAN = 4;
const FORM_STEP_COUNT = 3;
const minCompanions = 1;
const maxCompanions = 10;
const minTravelDuration = 2;
const maxTravelDuration = 31;
const minActionPlan = 0;
const maxActionPlan = 200;

const ReactCalendarView = {
  month: 'month',
  year: 'year',
  decade: 'decade',
  century: 'century',
};

enum APIRoute {
  Cards = '/cards',
  CardsAdd = '/cards/add',
  Countries = '/countries',
}

enum NameSpace {
  Countries = 'COUNTRIES',
  Form = 'FORM',
  Catalog = 'CATALOG',
  User = 'USER',
}

const randomUserPhoto = {
  male: 'https://randomuser.me/api/portraits/men/',
  female: 'https://randomuser.me/api/portraits/women/'
};

const userFirstNameList = {
  male: ['Трофим','Константин','Юрий','Герасим','Кирилл','Ростислав','Алексей','Аркадий','Юрий','Яков','Феликс','Денис','Валерий','Прохор','Петр','Леонтий','Максим','Севастьян','Иван','Роман'],
  female: ['Оксана','Пелагея','Марьяна','Татьяна','Альбина','Мария','Кира','Алла','Марьямна','Марьяна','Инна','Марьямна','Серафима','Серафима','Алиса','Карина','Анжела','Настасья','Ульяна','Евгения']
};

const userLastNameList = {
  male: ['Абросимов','Корольков','Татаров','Артёмов','Опекунов','Кочергов','Сиянкин','Костин','Базанов','Судленков','Лачинов','Бугайчук','Бубенцов','Каганович','Козлаков','Эйлер','Кариев','Трухин','Хребтов','Уксюзов'],
  female: ['Лашкина','Смирнова','Дуболазова','Тихонова','Ярмоненко','Карюкина','Юбкина','Осинова','Муратова','Шадрина','Ручкина','Толбоева','Великая','Нагиева','Короткова','Капп','Ямбушева','Бегичева','Вольпова','Пичугина']
};

enum Transport {
  Plain = 'plane',
  Bus = 'bus',
  Bycicle = 'bycicle',
  Walking = 'walking'
}

const TransportName = {
  [Transport.Plain]: 'Авиаперелет',
  [Transport.Bus]: 'Автотранспорт',
  [Transport.Bycicle]: 'Велосипед',
  [Transport.Walking]: 'Пешком',
};

enum Regions {
  EUROPE = 'europe',
  ASIA = 'asia',
  AMERICAS = 'americas',
  OCEANIA = 'oceania'
}

const RegionsNames = [
  {key: Regions.EUROPE, name: 'Европа'},
  {key: Regions.ASIA, name: 'Азия'},
  {key: Regions.AMERICAS, name: 'Америка'},
  {key: Regions.OCEANIA, name: 'Острова'}
];

export {
  APIRoute,
  NameSpace,
  AppRoute,
  minCompanions,
  maxCompanions,
  minTravelDuration,
  maxTravelDuration,
  ReactCalendarView,
  minActionPlan,
  maxActionPlan,
  randomUserPhoto,
  userFirstNameList,
  userLastNameList,
  FIRST_STEP,
  MAX_COUNTRY_IN_PLAN,
  FORM_STEP_COUNT,
  Transport,
  TransportName,
  Regions,
  RegionsNames
};
