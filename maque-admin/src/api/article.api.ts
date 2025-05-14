import MyRequest from "../utils/requestJs.ts";

export class ArticleApi {

    //文章列表
    static getArticleList() {
        return MyRequest({
            url: `/api/one`,
            method: 'get'
        })
    }

}