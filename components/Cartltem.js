import {
    ListItem,
    ListItemText,
    IconButton,
    Typography,
    Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import RemoveIcon from '@mui/icons-material/Remove';

import AddIcon from '@mui/icons-material/Add';

import { useContext } from 'react';

import { ProductContext } from '../context/ProductContex';

function CartItem({ item }) {
    const {
        removerDoCarrinho,
        incrementarQuantidade,
        decrementarQuantidade,
    } = useContext(ProductContext);
    return (
        <ListItem
            secundaryAction={
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <IconButton onClick={() => decrementarQuantidade(item.id)}>
                        <RemoveIcon />
                    </IconButton>
                    <Typography variant="body1" component="span" sx={{ mx: 1 }}>
                        {item.quantidade}
                    </Typography>
                    <IconButton onClick={() => incrementarQuantidade(item.id)}>
                        <AddIcon />
                    </IconButton>
                    <IconButton onClick={() => removerDoCarrinho(item.id)} sx={{ ml: 2 }}>
                        <DeleteIcon />
                    </IconButton>
                </Box>
            }
        >
        <ListItemText
          primary = { item.nome }
    secondary = {`Preço unitário: R$ ${item.preco.toFixed(2)} | Total: R$ ${(item.preco * item.quantidade).toFixed(2)}`}
            />
          </ListItem >
    );

}