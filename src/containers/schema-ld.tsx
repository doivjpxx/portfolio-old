interface IProps {
  mainOfPage?: string;
  type?: string;
  rating?: number;
  view?: number;
  description?: string;
  title?: string;
  thumbnail?: string;
  dateModified?: Date;
  datePublished?: Date;
}

const SchemaLD = ({
  mainOfPage,
  type,
  rating,
  view,
  description,
  title,
  thumbnail,
  dateModified,
  datePublished
}: IProps): JSX.Element => {
  const json = {
    mainEntityOfPage: mainOfPage,
    '@context': 'http://schema.org',
    '@type': type,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating,
      reviewCount: view
    },
    description,
    name: title,
    image: thumbnail,
    headline: title,
    author: { '@type': 'Author', name: 'Phong Huy' },
    dateModified,
    datePublished,
    publisher: {
      '@type': 'Author',
      name: 'Phong Huy',
      logo: {
        '@type': 'ImageObject',
        url: '/img/core-img/logo.png',
        height: 60,
        width: 195
      }
    }
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(json)
      }}
    ></script>
  );
};

export default SchemaLD;
