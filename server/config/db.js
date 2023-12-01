import mongoose from "mongoose"

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.BASE_URL_DB_LOCAL)

        console.log("Base de datos conectada")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }

}

export default connectDB