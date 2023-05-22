interface IPublisher {
  name: string;
  location: string;
}
interface IReviews {
  user: string;
  comment: string;
}
interface IBooks {
  title: string;
  author: string[];
  genre: string;
  publicationYear: number;
  publisher: IPublisher;
  reviews: IReviews[];
  rating: number;
  prices: number | string;
}

export default IBooks;
