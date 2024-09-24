export default [
    {
        name: 'Blog Title',
        desc: 'An AI tool that generates blog titles dependant on your blog information',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4693/4693265.png',
        aiPrompt: 'Give me 5 blog topic ideas in bullet form only based on the given niche topic & outline, give me the results in rich text editor format',
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog niche: ',
                field: 'input',
                name: 'niche',
                required:true
            },
            {
                label: 'Enter blog outline: ',
                field: 'textarea',
                name: 'outline'
            }
        ]
    }, 
    {
        name: 'Blog Content',
        desc: 'An AI tool that generates blog content based on blog title and outline.',
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/2593/2593542.png',
        slug: 'blog-content-generation',
        aiPrompt: 'Generate High-quality SEO keyword optimized content based on the given topic and outline in less than 750 words.',
        form: [
            {
                label: 'Enter your blog topic: ',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter blog Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'An AI tool that generates blog topics based on your niche.',
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/2988/2988036.png',
        slug: 'blog-topic-idea',
        aiPrompt: 'Generate 5 High-quality blog topic ideas in bullet form based on the following niche.',
        form: [
            {
                label: 'Enter your Niche',
                field: 'input',
                name: 'niche',
                required: true
            },
        ]
    },
    {
        name: 'YouTube SEO Title',
        desc: 'An AI tool that generates SEO-optimized YouTube titles based on your video information.',
        category: 'YouTube',
        icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384060.png',
        aiPrompt: 'Generate 5 SEO-friendly YouTube video titles based on the given topic and target audience.',
        slug: 'youtube-seo-title',
        form: [
            {
                label: 'Enter your video topic: ',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter target audience: ',
                field: 'input',
                name: 'audience'
            }
        ]
    },
    {
        name: 'YouTube Description Generator',
        desc: 'An AI tool that generates keyword-optimized descriptions for YouTube videos.',
        category: 'YouTube',
        icon: 'https://cdn-icons-png.flaticon.com/128/13376/13376172.png',
        aiPrompt: 'Generate a keyword-rich description for the following YouTube video, in 200 words or less.',
        slug: 'youtube-description-generator',
        form: [
            {
                label: 'Enter your video title: ',
                field: 'input',
                name: 'title',
                required: true
            },
            {
                label: 'Enter video summary: ',
                field: 'textarea',
                name: 'summary'
            }
        ]
    },
    {
        name: 'YouTube Tag Generator',
        desc: 'An AI tool that generates optimized tags for YouTube videos.',
        category: 'YouTube',
        icon: 'https://cdn-icons-png.flaticon.com/128/9426/9426770.png',
        aiPrompt: 'Generate a list of 10-15 highly relevant tags for the following YouTube video title.',
        slug: 'youtube-tag-generator',
        form: [
            {
                label: 'Enter your video title: ',
                field: 'input',
                name: 'title',
                required: true
            },
            {
                label: 'Enter video niche or topic: ',
                field: 'input',
                name: 'niche'
            }
        ]
    },
    {
        name: 'Rewrite Article (Plagiarism Free)',
        desc: 'An AI tool that rewrites articles to make them plagiarism-free.',
        category: 'Article',
        icon: 'https://cdn-icons-png.flaticon.com/128/10224/10224768.png',
        aiPrompt: 'Rewrite the following article to make it plagiarism-free while keeping the original meaning and structure.',
        slug: 'rewrite-article',
        form: [
            {
                label: 'Enter your article content: ',
                field: 'textarea',
                name: 'article',
                required: true
            }
        ]
    },
    {
        name: 'Text Improver',
        desc: 'An AI tool that improves the quality and tone of a text.',
        category: 'Text Enhancement',
        icon: 'https://cdn-icons-png.flaticon.com/128/12860/12860749.png',
        aiPrompt: 'Improve the following text by making it more engaging and clear, while keeping the original meaning intact.',
        slug: 'text-improver',
        form: [
            {
                label: 'Enter your text to improve: ',
                field: 'textarea',
                name: 'text',
                required: true
            }
        ]
    },
    {
        name: 'Add Emojis to Text',
        desc: 'An AI tool that adds relevant emojis to make your text more engaging.',
        category: 'Text Enhancement',
        icon: 'https://cdn-icons-png.flaticon.com/128/4160/4160724.png',
        aiPrompt: 'Add relevant emojis to the following text while keeping the meaning intact.',
        slug: 'add-emojis-to-text',
        form: [
            {
                label: 'Enter your text: ',
                field: 'textarea',
                name: 'text',
                required: true
            }
        ]
    },
    {
        name: 'Instagram Post Generator',
        desc: 'An AI tool that generates captions for Instagram posts based on the topic and tone.',
        category: 'Instagram',
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111463.png',
        aiPrompt: 'Generate an Instagram post caption in a {tone} style based on the given topic.',
        slug: 'instagram-post-generator',
        form: [
            {
                label: 'Enter your topic: ',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Select tone of voice: ',
                field: 'select',
                name: 'tone',
                options: ['Casual', 'Professional', 'Humorous', 'Inspirational'],
                required: true
            }
        ]
    }
]