import React from 'react';
import { List, Datagrid, TextField, Create, SimpleForm, TextInput, DateInput, RadioButtonGroupInput, Edit, ReferenceField, Show, SimpleShowLayout } from 'react-admin';

export const SupplyLoad = (props) => {
    return (
        <List {...props}>
            <Datagrid rowClick="show">
                <TextField source="id" />
                <TextField source="orgname" />
                <TextField source="plasticType" />
                <TextField source="collectionStartDate" />
                <TextField source="collectionEndDate" />
                <TextField source="loadStatus" />
            </Datagrid>
        </List>
    );
}

export const CreateSupplyLoad = (props) => {
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="orgname" />
                <TextInput source="plasticType" />
                <DateInput source="collectionStartDate" />
                <DateInput source="collectionEndDate" />
                <RadioButtonGroupInput source="loadstatus" choices={[
                    { id: 'pending', name: 'Pending' },
                    { id: 'acceped', name: 'Accepted' },
                    { id: 'rejected', name: 'Rejected' },
                ]} />
            </SimpleForm>
        </Create>
    )
}


export const EditSupplyLoad = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextField source="orgname" />
                <ReferenceField source="name" reference="organization">
                    <TextInput source="orgname" />
                </ReferenceField>
                <TextInput source="plasticType" />
                <DateInput source="collectionStartDate" />
                <DateInput source="collectionEndDate" />


                <RadioButtonGroupInput source="loadstatus" choices={[
                    { id: 'pending', name: 'Pending' },
                    { id: 'acceped', name: 'Accepted' },
                    { id: 'rejected', name: 'Rejected' },
                ]} />
            </SimpleForm>
        </Edit>
    )
}

export const ShowSupplyLoad = (props) => {
    return (
        <Show {...props}>
            <SimpleShowLayout>
                <TextField source="id" />
                <TextField source="orgname" />
                <TextField source="plasticType" />
                <TextField source="collectionStartDate" />
                <TextField source="collectionEndDate" />
                <TextField source="loadStatus" />
            </SimpleShowLayout>
        </Show>
    )
}