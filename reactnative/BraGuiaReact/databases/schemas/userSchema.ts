import {appSchema, tableSchema} from '@nozbe/watermelondb';

export const userSchema = tableSchema({
    name:'users',
    columns: [
        {
            name: 'username',
            type: 'string',
        },
        {
            name: 'password',
            type: 'string',
        },
        {
            name: 'email',
            type: 'string',
        },
        {
            name: 'name',
            type: 'string',
        },
        {
            name: 'surname',
            type: 'string',
        },
    ]
})