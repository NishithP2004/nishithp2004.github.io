import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
// import rehypeRaw from "rehype-raw";
import rehypeStarryNight from 'rehype-starry-night'
import { remark } from "remark";
import { useState, useEffect } from "react";

async function sleep(delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, 1000 * delay)
    })
}

function MarkdownRenderer({ content, setIsTyping, isTyping, scrollRef }) {
    const [chunks, setChunks] = useState("")

    useEffect(() => {
        let isCancelled = false;
        
        const typingEffect = async () => {
            let current = "";
            for(let char of content || "") {
                if(isCancelled) break;
                current += char;
                setChunks(current)
                await sleep(0.015)

                if(scrollRef?.current) {
                    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
                }
            }
            if(!isCancelled && isTyping) setIsTyping(false)
        }

        setChunks("")
        if(content) typingEffect();
        
        

        return () => {
            isCancelled = true;
        }
    }, [])

    return (
        <Markdown remarkPlugins={[[remarkGfm, rehypeStarryNight, remark]]}>
            {chunks || "Loading"}
        </Markdown>
    );
}

export default MarkdownRenderer;