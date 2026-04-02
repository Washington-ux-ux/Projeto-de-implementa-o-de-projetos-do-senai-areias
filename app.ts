import  express, {Request, Response, json}  from "express"
import router from "./routes"
import path from "path"


function createApp() {
    const app = express()
    app.use(json())
    app.use("/api", router)
    
    // Servir arquivos estáticos da pasta docs
    app.use(express.static(path.join(process.cwd(), 'docs')))
    
    // Rota principal para servir o index.html
    app.get('/', (req: Request, res: Response) => {
        res.sendFile(path.join(process.cwd(), 'index.html'))
    })

    
    return app
}

export default createApp
