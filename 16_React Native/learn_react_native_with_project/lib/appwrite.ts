import { Account, Client, Databases } from 'react-native-appwrite'

// configuration file to connect our with appwrite
export const client = new Client()
    .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)
    .setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PLATTFORM!)

// services in appwrite work independly
// auth serivce 
export const account = new Account(client)