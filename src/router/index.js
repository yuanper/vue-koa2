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
import Test from '@/views/theme/Test'
import NewTheme from '@/views/theme/NewTheme'
import Label from '@/views/theme/Label'
import Wallpaper from '@/views/wallpaper/Index'
import MyWallpaper from '@/views/wallpaper/MyWallpaper'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Sign',
      name: 'Sign',
      component: Sign
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin,
      children: [
        {
          path: 'system',
          component: System,
          children: [
            {
              path: 'user',
              component: User
            },
            {
              path: 'group',
              component: Group
            },
            {
              path: 'menu',
              component: Menu
            },
            {
              path: 'editpsd',
              component: EditPsd
            }
          ]
        },
        {
          path: 'theme',
          component: Theme,
          children: [
            {
              path: 'list',
              component: List
            },
            {
              path: 'fileupdate',
              component: FileUpdate
            },
            {
              path: 'fileupload',
              component: FileUpload
            },
            {
              path: 'test',
              component: Test
            },
            {
              path: 'newtheme',
              component: NewTheme
            },
            {
              path: 'label',
              component: Label
            }
          ]
        },
        {
          path: 'wallpaper',
          component: Wallpaper,
          children: [
            {
              path: 'mywallpaper',
              component: MyWallpaper
            }
          ]
        }
      ]
    }
  ]
})
