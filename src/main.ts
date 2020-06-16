import { App } from '@slack/bolt';
import { env } from './utils/env';

const bootstrap = async () => {
    try {
        const app = new App({
            signingSecret: env.get('slack_signing_secret'),
            token: env.get('slack_token'),
        });

        app.event('app_home_opened', async ({ event, context }) => {
            try {
                /* view.publish is the method that your app uses to push a view to the Home tab */
                const result = await app.client.views.publish({
                    /* retrieves your xoxb token from context */
                    token: context.botToken,

                    /* the user that opened your app's app home */
                    user_id: event.user,

                    /* the view payload that appears in the app home*/
                    view: {
                        type: 'home',
                        callback_id: 'home_view',

                        /* body of the view */
                        blocks: [
                            {
                                type: 'section',
                                text: {
                                    type: 'mrkdwn',
                                    text:
                                        "*Welcome to your _App's Home_* :tada:",
                                },
                            },
                            {
                                type: 'divider',
                            },
                            {
                                type: 'section',
                                text: {
                                    type: 'mrkdwn',
                                    text: 'Welcome to my bot',
                                },
                            },
                            {
                                type: 'actions',
                                elements: [
                                    {
                                        type: 'button',
                                        text: {
                                            type: 'plain_text',
                                            text: 'Click me!',
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                });
            } catch (error) {
                console.error(error);
            }
        });

        app.start(4000);

        console.log('⚡️ node-bot app is running on http://localhost:4000');
    } catch (error) {
        console.log(error);
    }
};

bootstrap();
