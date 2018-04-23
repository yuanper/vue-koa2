import Vue from 'vue'
import Router from 'vue-router'
import Sign from '@/views/Sign'
import Admin from '@/views/Admin'
import User from '@/views/system/User'
import System from '@/views/system/Index'
import Group from '@/views/system/Group'
import Menu from '@/views/system/Menu'
import EditPsd from '@/views/system/EditPsd'
import Theme from '@/views/theme/Index'
import List from '@/views/theme/List'
import FileUpdate from '@/views/theme/FileUpdate'
import FileUpload from '@/views/theme/FileUpload'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Sign',
      component: Sign
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin,
      children: [
        {
          path: 'System',
          component: System,
          children: [
            {
              path: 'User',
              component: User
            },
            {
              path: 'Group',
              component: Group
            },
            {
              path: 'Menu',
              component: Menu
            },
            {
              path: 'EditPsd',
              component: EditPsd
            }
          ]
        },
        {
          path: 'Theme',
          component: Theme,
          children: [
            {
              path: 'List',
              component: List
            },
            {
              path: 'FileUpdate',
              component: FileUpdate
            },
            {
              path: 'FileUpload',
              component: FileUpload
            }
          ]
        }
      ]
    }
  ]
})
