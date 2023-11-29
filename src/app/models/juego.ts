export enum JuegoEstatus {
    Disponible = 'Disponible',
    Vendido = 'Vendido',
    Apartado = 'Apartado',
  }
  
  export interface Juego {
    id: number;
    plataforma: string;
    imagen: string;
    estado: string;
    notas: string;
    precioVenta: number;
    descripcion: string;
    cliente: string;
    vendedor: string;
    totalventas: number;
    totalaPagar: number;
  }
  
  
  