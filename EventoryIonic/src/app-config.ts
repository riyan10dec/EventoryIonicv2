export class Config{
    private apiURL:string= "https://calm-refuge-86245.herokuapp.com/api/";
    constructor(){ }
    public getApiURL(){
        return this.apiURL;
    }
}