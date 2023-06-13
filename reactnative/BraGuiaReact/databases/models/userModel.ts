import { Model } from '@nozbe/watermelondb';
import { field } from  '@nozbe/watermelondb/decorators';

export class userModel extends Model{
    static table = 'users'

    @field('username')
    username!: string;

    @field('password')
    password!: string;

    @field('email')
    email!: string;

    @field('name')
    name!: string;

    @field('surname')
    surname!: string;
}