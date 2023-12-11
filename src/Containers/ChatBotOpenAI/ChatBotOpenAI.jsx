import React, { useState } from 'react';
import axios from 'axios';
import './ChatBotOpenAI.css'
import { HiChatAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const ChatBotOpenAI = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const chatWithGPT3 = async (userInput) => {
        // const apiEndpoint = 'https://api.openai.com/v1/chat/completions';
        const apiEndpoint = 'https://api.openai.com/v1/engines/davinci/completions';

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer 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`
        };
        // Thêm các câu hỏi mặc định và cung cấp câu trả lời
        let promptToUse = userInput;

        if (userInput.toLowerCase().includes('hello')) {
            promptToUse = 'Hello, how can I help you?';
            return promptToUse;
        } else if (userInput.toLowerCase().includes('your name')) {
            promptToUse = 'Helmerts';
            return promptToUse;
        }
        else if (userInput.toLowerCase().includes('tôi muốn mua hàng')) {
            promptToUse = 'Bạn cần tạo một tài khoản cá nhân để mua hàng';
            return promptToUse;
        }


        const data = {
            prompt: promptToUse,
            max_tokens: 150
        };

        try {
            const response = await axios.post(apiEndpoint, data, { headers });
            // return response.data.choices[0].text.trim();
            console.log('User Input:', userInput);
            console.log('Prompt To Use:', promptToUse);
            console.log('API Response:', response.data);
            return response.data.choices[0].text.trim();
        } catch (error) {
            // console.log('Error communicating with the API:', error);
            console.error('Lỗi khi giao tiếp với API:', error.response || error.message || error);
            throw new Error('Giao tiếp với API thất bại');
        }

    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        const userMessage = { text: input, user: true };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        const aiMessage = { text: '...', user: false };
        setMessages((prevMessages) => [...prevMessages, aiMessage]);
        const response = await chatWithGPT3(input);
        const newAiMessage = { text: response, user: false };
        setMessages((prevMessages) => [...prevMessages.slice(0, -1), newAiMessage]);
        setInput('');
    };
    const [openChatbox, setopenChatbox] = useState(false);
    return (
        <div className="chatbot-container">
            <div className='chatbot-container-icon'>
                {openChatbox
                    ? <MdClose onClick={() => setopenChatbox(false)} />
                    : <HiChatAlt2 onClick={() => setopenChatbox(true)} />
                }
            </div>
            {openChatbox &&
                <div className="chatbot-messages">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`message ${message.user ? 'user-message' : 'ai-message'}`}
                        >
                            {message.text}
                        </div>
                    ))}
                </div>
            }
            {openChatbox &&

                <form className="chatbot-input-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                    />
                    <button type="submit">Send</button>
                </form>
            }
        </div>
    )
}

export default ChatBotOpenAI