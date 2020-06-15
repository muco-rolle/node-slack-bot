import { App } from '@slack/bolt';

const bootstrap = async () => {
    const app = new App({
        signingSecret: '9cff884e9b4969968b68be87864aafff',
        token:
            'xoxp-1170456475879-1183820171189-1170827584071-2b3afa4a5dea889c7d6126ebfff5b2d0',
    });

    // listen to events

    app.start(4000);

    console.log('⚡️ node-bot app is running!');
};

bootstrap();
