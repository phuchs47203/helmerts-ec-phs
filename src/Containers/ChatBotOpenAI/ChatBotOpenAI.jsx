import React, { useState } from 'react';
import axios from 'axios';
import './ChatBotOpenAI.css'
import { HiChatAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { images } from '../../Constants';

const ChatBotOpenAI = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const chatWithGPT3 = async (userInput) => {
        // const apiEndpoint = 'https://api.openai.com/v1/chat/completions';
        const apiEndpoint = 'https://api.openai.com/v1/engines/gpt-3.5-turbo-instruct/completions';

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer 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`
        };
        // Thêm các câu hỏi mặc định và cung cấp câu trả lời
        let promptToUse = userInput;

        if (userInput.toLowerCase().includes('xin chào') || userInput.toLowerCase().includes('hello') || userInput.toLowerCase().includes('hi')) {
            promptToUse = 'Xin chào, Helmerts có thể giúp gì cho bạn. Hãy gửi mail cho chúng tôi để được tư vấn kĩ hơn: care@helmerts.com';
            return promptToUse;
        }
        if (userInput.toLowerCase().includes('cửa hàng của helmerts ở đâu')) {
            promptToUse = 'Bạn có thể tìm của hàng của Helmerts tại website chính thức của chúng tôi ở phần danh sách cửa hàng, hoặc tím trên google map search helmerts';
            return promptToUse;
        }
        if (userInput.toLowerCase().includes('tôi muốn mua hàng')) {
            promptToUse = 'Bạn cần tạo một tài khoản cá nhân, thêm sản phẩm vào giỏ hàng và tiến hành làm theo hướng dẫn tren website của chúng tôi';
            return promptToUse;
        }
        if (userInput.toLowerCase().includes('chính sách bảo mật thông tin cá nhân')) {
            promptToUse = 'Helmerts cam kết bảo mật thông tin của ngươi dùng, không bán hoặc chia sẻ thông tin dưới bất kì hình thức nào';
            return promptToUse;
        }



        const data = {
            prompt: promptToUse,
            max_tokens: 300
        };
        setInput('');
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
        setInput('');
        const newAiMessage = { text: response, user: false };
        setMessages((prevMessages) => [...prevMessages.slice(0, -1), newAiMessage]);
    };
    const [openChatbox, setopenChatbox] = useState(false);
    return (
        <div className="chatbot-container-box">
            <div onClick={() => setopenChatbox(true)} className='chatbot-container-icon'>
                {!openChatbox &&
                    <div className='chatbot-container-icon-box scale-up-center'>
                        <HiChatAlt2 />
                    </div>
                }
            </div>
            {openChatbox &&
                <div className='chatbot-container scale-up-center'>
                    <div className='chatbot-container-icon-close'>
                        <img src={images.helmerts_high_resolution_logo_transparent} alt="" />
                        <MdClose onClick={() => setopenChatbox(false)} />
                    </div>

                    <div className="chatbot-messages">
                        <div className='chatbot-messages-usually'>
                            <div onClick={() => setInput('Xin chào')}>
                                <p>Start chatting!</p>
                            </div>
                            <div onClick={() => setInput('Tôi muốn mua hàng')}>
                                <p>Tôi muốn mua hàng?</p>
                            </div>
                            <div onClick={() => setInput('Cửa hàng của Helmerts ở đâu')}>
                                <p>Cửa hàng của Helmerts ở đâu?</p>
                            </div>
                            <div onClick={() => setInput('Chính sách bảo mật thông tin cá nhân')}>
                                <p>Chính sách bảo mật thông tin?</p>
                            </div>

                        </div>

                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className='message-box'
                            >
                                {message.user
                                    ? <div className='user-message'><div>
                                        <p>{message.text}</p>
                                    </div></div>
                                    : <div className='ai-message'>
                                        <div>
                                            <p>{message.text}</p>
                                        </div>
                                    </div>
                                }
                            </div>
                        ))}
                    </div>


                    <form className="chatbot-input-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Message..."
                        />
                        <button className='button_default btn-transition' type="submit">Send</button>
                    </form>

                </div>
            }


        </div>
    )
}

export default ChatBotOpenAI