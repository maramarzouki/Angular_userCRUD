export class User {
    constructor(
        private _id: number,
        private _name: string,
        private _email: string,
        private _password: string

    ){}

    public get id(): number {
        return this._id;
    }

    public set id(_id: number) {
        this._id = _id;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get email(): string {
        return this._email;
    }

    public set email(email: string) {
        this._email = email;
    }

    public get password(): string {
        return this._password;
    }

    public set password(password: string) {
        this._password = password;
    }

}
