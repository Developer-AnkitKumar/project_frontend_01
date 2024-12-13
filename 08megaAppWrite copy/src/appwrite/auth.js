import config from "../config/config.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint("https://your-appwrite-endpoint") // Your Appwrite endpoint
            .setProject(config.appWriteProjectId); // Your Appwrite project ID
        this.account = new Account(this.client);
    }

    async makeRequest(method, url, headers, params) {
        const { uri, options } = this.prepareRequest(method, url, headers, params);
    
        try {
            const response = await fetch(uri, options);
            
            // Handle warnings
            const warnings = response.headers.get("x-appwrite-warning");
            if (warnings) {
                warnings.split(";").forEach((warning) => console.warn("Warning: " + warning));
            }
    
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Request failed:", error);
            throw error;
        }
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.createLogin({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            console.error("Error in createAccount:", error);
            throw error;
        }
    }

    async createLogin({ email, password }) {
        try {
            const session = await authService.login({ email, password }); // Creates a session
            if (session) {
                const userData = await authService.getCurrentUser(); // Fetch user info
                console.log("User data:", userData);
            }
        } catch (error) {
            console.error("Login failed:", error);
        }
    }
   
    async getCurrentUser() {
        try {
            const user = await this.account.get();
            console.log("Authenticated user:", user);
            return user; // Successfully authenticated user
        } catch (error) {
            if (error.code === 401) {
                console.log("User is not logged in. Please log in first.");
            } else if (error.code === 403) {
                console.log("User lacks the necessary permissions to access this resource.");
            } else {
                console.log("An unexpected error occurred:", error.message);
            }
            return null;
        }
    }

    async createLogout() {
        try {
            return await this.account.deleteSessions(); // Logout all sessions
        } catch (error) {
            console.error("Error during logout:", error);
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;
