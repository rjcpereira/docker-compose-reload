export const port = (!process.env.PORT ? null : parseInt(process.env.PORT)) || 3000;

export default {
    port
}