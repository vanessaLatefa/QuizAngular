export class Quiz {
    _id : string;
    visible : boolean;
    userId : String;
    title : String;
    created ? : Date;
    questions : Questions [];

}

export class Option{
    answer : String;
    correct : boolean;
}

export class Questions{
    title : String;
    options : Option[];

}