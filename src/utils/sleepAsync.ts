export async function sleep(miliseconds: number, preventInMode?: 'production' | 'development') : Promise<void> {
    if(process.env.NODE_ENV == preventInMode) return;
    return new Promise(resolve => setTimeout(resolve, miliseconds));
}