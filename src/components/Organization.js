import React from 'react';
import { Create, SimpleForm, TextInput, List, Datagrid, TextField, Edit, Show, SimpleShowLayout } from 'react-admin';


export const OrgList = (props) => {
    return (
        <List {...props}>
            <Datagrid rowClick="show">
                <TextField source="name" />
                <TextField source="address" />
            </Datagrid>
        </List>
    );
}

export const OrgCreate = (props) => {
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="name" />
                <TextInput source="address" />
            </SimpleForm>
        </Create>
    )
}

export const OrgEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput source="name" />
                <TextInput source="address" />
            </SimpleForm>
        </Edit>
    )
}

export const OrgShow = (props) => {
    return (
        <Show {...props}>
            <SimpleShowLayout>
                <TextField source="name" />
                <TextField source="address" />
            </SimpleShowLayout>
        </Show>
    )
}