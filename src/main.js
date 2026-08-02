import "./styles/main.css";
import Router from "./router/router";
import { openDB } from "./db/open.db.js";
import { UserRepository } from "./repositories/UserRepository.js";
import { SessionStorage } from "./infrasructure/storage/SessionStorage.js"
import { STORAGE_KEYS } from "./utils/constants.js";
import { userStore } from "./store/index.js";
import { restoreSession } from "./application/auth/restoreSession.js";
import { routes } from "./router/routes.js";


const db = await openDB();
const userRepository = new UserRepository(db);
const sessionStorage = new SessionStorage(STORAGE_KEYS);

await restoreSession({
  sessionStorage,
  userRepository,
  userStore
})

const appContext = {
  sessionStorage,
  userRepository,
  userStore,
}
const router = new Router(routes, appContext);
appContext.router = router;
router.start();
await router.renderRoute();
