export interface Todo {
    _id?: string; // veya number, veri tabanının tipine göre
    title: string;
    description: string;
    status?: string; // yeni eklenen satır
  }
  