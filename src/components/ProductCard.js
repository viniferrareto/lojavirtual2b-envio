import { Card, CardContent,
    CardActions, Typography, Button } from
    '@mui/material';
     import { useContext } from 'react';
     import { ProductContext } from
    '../context/ProductContext';
    
    function ProductCard({ produto }) {
     const { adicionarAoCarrinho } =
    useContext(ProductContext);
    
    return (
     <Card>
     <CardContent>
     <Typography
    variant="h5">{produto.nome}</Typography
    >
     <Typography variant="body2"
    color="text.secondary">
     Preço: R$
    {produto.preco.toFixed(2)}
     </Typography>
     </CardContent>
    <CardActions>
<Button size="small" onClick={()=> adicionarAoCarrinho(produto)}>
Adicionar ao Carrinho
</Button>
</CardActions>
</Card>
);
}
export default ProductCard;