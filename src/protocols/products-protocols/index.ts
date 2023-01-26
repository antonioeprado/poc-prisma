export type Product = {
  productName: string;
  productDescription: string;
};

export type UserProduct = Product & {
  userId: number;
};
