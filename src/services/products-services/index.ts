import { Product, UserProduct, UserValidated } from "@protocols";
import { registerProduct } from "@repositories";

export async function createProduct(product: Product, id: number) {
  const userProduct: UserProduct = { userId: id, ...product };
  const wasSuccessful = await registerProduct(userProduct);
  if (!wasSuccessful) {
    throw new Error(`Failed registering ${userProduct.productName}`);
  }
}
