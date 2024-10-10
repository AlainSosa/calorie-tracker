export type Category = {
  id: number;
  name: string;
};

export type Activity = {
  id: string; // el uuid es tipo string
  category: number;
  name: string;
  calories: number;
};
