import 'firebase' from 'firebase/app'
import 'firebase/auth'

const app = firebase.iniializeApp({
  apiKey: process.env.fireBaseApiKey,
  authDomain: process.env.fireBaseAuthDomain,
  projectId: process.env.fireBaseProductId,
  storageBucket: process.env.fireBaseStorageBucket;
  messagingSenderId: process.env.fireBaseMessagerId,
  appId: process.env.fireBaseAppId,
  measurementId: process.env.fireBaseMeasurementId,
})

export const auth = app.auth()
export default app