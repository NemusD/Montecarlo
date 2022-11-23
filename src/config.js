import { config } from "dotenv";

config()

export const PORT = process.env.PORT || 3000
export const DB_USER = process.env.DB_USER || 'cdroguett'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'E4iH4aXDXg'
export const DB_HOST = process.env.DB_HOST || '159.138.119.57'
export const DB_DATABASE = process.env.DB_DATABASE || 'QADdatabase' //ps_pznew
export const DB_PORT = process.env.DB_PORT || 3306