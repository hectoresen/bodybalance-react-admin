import React, { useState, useEffect, useRef } from 'react';
import {
    Avatar,
    AvatarGroup,
    Box,
    Grid,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemSecondaryAction,
    ListItemText,
    MenuItem,
    Stack,
    Typography,
    CssBaseline,
    TextField,
    Container,
} from '@mui/material';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { TabView, TabPanel } from 'primereact/tabview';
import { Dropdown } from 'primereact/dropdown';
import OrdersTable from './OrdersTable';
import Dot from 'components/@extended/Dot';
import MainCard from 'components/MainCard';
import { Tag } from 'primereact/tag';
import { checkRutine, checkDiet, checkResults, getSeverity } from './checkUserStatus';
import { FilterMatchMode, FilterOperator } from 'primereact/api';


const mockUsers = [
    { name: 'Pepe', rutine: false, diet: false, updatedAt: '24/02/2023', results: { advance: 'Avance', photo: null } }
]

const DashboardDefault = () => {
    const [filters, setFilters] = useState({
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    })


    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" rounded textA className="mr-2" onClick={() => editProduct(rowData)} />
            </React.Fragment>
        );
    };

    const checkRutineStatus = (user) => {
        const rutine = checkRutine(user.rutine)
        const { title, color } = rutine;

        return (
            <Stack direction="row" spacing={1} alignItems="center">
                <Dot color={color} />
                <Typography>{title}</Typography>
            </Stack>
        );
    }

    const checkDietStatus = (user) => {
        const diet = checkDiet(user.diet)
        const { title, color } = diet;

        return (
            <Stack direction="row" spacing={1} alignItems="center">
                <Dot color={color} />
                <Typography>{title}</Typography>
            </Stack>
        );
    }

    const checkResultsStatus = (user) => {
        const results = checkResults(user.results)
        const { title, color } = results;

        return (
            <Stack direction="row" spacing={1} alignItems="center">
                <Dot color={color} />
                <Typography>{title}</Typography>
            </Stack>
        );
    }

    const getUserDate = (user) => user.updatedAt.toLocaleString().substring(0, 10);

    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>

            <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

            <Grid item xs={12} md={12} lg={12}>
                <DataTable
                    value={mockUsers}
                    paginator rows={10}
                    filters={filters}
                    filterDisplay="row"
                    globalFilterFields={['name', 'rutine']}
                    emptyMessage="No hay coincidencias"
                    responsiveLayout="scroll"
                >
                    <Column field='name' filter filterPlaceholder="Nombre" header='Nombre' body={mockUsers.name}></Column>
                    <Column field='rutine' header='Rutina' body={checkRutineStatus} ></Column>
                    <Column field='diet' header='Dieta' body={checkDietStatus}></Column>
                    <Column field='results' header='Resultados' body={checkResultsStatus}></Column>
                    <Column field='updatedAt' header='Última actualización' body={getUserDate}></Column>
                    <Column body={actionBodyTemplate} header='Acciones' exportable={false} style={{ minWidth: '12rem' }}></Column>
                </DataTable>
            </Grid>
        </Grid>
    );
};

export default DashboardDefault;
