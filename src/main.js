import { createApp } from 'vue'
import * as Sentry from '@sentry/vue'
import App from './App.vue'
import './style.css'

const app = createApp(App)

const releaseName = 'sentry-vue@1.0.2'

Sentry.init({
    app,

    dsn: 'https://6b5dc6cbcda47b8adfe598ca49f4b818@o4512134249119744.ingest.us.sentry.io/4512157647372288',

    environment: import.meta.env.MODE,

    release: releaseName,

    integrations: [
        Sentry.browserTracingIntegration(),
    ],

    tracesSampleRate: import.meta.env.PROD ? 1.0 : 1.0,

    tracePropagationTargets: [
        'localhost',
        /^https:\/\/api\.example\.com/,
    ],
})
Sentry.setUser({
    id: 'sentry-user-001',
    username: '测试用户525',
})

app.mount('#app')
