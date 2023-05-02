import createApiClient from "@/api.service";

class  BookService {
    constructor (baseUr = "/v1/book") {
        this.api = createApiClient(baseUr);
    }
    async getAll(){
        return (await this.api.get("/")).data;
    }
    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    }
    async create(data){
        return (await this.api.post("/", data)).data;
    }
    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
    async update(id, data) {
        return (await this.api.put(`/${id}`, data)).data;
    }
};
class  AuthourServive {
    constructor (baseUr = "/v1/author") {
        this.api = createApiClient(baseUr);
    }
    async getAll(){
        return (await this.api.get("/")).data;
    }
    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    }
    async create(data){
        return (await this.api.post("/", data)).data;
    }
    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
    async update(id, data) {
        return (await this.api.put(`/${id}`, data)).data;
    }
};

export default new {BookService, AuthourServive};
