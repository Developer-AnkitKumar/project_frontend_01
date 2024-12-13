import config from '../config/config.js';
import { Client, ID, Databases, Query, Storage } from "appwrite";

export class AuthService{
    client = new Client()
    Databases;
    Storage;

    constructor(){
        this.client
         .setEndpoint(config.appWriteUrl)
         .setProject(config.appWriteProjectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({title, slug, content, featureImage, status, userId}) {
        try {
            return await this.databases.createDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status,
                    userId,
                }
            );
           
        } catch (error) {
            console.log("AppWrite service :: createPost :: error", error);
            
        }
    }

    async updatePost(slug, {title, content, featureImage, status}) {
        try {
            return await this.databases.updateDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status,
                }
            );
           
        } catch (error) {
            console.log("AppWrite service :: updatePost :: error", error);
            
        }
    }

    async deletePost(slug) { // byDefault for multiple post delete 
        try {
             await this.databases.deleteDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug
            )
            return true;
           
        } catch (error) {
            console.log("AppWrite service :: deletePost :: error", error);
            return false;
        }
    }

    async getPost(slug) {  
        try {
             return await this.databases.getDocument( // for, single post get
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug
            )
           
        } catch (error) {
            console.log("AppWrite service :: getPost :: error", error);
            return false;
        }
    }
    async getPosts(Queries = [Query.equal("status", "active")]) {  
        try {
             return await this.databases.listDocuments( // for, single post get
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                Queries
            )
           
        } catch (error) {
            console.log("AppWrite service :: getPosts :: error", error);
            return false;
        }
    }
//File upload service..............
    async uploadFile(file) {  
        try {
             return await this.storage.createFile( 
                config.appWriteStorageId,
                ID.unique(),
                file
            )
           
        } catch (error) {
            console.log("AppWrite service :: uploadFile :: error", error);
            return false;
        }
    }
    async deleteFile(fileId) {  
        try {
             await this.storage.deleteFile( 
                config.appWriteStorageId,
                fileId
            )
           return true;

        } catch (error) {
            console.log("AppWrite service :: deleteFile :: error", error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.storage.getFilePreview(
            config.appWriteStorageId,
            fileId
        )
    }
}

const service = new AuthService();


export default service