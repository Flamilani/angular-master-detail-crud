import { Category } from './../../categories/models/category.model';
export class Entry {
  constructor(
    public id?: any,
    public name?: string,
    public description?: string,
    public type?: string,
    public amount?: string,
    public date?: string,
    public paid?: boolean,
    public categoryId?: number,
    public category?: Category
  ) {}

  static types = {
    expence: 'Despesa',
    revenue: 'Receita'
  };

  get paidText(): string {
    return this.paid ? 'Pago': 'Pedente';
  }
}
