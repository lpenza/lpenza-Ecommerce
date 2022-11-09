import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import CarouselOferts from '../components/Carousel/Carousel';
import { useProducts } from '../hooks/useProducts';

export const Home = () => {
  const {item,isLoading}=useProducts(0)
  return (
    <>
      <CarouselOferts />
      <ItemListContainer products={item} isLoading={isLoading} />
    </>
  );
};
