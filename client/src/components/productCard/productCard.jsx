import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { makeStyles } from '@mui/styles'
import fetchProductDetails from '../../api/fetchProductDetails'

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    margin: '0 auto',
    marginTop: 16,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

const ProductCard = ({ productId }) => {
  const classes = useStyles();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const getProductDetails = async () => {
      const details = await fetchProductDetails(productId);
      if (details) {
        setProductDetails(details);
      }
    };
    getProductDetails();
  }, [productId]);

  if (!productDetails) {
    return <div>Loading...</div>;
  }

  const { name, description, category, price, brand, image_url } = productDetails;

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={image_url}
        title={name}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {brand}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.primary">
          Category: {category}
        </Typography>
        <Typography variant="body2" color="text.primary">
          Price: ${price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
