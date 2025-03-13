type TypeItem = {
  id: number; 
  title: string;
  rating: number;
  episodes: number;
  status: string;
};

export const data: TypeItem[] = [
  {
    id: 1,
    title: 'Наруто',
    rating: 8.5,
    episodes: 720,
    status: 'вышел',
  },
  {
    id: 2,
    title: 'Атака титанов',
    rating: 9.0,
    episodes: 75,
    status: 'онгоинг',
  },
  {
    id: 3,
    title: 'Врата Штейна',
    rating: 9.7,
    episodes: 24,
    status: 'вышел',
  },
]