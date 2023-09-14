export interface Todo {
  id: number;
  title: string;
  isComplete: boolean;
}

export interface Stats {
  active: number;
  done: number;
}

export type Filter = "All" | "Active" | "Done";
