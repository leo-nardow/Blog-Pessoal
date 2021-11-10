import { Theme } from "./Theme"
import { User } from "./User"

export class Post{
    public idPost: number
    public title: string
    public description: string
    public user: User
    public theme: Theme
}