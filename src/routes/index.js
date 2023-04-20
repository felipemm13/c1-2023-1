import Router from 'koa-router'
import getHealth from './health/health'
import users from './users/users'
const router = new Router()

router.get('/health', getHealth)
router.get('/api/users/:name',users.searchName)

export default router
