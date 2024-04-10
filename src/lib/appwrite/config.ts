import {Client, Account, Databases, Storage, Avatars} from 'appwrite'

export const appwriteConfig = {
    //projectID: '6606d36d6dc12b933359',
    projectID: import.meta.env.VITE_APPWRITE_PID,
    //url: 'https://clud.appwrite.io/v1'
    url : import.meta.env.VITE_APPWRITE_URL,
}

export const client = new Client();

client.setProject(appwriteConfig.projectID)
client.setEndpoint(appwriteConfig.url);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);