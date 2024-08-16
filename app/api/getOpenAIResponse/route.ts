export const getOpenAIResponse = async (userInput: string): Promise<string> => {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // You can specify the model, e.g., "gpt-4"
        messages: [{ role: "user", content: userInput }],
        max_tokens: 150, // Adjust the token limit according to your needs
      }),
    });
  
    if (!response.ok) {
      throw new Error("Failed to fetch OpenAI response");
    }
  
    const data = await response.json();
    return data.choices[0].message.content;
  };
  
