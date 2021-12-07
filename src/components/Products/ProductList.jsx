import { Product } from "./ProductItem";

export const ProductList = () => {
  return (
    <div>
      <h1>This is my Product</h1>
      <p>Product</p>
      <Product
        title="Tidal Pull"
        price="45000"
        quantity="65"
        desc="books"
        Url="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
      />
      <Product
        title="Pull"
        price="20000"
        quantity="6584"
        desc="notes"
        Url="https://media.istockphoto.com/photos/concept-of-an-open-magic-book-open-pages-with-water-and-land-and-picture-id1279460648?b=1&k=20&m=1279460648&s=170667a&w=0&h=uZa830sWo8hlFN0Y7FnQ14giNC0Z2EBNuTMuNJeJhQg="
      />
      <Product
        title="Tidal"
        price="30000"
        quantity="658"
        desc="file"
        Url="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg"
      />
      <Product
        title="tSUNAMI"
        price="54000"
        quantity="965"
        desc="game"
        Url="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg"
      />
      <Product
        title="improve your skills"
        price="12000"
        quantity="265"
        desc="books"
        Url="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567__480.jpg"
      />
    </div>
  );
};
