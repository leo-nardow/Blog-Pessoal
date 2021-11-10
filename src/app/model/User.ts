import { Post } from "./Post"

export class User{
    public idUser: number
    public name: string
    public email: string
    public password: string
    public photo: string
    public type: string
    public post: Post[]
}