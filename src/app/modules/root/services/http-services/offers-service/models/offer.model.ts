import { Comment } from './comment.model';
import { Location } from './location.model';

export class Offer {
    id: number;
    location: Location;
    publishedBy: number;
    description: string;
    likes: number;
    comments: Comment[];
    price: number;
    isPremium?: boolean;
    expirationDate?: Date;
}