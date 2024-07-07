export class Student {
    constructor(public id?: number,
        public name?: string,
        public department: number = -1,
        public bdate?: Date,
        public gender?: string,
        public active: boolean = false,
        public level?: number) { }
}