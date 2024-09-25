 import { AppBar, Toolbar,
    Typography, Button } from
    '@mui/material';
    
    import { Link } from 'react-router-dom';
    
    function Header() {
     return (
    <AppBar position="static">
     <Toolbar>
    <Typography variant="h6"
    sx={{ flexGrow: 1 }}>
     Loja Virtual
     </Typography>
     <Button color="inherit"
    component={Link} to="/">
     Home
     </Button>
     <Button color="inherit"
component={Link} to="/produtos">

Produtos
</Button>
<Button color="inherit"

component={Link} to="/cadastrar-produto">

Cadastrar Produto
</Button>
<Button color="inherit"
component={Link} to="/carrinho">

Carrinho
</Button>
</Toolbar>
</AppBar>
);
}
export default Header;