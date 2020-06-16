import { App } from '@slack/bolt';
import { env } from './utils/env';

const bootstrap = async () => {
    try {
        const app = new App({
            signingSecret: env.get('slack_signing_secret'),
            token: env.get('slack_token'),
        });

        // listen to events

        app.start(4000);

        console.log();
        console.log('⚡️ node-bot app is running on http://localhost:4000');
    } catch (error) {
        console.log(error);
    }
};

bootstrap();
