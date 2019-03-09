export class User{
    _id : String;
    username : String;
    password : String;
    email : String;
    gender : Gender;
    birthDate : Date;

}

enum Gender{
    MALE,FEMALE
}