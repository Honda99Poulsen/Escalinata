import React, { useContext } from 'react';
import { ContextUsers } from '../../Context/ContextUsers';
import CardUsuario from '../CardUsuario/CardUsuario';
import styled from 'styled-components';

const ContainerUsuarios = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px 15px;
    margin-top: 14px;
`

const MostrarUsuarios = () => {
  const { usuarios } = useContext(ContextUsers);

  return (
   <>
     <ContainerUsuarios>
        {usuarios.map((usuario) => <CardUsuario {...usuario} key={usuario.id}/>)}
    </ContainerUsuarios>
   </>
  );
};

export default MostrarUsuarios;