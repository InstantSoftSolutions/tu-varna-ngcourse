export class Message { 
    subject: string;
    message: string;
    author?: string; 
    //Това е поле, което може да бъде null. Това означава, че може да го има, може и да го няма и няма да бъде валидирано, като задължително!
}