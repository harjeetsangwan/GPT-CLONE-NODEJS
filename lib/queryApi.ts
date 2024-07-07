import openai from "./chatgpt";

const query =async (prompt:string,chatId:string,model:string) => {
    const res = await openai.chat.completions.create({
        messages: [{ role: "system", content: prompt }],
        model: model,
    })
    .then((res) => res.choices[0] )
    .catch(
        (err) =>
        `ChatGPT was not able to find answer for that (query file22)!(Error L ${err.message})`
    );
    
    return res;
    
};

export default query;