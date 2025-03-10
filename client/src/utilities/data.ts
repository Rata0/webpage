type TypeItem = {
  id: number; 
  title: string;
  genre: string[];
  rating: number;
  episodes: number;
  status: string;
  releaseYear: number;
  description: string;
  image: string;
  studio: string;
};

export const data: TypeItem[] = [
  {
    id: 1,
    title: 'Наруто',
    genre: ['боевик', 'фэнтези', 'драма'],
    rating: 8.5,
    episodes: 720,
    status: 'вышел',
    releaseYear: 2002,
    description: 'История о ниндзя-подростке Наруто Узумаки, который мечтает стать Хокаге.',
    image: '',
    studio: 'Studio Pierrot',
  },
  {
    id: 2,
    title: 'Атака титанов',
    genre: ['боевик', 'ужасы', 'драма'],
    rating: 9.0,
    episodes: 75,
    status: 'онгоинг',
    releaseYear: 2013,
    description: 'Человечество борется за выживание против гигантских титанов.',
    image: '',
    studio: 'Wit Studio',
  },
  {
    id: 3,
    title: 'Врата Штейна',
    genre: ['драма', 'фантастика'],
    rating: 9.7,
    episodes: 24,
    status: 'вышел',
    releaseYear: 2013,
    description: 'Сняв в Акихабаре квартиру, самопровозглашённый сумасшедший учёный',
    image: '',
    studio: 'Wit Studio',
  },
]